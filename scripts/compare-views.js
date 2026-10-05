const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const profileDir = path.join(__dirname, '.edge_profile_compare');
const outDir = path.join(__dirname, '..', 'screenshots', 'theme-audit');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  const edge = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9224',
    '--disable-gpu',
    '--no-sandbox',
    `--user-data-dir=${profileDir}`,
    'http://localhost:3000'
  ]);

  let tabs = null;
  for (let i = 0; i < 15; i++) {
    await new Promise(r => setTimeout(r, 500));
    try {
      tabs = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9224/json', (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
      });
      if (tabs) break;
    } catch (e) {
      // retry
    }
  }

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

  // 1. Capture Mobile Viewport (390x844)
  console.log('Capturing mobile...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 1500));
  
  let shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'mobile-viewport.png'), Buffer.from(shot.data, 'base64'));

  // Mobile scroll 1 screen down
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 750);' });
  await new Promise(r => setTimeout(r, 600));
  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'mobile-scrolled-1.png'), Buffer.from(shot.data, 'base64'));

  // Mobile scroll 2 screens down
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 1500);' });
  await new Promise(r => setTimeout(r, 600));
  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'mobile-scrolled-2.png'), Buffer.from(shot.data, 'base64'));

  // 2. Capture Desktop Viewport (1440x900)
  console.log('Capturing desktop...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
  await send('Page.reload');
  await new Promise(r => setTimeout(r, 1500));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'desktop-viewport.png'), Buffer.from(shot.data, 'base64'));

  // Desktop scroll 1 screen down
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 800);' });
  await new Promise(r => setTimeout(r, 600));
  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'desktop-scrolled-1.png'), Buffer.from(shot.data, 'base64'));

  // Desktop scroll 2 screens down
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 1600);' });
  await new Promise(r => setTimeout(r, 600));
  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'desktop-scrolled-2.png'), Buffer.from(shot.data, 'base64'));

  ws.close();
  edge.kill();
  console.log('Done capturing comparison!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
