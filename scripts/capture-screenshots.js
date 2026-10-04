const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = `"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"`;
const outDir = path.join(__dirname, '..', 'screenshots');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const shots = [
  { name: 'audit-mobile-hero-fixed.png', size: '390,844', url: 'http://localhost:3000' },
  { name: 'audit-mobile-contact-fixed.png', size: '390,844', url: 'http://localhost:3000/contact' }
];

const profileDir = path.join(__dirname, '.edge_profile');

for (const s of shots) {
  const target = path.join(outDir, s.name);
  const cmd = `${edgePath} --headless --disable-gpu --no-sandbox --user-data-dir="${profileDir}" --no-first-run --no-default-browser-check --screenshot="${target}" --window-size=${s.size} "${s.url}"`;
  console.log('Capturing:', s.name);
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (err) {
    console.error('Failed to capture:', s.name, err.message);
  }
}
console.log('All screenshots captured successfully!');
