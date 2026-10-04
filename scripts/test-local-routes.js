const http = require('http');

const routes = [
  '/',
  '/contact',
  '/why-life-insurance',
  '/compare',
  '/insurance-calculator',
  '/riders',
  '/solutions',
  '/faq',
  '/about',
  '/claims-guide',
  '/privacy',
  '/terms',
  '/disclaimer',
  '/resources'
];

async function checkRoute(route) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${route}`, (res) => {
      resolve({ route, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ route, status: 'ERROR', error: err.message });
    });
  });
}

async function run() {
  console.log('Testing all local routes on http://localhost:3000...\n');
  let allOk = true;
  for (const r of routes) {
    const res = await checkRoute(r);
    const ok = res.status === 200;
    if (!ok) allOk = false;
    console.log(`${ok ? '✓' : '✗'} ${r.padEnd(25)} -> HTTP ${res.status}`);
  }
  console.log(`\nLocal validation result: ${allOk ? 'ALL 14 ROUTES HEALTHY (HTTP 200 OK)' : 'SOME ROUTES FAILED'}`);
}

run();
