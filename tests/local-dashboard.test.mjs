import assert from 'node:assert/strict';
import { request } from 'node:http';
import { after, before, test } from 'node:test';
import { createDashboardServer } from '../tools/local-dashboard/server.mjs';

let server;
let port;
let reads = 0;
const secret = 'sensitive-internal-credential-detail';

function get(path, { method = 'GET', headers = {} } = {}) {
  return new Promise((resolve, reject) => {
    const req = request({ host: '127.0.0.1', port, path, method, headers }, res => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }));
    });
    req.on('error', reject);
    req.end();
  });
}

before(async () => {
  server = createDashboardServer({ load: async () => {
    reads++;
    if (reads > 1) throw new Error(secret);
    return { visitors: { example: { browser: '<img src=x onerror=alert(1)>' } } };
  } });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  port = server.address().port;
});

after(async () => { await new Promise(resolve => server.close(resolve)); });

test('serves only dashboard assets and rejects filesystem/credential paths', async () => {
  const result = await get('/');
  assert.equal(result.status, 200);
  assert.match(result.headers['content-security-policy'], /frame-ancestors 'none'/);
  assert.equal(result.headers['cache-control'], 'no-store');
  assert.equal(result.headers['x-content-type-options'], 'nosniff');
  for (const path of ['/server.mjs', '/../../package.json', '/credentials/key.json', '/.env', '/api/analytics?path=other']) {
    assert.equal((await get(path)).status, 404, path);
  }
});

test('rejects DNS rebinding and requests from another website before reading data', async () => {
  for (const headers of [
    { Host: `attacker.example:${port}` },
    { Origin: 'https://attacker.example' },
    { 'Sec-Fetch-Site': 'cross-site' },
    { 'Sec-Fetch-Site': 'same-site' },
    {},
  ]) {
    const result = await get('/api/analytics', { headers });
    assert.equal(result.status, 403);
    assert.equal(result.headers['access-control-allow-origin'], undefined);
  }
  assert.equal(reads, 0);
});

test('no endpoint permits writes or CORS preflight', async () => {
  for (const method of ['POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']) {
    assert.equal((await get('/api/analytics', { method, headers: { 'X-Local-Dashboard': '1' } })).status, 405);
  }
  assert.equal(reads, 0);
});

test('same-origin dashboard can read JSON without credentials or cacheable responses', async () => {
  const result = await get('/api/analytics', { headers: {
    'X-Local-Dashboard': '1', Origin: `http://127.0.0.1:${port}`, 'Sec-Fetch-Site': 'same-origin',
  } });
  assert.equal(result.status, 200);
  assert.equal(result.headers['cache-control'], 'no-store');
  assert.match(result.headers['content-type'], /^application\/json/);
  assert.equal(JSON.parse(result.body).visitors.example.browser, '<img src=x onerror=alert(1)>');
  assert.equal(reads, 1);
});

test('credential failures fail closed and do not expose internal details', async () => {
  const result = await get('/api/analytics', { headers: { 'X-Local-Dashboard': '1' } });
  assert.equal(result.status, 503);
  assert.equal(result.body.includes(secret), false);
  assert.match(JSON.parse(result.body).error, /credentials/i);
});
