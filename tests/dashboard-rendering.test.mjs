import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';

test('stored HTML payloads are displayed literally in all dashboard cells', async () => {
  const elements = new Map();
  class Element {
    children = [];
    textContent = '';
    addEventListener() {}
    replaceChildren() { this.children = []; }
    appendChild(child) { this.children.push(child); }
    set innerHTML(_) { throw new Error('Untrusted HTML reached an HTML parser'); }
    set outerHTML(_) { throw new Error('Untrusted HTML reached an HTML parser'); }
  }
  const document = {
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, new Element());
      return elements.get(id);
    },
    createElement() { return new Element(); },
  };
  const payload = '<img src=x onerror="window.stolen=true">';
  const data = {
    visitors: { one: { browser: payload, city: payload, ip: payload } },
    downloads: { one: { store: payload } },
    external_links: { one: { destination_url: 'javascript:alert(1)', link_name: payload } },
    page_views: { one: { page_name: payload } },
  };
  const source = await readFile(new URL('../tools/local-dashboard/dashboard.js', import.meta.url), 'utf8');
  runInNewContext(source + '\nrender(data);', { document, data });
  assert.equal(elements.get('visitors').children[0].children[2].textContent, payload);
  assert.equal(elements.get('visitors').children[0].children[3].textContent, payload);
  assert.equal(elements.get('downloads').children[0].children[0].textContent, payload);
  assert.equal(elements.get('page-views').children[0].children[0].textContent, payload);
  assert.equal(elements.get('external-links').children[0].children[1].textContent, 'javascript:alert(1)');
});
