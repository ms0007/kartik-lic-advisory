const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const profileDir = path.join(__dirname, '.edge_profile_full_audit');
const outDir = path.join(__dirname, '..', 'screenshots', 'audit');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const routes = [
  { name: 'home', path: '/' },
  { name: 'calculator', path: '/insurance-calculator' },
  { name: 'compare', path: '/compare' },
  { name: 'why-insurance', path: '/why-life-insurance' },
  { name: 'solutions', path: '/solutions' },
  { name: 'claims', path: '/claims-guide' },
  { name: 'contact', path: '/contact' }
];

async function run() {
  const edge = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9223',
    '--disable-gpu',
    '--no-sandbox',
    `--user-data-dir=${profileDir}`,
    'http://localhost:3000'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  const tabs = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9223/json', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

  const pageTab = tabs.find(t => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  let id = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const msgId = id++;
      pending.set(msgId, resolve);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data.toString());
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg.result);
      pending.delete(msg.id);
    }
  });

  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve);
    ws.addEventListener('error', reject);
  });

  await send('Page.enable');

  console.log('--- Capturing Desktop Viewports (1440x900) ---');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  for (const r of routes) {
    await send('Page.navigate', { url: `http://localhost:3000${r.path}` });
    await new Promise(res => setTimeout(res, 800));
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    if (shot && shot.data) {
      const filePath = path.join(outDir, `desktop-1440-${r.name}.png`);
      fs.writeFileSync(filePath, Buffer.from(shot.data, 'base64'));
      console.log(`Captured: desktop-1440-${r.name}.png`);
    }
  }

  console.log('--- Capturing Mobile Viewports (390x844) ---');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });

  for (const r of routes) {
    await send('Page.navigate', { url: `http://localhost:3000${r.path}` });
    await new Promise(res => setTimeout(res, 800));
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    if (shot && shot.data) {
      const filePath = path.join(outDir, `mobile-390-${r.name}.png`);
      fs.writeFileSync(filePath, Buffer.from(shot.data, 'base64'));
      console.log(`Captured: mobile-390-${r.name}.png`);
    }
  }

  ws.close();
  edge.kill();
  console.log('All audit screenshots captured successfully!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
