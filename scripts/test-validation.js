const http = require('http');

async function testValidation() {
  const payload = JSON.stringify({
    interest: "Family Protection",
    name: "Ramesh",
    phone: "123" // Invalid phone number (less than 10 digits)
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
      console.log(`[VALIDATION TEST] Status: ${res.statusCode}, Body: ${data}`);
      if (res.statusCode === 400) {
        console.log(">>> Input validation correctly rejected malformed phone with 400 Bad Request <<<");
      }
    });
  });

  req.write(payload);
  req.end();
}

testValidation();
