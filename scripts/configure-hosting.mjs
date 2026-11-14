import { readdir, writeFile } from 'node:fs/promises';
import { securityHeaders } from '../security/headers.mjs';

const retiredPaths = ['/data', '/data.html', '/xallaknm/data', '/xallaknm/data.html', '/xallaknm/data-standalone.html', '/tools/:path*'];
const mainSiteOnly = [{ type: 'host', value: 'shop.hamagardy.com' }];
const vercel = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  framework: 'vite',
  buildCommand: 'npm run build',
  outputDirectory: 'build',
  headers: [{
    source: '/(.*)',
    missing: mainSiteOnly,
    headers: Object.entries(securityHeaders).map(([key, value]) => ({ key, value })),
  }, ...retiredPaths.map(source => ({
    source,
    missing: mainSiteOnly,
    headers: [{ key: 'Cache-Control', value: 'no-store' }, { key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
  }))],
  rewrites: [{
    source: '/:path*',
    has: [{ type: 'host', value: 'shop.hamagardy.com' }],
    destination: 'https://newhama.onrender.com/:path*',
  }, ...retiredPaths.map(source => ({ source, destination: '/410.html' })), {
    source: '/:path*', destination: '/index.html',
  }],
};

// Netlify cannot condition response headers on Host. Scope the CSP to the
// portfolio's page paths so it does not impose a policy on the proxied shop.
const publicPages = (await readdir('public')).filter(name => name.endsWith('.html')).map(name => `/${name}`);
const pagePaths = ['/', '/portfolio', '/portfolio/', '/xallaknm', '/xallaknm/*', '/smokefree', '/smokefree/', '/prayer-times-plus', '/prayer-times-plus/', ...publicPages];
let netlify = `[build]\n  command = "npm run build"\n  publish = "build"\n\n[build.environment]\n  NODE_VERSION = "22"\n\n[[redirects]]\n  from = "/*"\n  to = "https://newhama.onrender.com/:splat"\n  status = 200\n  force = true\n  conditions = { Host = ["shop.hamagardy.com"] }\n`;
for (const path of retiredPaths) {
  netlify += `\n[[redirects]]\n  from = ${JSON.stringify(path.replace(':path*', '*'))}\n  to = "/410.html"\n  status = 404\n  force = true\n`;
}
netlify += '\n# SPA fallback for main site\n[[redirects]]\n  from = "/*"\n  to = "/index.html"\n  status = 200\n';
for (const path of pagePaths) {
  netlify += `\n[[headers]]\n  for = ${JSON.stringify(path)}\n  [headers.values]\n`;
  for (const [name, value] of Object.entries(securityHeaders)) netlify += `    ${JSON.stringify(name)} = ${JSON.stringify(value)}\n`;
}
await writeFile('vercel.json', JSON.stringify(vercel, null, 2) + '\n');
await writeFile('netlify.toml', netlify);
console.log('Updated Vercel and Netlify security configuration.');
