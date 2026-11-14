import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { GoogleAuth } from 'google-auth-library';

const databaseURL = 'https://xallakanm-default-rtdb.firebaseio.com';
const assets = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/dashboard.js', ['dashboard.js', 'text/javascript; charset=utf-8']],
  ['/dashboard.css', ['dashboard.css', 'text/css; charset=utf-8']],
]);
const collections = ['visitors', 'downloads', 'page_views', 'external_links'];

export async function loadAnalytics() {
  // Never fall back to the database's anonymous/public access.
  const auth = new GoogleAuth({ scopes: [
    'https://www.googleapis.com/auth/firebase.database',
    'https://www.googleapis.com/auth/userinfo.email',
  ] });
  const token = await auth.getAccessToken();
  if (!token) throw new Error('Firebase authentication is required.');
  const names = ['counters', ...collections];
  const values = await Promise.all(names.map(async name => {
    const url = new URL(`${databaseURL}/analytics/${name}.json`);
    if (name !== 'counters') {
      url.searchParams.set('orderBy', JSON.stringify('$key'));
      url.searchParams.set('limitToLast', '20');
    }
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(15000),
      redirect: 'error',
    });
    if (!response.ok) throw new Error('Firebase denied the analytics request.');
    return await response.json();
  }));
  return Object.fromEntries(names.map((name, index) => [name, values[index]]));
}

export function createDashboardServer({ load = loadAnalytics } = {}) {
  return createServer(async (request, response) => {
    const address = response.socket.localAddress;
    const port = response.socket.localPort;
    const host = `127.0.0.1:${port}`;
    const origin = `http://${host}`;
    const send = (status, body, type = 'text/plain; charset=utf-8') => {
      response.writeHead(status, {
        'Content-Type': type,
        'Cache-Control': 'no-store',
        'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'",
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'no-referrer',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      });
      response.end(body);
    };
    // Exact Host checking also rejects DNS rebinding to a local listener.
    if (address !== '127.0.0.1' || request.headers.host !== host ||
        (request.headers.origin && request.headers.origin !== origin) ||
        ['cross-site', 'same-site'].includes(request.headers['sec-fetch-site'])) {
      send(403, 'Forbidden');
      return;
    }
    if (request.method !== 'GET') {
      send(405, 'Read-only dashboard');
      return;
    }
    if (request.url === '/api/analytics') {
      // Cross-origin pages cannot add this header without a CORS preflight.
      if (request.headers['x-local-dashboard'] !== '1') {
        send(403, 'Open the dashboard locally to access analytics.');
        return;
      }
      try {
        send(200, JSON.stringify(await load()), 'application/json; charset=utf-8');
      } catch {
        // Do not expose credential paths, tokens, or upstream response bodies.
        send(503, JSON.stringify({ error: 'Connect Google Application Default Credentials with Firebase read access, then refresh. See tools/local-dashboard/README.md. You can also open a Firebase JSON export below.' }), 'application/json; charset=utf-8');
      }
      return;
    }
    const asset = assets.get(request.url);
    if (!asset) {
      send(404, 'Not found');
      return;
    }
    try {
      send(200, await readFile(new URL(asset[0], import.meta.url)), asset[1]);
    } catch {
      send(500, 'Unable to load dashboard.');
    }
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const server = createDashboardServer();
  server.on('error', error => {
    console.error(error.code === 'EADDRINUSE' ? 'Port 4199 is in use. Close the existing local dashboard first.' : 'Unable to start the local dashboard.');
    process.exitCode = 1;
  });
  server.listen(4199, '127.0.0.1', () => console.log('Local analytics: http://127.0.0.1:4199 — press Ctrl+C to stop.'));
}
