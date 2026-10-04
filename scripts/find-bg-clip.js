const fs = require('fs');
const path = require('path');

function searchDir(dir, pattern) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.next') searchDir(full, pattern);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.css')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes(pattern)) {
        console.log(full);
        content.split('\n').forEach((line, i) => {
          if (line.includes(pattern)) console.log(`  Line ${i+1}: ${line.trim()}`);
        });
      }
    }
  }
}

searchDir('src', 'bg-clip-text');
