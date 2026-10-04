const http = require('http');

async function testHoneypot() {
  const payload = JSON.stringify({
    interest: "Family Protection",
    name: "Spam Bot",
    phone: "9876543210",
    honeypot: "I am a malicious web crawler" // Bot fills hidden field
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
      console.log(`[HONEYPOT TEST] Status: ${res.statusCode}, Body: ${data}`);
      if (res.statusCode === 200) {
        console.log(">>> Honeypot correctly trapped bot with neutral 200 OK <<<");
      }
    });
  });

  req.write(payload);
  req.end();
}

testHoneypot();
