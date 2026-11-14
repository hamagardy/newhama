const byId = id => document.getElementById(id);
const display = value => ['string', 'number', 'boolean'].includes(typeof value) ? String(value) : '—';
const records = value => value && typeof value === 'object'
  ? Object.entries(value).sort(([a], [b]) => b.localeCompare(a)).slice(0, 20).map(([, record]) => record).filter(record => record && typeof record === 'object')
  : [];
const time = value => {
  if (!value || !['number', 'string'].includes(typeof value)) return '—';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '—' : date.toLocaleString();
};

function table(id, rows, columns) {
  const body = byId(id);
  body.replaceChildren();
  for (const record of rows) {
    const row = document.createElement('tr');
    for (const column of columns) {
      const cell = document.createElement('td');
      // Treat every database/export value as text, including HTML payloads.
      cell.textContent = column === 'timestamp' ? time(record[column]) : display(record[column]);
      row.appendChild(cell);
    }
    body.appendChild(row);
  }
  if (!rows.length) {
    const cell = document.createElement('td');
    cell.colSpan = columns.length;
    cell.textContent = 'No records';
    const row = document.createElement('tr');
    row.appendChild(cell);
    body.appendChild(row);
  }
}

function render(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Open a Firebase database or analytics JSON export.');
  const data = input.analytics ?? input;
  if (!data || typeof data !== 'object' || !['visitors', 'counters', 'downloads', 'page_views', 'external_links'].some(key => Object.hasOwn(data, key))) {
    throw new Error('The export must contain analytics collections.');
  }
  const visitors = records(data.visitors);
  byId('visitors-count').textContent = visitors.length;
  byId('mobile-count').textContent = display(data.counters?.visitors_by_device?.Mobile ?? 0);
  byId('desktop-count').textContent = display(data.counters?.visitors_by_device?.Desktop ?? 0);
  byId('downloads-count').textContent = display(data.counters?.downloads_app_store ?? 0);
  table('visitors', visitors, ['deviceType', 'os', 'browser', 'city', 'country', 'ip', 'timestamp']);
  table('downloads', records(data.downloads), ['store', 'timestamp']);
  table('page-views', records(data.page_views), ['page_name', 'timestamp']);
  table('external-links', records(data.external_links), ['link_name', 'destination_url', 'timestamp']);
  byId('updated').textContent = `Updated ${new Date().toLocaleTimeString()}`;
}

byId('refresh').addEventListener('click', async () => {
  const button = byId('refresh');
  button.disabled = true;
  byId('status').textContent = 'Loading authenticated Firebase analytics…';
  try {
    const response = await fetch('/api/analytics', { headers: { 'X-Local-Dashboard': '1' }, cache: 'no-store' });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to load analytics.');
    render(data);
    byId('status').textContent = 'Connected to Firebase. Refresh to load the latest records.';
  } catch (error) {
    byId('status').textContent = error.message;
  } finally {
    button.disabled = false;
  }
});

byId('import').addEventListener('change', async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    if (file.size > 10 * 1024 * 1024) throw new Error('Use an analytics export smaller than 10 MB.');
    render(JSON.parse(await file.text()));
    byId('status').textContent = 'Viewing a local export. The file was not uploaded.';
  } catch (error) {
    byId('status').textContent = error.message;
  } finally {
    event.target.value = '';
  }
});
