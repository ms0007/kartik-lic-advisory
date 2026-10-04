const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = `"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"`;
const profileDir = path.join(__dirname, '.edge_profile');
const target = path.join(__dirname, '..', 'screenshots', 'vercel-home-full-bottom.png');

// Capture full bottom of live Vercel
const cmd = `${edgePath} --headless --disable-gpu --no-sandbox --user-data-dir="${profileDir}" --no-first-run --no-default-browser-check --screenshot="${target}" --window-size=1366,22000 "https://kartik-lic-advisory.vercel.app"`;

console.log('Capturing home bottom...');
try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('Captured:', target);
} catch (e) {
  console.error(e);
}
