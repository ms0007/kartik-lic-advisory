const fs = require('fs');
const path = require('path');

const LUXURY_HERO_OPEN = `<section className="relative text-white py-20 px-4 overflow-hidden" style={{background: 'linear-gradient(135deg, #030816 0%, #071329 60%, #0b1f4a 100%)'}}>
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(26,58,122,0.25) 0%, transparent 60%), radial-gradient(ellipse at 75% 25%, rgba(212,175,55,0.08) 0%, transparent 55%)'}} />
          <div className="relative`;

const OLD_HERO_VARIANTS = [
  `<section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 px-4">\n          <div className="max-w-4xl mx-auto`,
  `<section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 px-4">\n          <div className="max-w-3xl mx-auto`,
  `<section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 px-4">\n          <div className="max-w-2xl mx-auto`,
  `<section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 px-4">\n          <div className="max-w-5xl mx-auto`,
];

// Breadcrumb upgrade - use dark luxury style
const LUXURY_BREADCRUMB = `<div className="bg-[#060e1d] border-b border-white/10 py-2.5 px-4 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5">`;

const OLD_BREADCRUMB_VARIANTS = [
  `<div className="bg-slate-100/70 border-b border-slate-200 py-2.5 px-4 text-xs text-slate-500">\n          <div className="max-w-7xl mx-auto flex items-center gap-1.5">`,
  `<div className="bg-slate-100/70 border-b border-slate-200 py-2 px-4 text-xs text-slate-500">\n          <div className="max-w-7xl mx-auto flex items-center gap-1.5">`,
];

// Breadcrumb link colors
const LUXURY_BREADCRUMB_LINK = `<Link href="/" className="hover:text-gold-300 text-slate-400">Home</Link>`;
const OLD_BREADCRUMB_LINK = `<Link href="/" className="hover:text-blue-900">Home</Link>`;

const pagePaths = [
  'src/app/insurance-calculator/page.tsx',
  'src/app/compare/page.tsx',
  'src/app/claims-guide/page.tsx',
  'src/app/solutions/page.tsx',
  'src/app/riders/page.tsx',
  'src/app/why-life-insurance/page.tsx',
  'src/app/about/page.tsx',
  'src/app/faq/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/resources/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/disclaimer/page.tsx',
];

let totalFixed = 0;

for (const filePath of pagePaths) {
  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping (not found): ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;
  const original = content;

  // Fix breadcrumb background
  for (const oldBreadcrumb of OLD_BREADCRUMB_VARIANTS) {
    if (content.includes(oldBreadcrumb)) {
      content = content.replace(oldBreadcrumb, LUXURY_BREADCRUMB);
      changed = true;
    }
  }

  // Fix breadcrumb link color  
  if (content.includes(OLD_BREADCRUMB_LINK)) {
    content = content.replace(new RegExp(OLD_BREADCRUMB_LINK.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), LUXURY_BREADCRUMB_LINK);
    changed = true;
  }

  // Fix hero section backgrounds
  for (const oldHero of OLD_HERO_VARIANTS) {
    if (content.includes(oldHero)) {
      // Find the max-width class used
      const maxWMatch = oldHero.match(/"(max-w-\w+) mx-auto/);
      const maxWClass = maxWMatch ? maxWMatch[1] : 'max-w-4xl';
      content = content.replace(oldHero, LUXURY_HERO_OPEN + ` ${maxWClass} mx-auto`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf8');
    totalFixed++;
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`No hero/breadcrumb change needed: ${filePath}`);
  }
}

// ---- Fix claims-guide step cards (low contrast numbers) ----
const claimsPath = path.join(process.cwd(), 'src/app/claims-guide/page.tsx');
if (fs.existsSync(claimsPath)) {
  let claims = fs.readFileSync(claimsPath, 'utf8');

  // Upgrade step cards to luxury dark navy with gold step numbers
  const oldStepCard = `<div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-2xl font-serif font-black text-blue-900/40 block">
                      {s.step}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>`;

  const newStepCard = `<div key={idx} className="relative bg-gradient-to-br from-[#071329] to-[#0b1f4a] border border-gold-500/20 rounded-2xl p-6 flex flex-col justify-between shadow-card-elevated hover:border-gold-400/40 hover:shadow-card-hover transition-all duration-300">
                  <div className="space-y-3">
                    <span className="text-3xl font-serif font-black text-gold-400/80 block">
                      {s.step}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>`;

  if (claims.includes(oldStepCard)) {
    claims = claims.replace(oldStepCard, newStepCard);
    fs.writeFileSync(claimsPath, claims, 'utf8');
    console.log('Fixed: claims-guide step cards (dark luxury)');
    totalFixed++;
  }

  // Also upgrade the 4-step section background from white to premium off-white/light
  claims = fs.readFileSync(claimsPath, 'utf8');
  if (claims.includes('<section className="py-16 bg-white">')) {
    claims = claims.replace('<section className="py-16 bg-white">', '<section className="py-16 bg-slate-50">');
    fs.writeFileSync(claimsPath, claims, 'utf8');
    console.log('Fixed: claims-guide section background');
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);
