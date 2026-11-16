import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';
import { securityHeaders } from './security/headers.mjs';

// Vite preview serves HTTP, including when opened from a phone on the LAN.
// Keep production HTTPS enforcement in security/headers.mjs and hosting config.
const previewHeaders = { ...securityHeaders };
previewHeaders['Content-Security-Policy'] = securityHeaders['Content-Security-Policy']
  .split('; ').filter(directive => directive !== 'upgrade-insecure-requests').join('; ');
delete previewHeaders['Strict-Transport-Security'];

const removedPage = readFileSync(new URL('./public/410.html', import.meta.url));
const retiredPaths = new Set(['/data', '/data.html', '/xallaknm/data', '/xallaknm/data.html', '/xallaknm/data-standalone.html']);
function retiredDashboard(request, response, next) {
  const path = request.url.split('?')[0].replace(/\/$/, '');
  if (!retiredPaths.has(path) && path !== '/tools' && !path.startsWith('/tools/')) return next();
  response.writeHead(410, {
    ...securityHeaders,
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Robots-Tag': 'noindex, nofollow',
  });
  response.end(removedPage);
}

export default defineConfig({
  plugins: [react(), {
    name: 'retire-public-dashboard',
    configureServer(server) { server.middlewares.use(retiredDashboard); },
    configurePreviewServer(server) { server.middlewares.use(retiredDashboard); },
  }],
  build: { outDir: 'build', sourcemap: false },
  server: {
    host: '127.0.0.1',
    fs: {
      strict: true,
      deny: ['.env', '.env.*', '*.{crt,pem}', '**/.git/**', '**/tools/**', '**/security/**'],
    },
  },
  preview: { host: '127.0.0.1', headers: previewHeaders },
});
