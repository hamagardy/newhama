import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (/^(tools|security|credentials|local-dashboard|node_modules)$/.test(entry.name)) {
        throw new Error(`Private directory included in build: ${path}`);
      }
      await inspect(path);
    } else {
      if (/^(data(?:-standalone)?\.html|server\.mjs|\.env.*)$/.test(entry.name) || /\.(pem|map)$/.test(entry.name)) {
        throw new Error(`Private file included in build: ${path}`);
      }
      if (/\.(html|js|json)$/.test(entry.name)) {
        const content = await readFile(path, 'utf8');
        if (/xallakanm-default-rtdb|analytics\/visitors|BEGIN (?:RSA )?PRIVATE KEY|"type"\s*:\s*"service_account"/.test(content)) {
          throw new Error(`Dashboard or credential data included in build: ${path}`);
        }
      }
    }
  }
}

await inspect('build');
console.log('Build security check passed: no private dashboard, credentials, or source maps.');
