const http = require('http');

const routes = [
  '/',
  '/sitemap.xml',
  '/robots.txt',
  '/why-life-insurance',
  '/solutions',
  '/compare',
  '/riders',
  '/insurance-calculator',
  '/claims-guide',
  '/faq',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/disclaimer',
  '/resources',
  '/resources/what-does-life-insurance-actually-do',
  '/resources/how-to-calculate-family-protection-gap',
  '/resources/pure-term-vs-traditional-endowment-plans',
  '/resources/securing-child-education-milestones',
  '/resources/understanding-lic-riders-explained',
  '/resources/top-mistakes-buying-life-insurance'
];

async function checkRoute(route) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:3000${route}`, (res) => {
      resolve({ route, status: res.statusCode });
    });
    req.on('error', (err) => {
      resolve({ route, error: err.message });
    });
  });
}

async function testLeadApi() {
  return new Promise((resolve) => {
    const payload = JSON.stringify({
      interest: "Family Protection",
      ageGroup: "26–35 years",
      occupation: "Salaried",
      incomeRange: "₹10L to ₹25L",
      financialResponsibility: "Child Education",
      preferredContact: "WhatsApp",
      name: "Ramesh Kumar",
      phone: "9876543210",
      email: "ramesh@example.com"
    });

    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: '/api/leads',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, body: JSON.parse(data) });
      });
    });

    req.on('error', (err) => {
      resolve({ error: err.message });
    });

    req.write(payload);
    req.end();
  });
}

async function run() {
  console.log("=== 1. Testing Web Routes ===");
  let failed = 0;
  for (const route of routes) {
    const res = await checkRoute(route);
    if (res.status === 200) {
      console.log(`[PASS] ${route} -> Status: ${res.status}`);
    } else {
      console.error(`[FAIL] ${route} -> ${res.status || res.error}`);
      failed++;
    }
  }

  console.log("\n=== 2. Testing Lead Intake API ===");
  const leadRes = await testLeadApi();
  console.log(`[LEAD API RESULT] Status: ${leadRes.status}, Body:`, leadRes.body);

  if (failed === 0 && leadRes.status === 200 && leadRes.body.success) {
    console.log("\n>>> ALL TESTS PASSED SUCCESSFULLY! 100% PRODUCTION READY <<<");
  } else {
    console.error("\n>>> SOME TESTS FAILED <<<");
    process.exit(1);
  }
}

run();
