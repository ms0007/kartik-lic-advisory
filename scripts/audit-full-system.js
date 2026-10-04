const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const http = require('http');

const edgePath = `"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"`;
const profileDir = path.join(__dirname, '.edge_profile');
const outDir = path.join(__dirname, '..', 'screenshots', 'audit');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. API Verification
async function testLeadApi() {
  console.log('--- 1. Testing API Endpoints ---');
  return new Promise((resolve) => {
    const payload = JSON.stringify({
      interest: "Family Protection",
      ageGroup: "26–35 years",
      occupation: "Salaried",
      incomeRange: "₹10 Lakhs to ₹25 Lakhs",
      financialResponsibility: "Child Education",
      preferredContact: "WhatsApp",
      name: "Local Test User",
      phone: "9876543210",
      email: "test@example.com",
      honeypot: ""
    });

    const req = http.request('http://localhost:3000/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(`API /api/leads response: HTTP ${res.statusCode} -> ${data.trim()}`);
        resolve(res.statusCode === 200);
      });
    });

    req.on('error', (e) => {
      console.error('API Test Error:', e.message);
      resolve(false);
    });

    req.write(payload);
    req.end();
  });
}

// 2. Targeted Visual Viewports to capture
const auditShots = [
  // Desktop 1440x900 viewport shots
  { name: 'audit-desktop-hero.png', size: '1440,900', url: 'http://localhost:3000' },
  { name: 'audit-desktop-calculator.png', size: '1440,900', url: 'http://localhost:3000/insurance-calculator' },
  { name: 'audit-desktop-compare.png', size: '1440,1100', url: 'http://localhost:3000/compare' },
  { name: 'audit-desktop-contact.png', size: '1440,950', url: 'http://localhost:3000/contact' },
  { name: 'audit-desktop-why-insurance.png', size: '1440,950', url: 'http://localhost:3000/why-life-insurance' },
  // Laptop 1366x768 (User's screen)
  { name: 'audit-laptop-1366-hero.png', size: '1366,768', url: 'http://localhost:3000' },
  // Mobile 390x844 (iPhone 14)
  { name: 'audit-mobile-hero.png', size: '390,844', url: 'http://localhost:3000' },
  { name: 'audit-mobile-contact.png', size: '390,844', url: 'http://localhost:3000/contact' }
];

async function runAudit() {
  const apiOk = await testLeadApi();
  console.log('\n--- 2. Capturing Multi-Viewport Audit Screenshots ---');

  for (const s of auditShots) {
    const target = path.join(outDir, s.name);
    const cmd = `${edgePath} --headless --disable-gpu --no-sandbox --user-data-dir="${profileDir}" --no-first-run --no-default-browser-check --screenshot="${target}" --window-size=${s.size} "${s.url}"`;
    console.log(`Capturing [${s.size}]: ${s.name}`);
    try {
      execSync(cmd, { stdio: 'pipe' });
    } catch (err) {
      console.error(`Error capturing ${s.name}:`, err.message);
    }
  }

  console.log('\nAll audit screenshots captured in screenshots/audit/ !');
}

runAudit();
