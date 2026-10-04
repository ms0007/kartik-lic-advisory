const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const profileDir = path.join(__dirname, '.edge_profile_cdp');

async function run() {
  const edge = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    `--user-data-dir=${profileDir}`,
    'http://localhost:3000'
  ]);

  // Wait 1.5s for Edge to start
  await new Promise(r => setTimeout(r, 1500));

  // Get WebSocket debugger URL
  const tabs = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9222/json', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

  const pageTab = tabs.find(t => t.type === 'page');
  if (!pageTab) {
    console.error('No page tab found!');
    edge.kill();
    return;
  }

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

  // Enable Page & Emulation
  await send('Page.enable');
  await send('DOM.enable');
  
  // Set mobile device emulation: iPhone 14 / standard mobile 390 x 844
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
    screenOrientation: { angle: 0, type: 'portraitPrimary' }
  });

  await send('Emulation.setUserAgentOverride', {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
  });

  // Reload page to apply emulation cleanly
  await send('Page.reload');
  await new Promise(r => setTimeout(r, 2000));

  // Diagnose overflowing elements
  const evalResult = await send('Runtime.evaluate', {
    expression: `(() => {
      const docWidth = document.documentElement.offsetWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      const windowWidth = window.innerWidth;
      
      const elements = Array.from(document.querySelectorAll('*'));
      const overflowing = [];

      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.right > windowWidth + 2) {
          overflowing.push({
            tag: el.tagName,
            className: (el.className || '').toString().slice(0, 100),
            id: el.id,
            right: Math.round(rect.right),
            width: Math.round(rect.width)
          });
        }
      }

      return {
        docWidth,
        scrollWidth,
        windowWidth,
        overflowingCount: overflowing.length,
        overflowing: overflowing.slice(0, 15)
      };
    })()`,
    returnByValue: true
  });

  console.log('Mobile Diagnostics Result:');
  console.log(JSON.stringify(evalResult.result.value, null, 2));

  // Capture screenshot
  const shot = await send('Page.captureScreenshot', {
    format: 'png',
    clip: {
      x: 0,
      y: 0,
      width: 390,
      height: 844,
      scale: 1
    }
  });

  if (shot && shot.data) {
    const outPath = path.join(__dirname, '..', 'screenshots', 'audit-mobile-pixel-perfect.png');
    fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
    console.log('Saved pixel-perfect mobile screenshot to:', outPath);
  }

  // Also capture contact page
  await send('Page.navigate', { url: 'http://localhost:3000/contact' });
  await new Promise(r => setTimeout(r, 1500));
  const contactShot = await send('Page.captureScreenshot', {
    format: 'png',
    clip: {
      x: 0,
      y: 0,
      width: 390,
      height: 844,
      scale: 1
    }
  });
  if (contactShot && contactShot.data) {
    const outPath = path.join(__dirname, '..', 'screenshots', 'audit-mobile-contact-pixel-perfect.png');
    fs.writeFileSync(outPath, Buffer.from(contactShot.data, 'base64'));
    console.log('Saved contact mobile screenshot to:', outPath);
  }

  ws.close();
  edge.kill();
  process.exit(0);
}

run().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
