const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = `"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"`;
const outDir = path.join(__dirname, '..', 'screenshots');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const shots = [
  { name: 'desktop-hero.png', size: '1440,900', url: 'http://localhost:3000' },
  { name: 'mobile-hero.png', size: '390,844', url: 'http://localhost:3000' }
];

for (const s of shots) {
  const target = path.join(outDir, s.name);
  const cmd = `${edgePath} --headless --disable-gpu --no-sandbox --screenshot="${target}" --window-size=${s.size} "${s.url}"`;
  console.log('Capturing:', s.name);
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (err) {
    console.error('Failed to capture:', s.name, err.message);
  }
}
console.log('All screenshots captured successfully!');
