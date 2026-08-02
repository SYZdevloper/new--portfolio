const fs = require('fs');

// 1. Fix CSS encoding issue permanently using Unicode escape
let css = fs.readFileSync('app/globals.css', 'utf8');
css = css.replace(/content:\s*['"][^'"]*['"];/g, (match) => {
  if (match.includes('var(') || !match.includes('price-features')) return match;
  return match; // We will just target the specific rule
});
css = css.replace(/\.price-features li::before\s*\{[\s\S]*?\}/, '.price-features li::before {\n      content: "\\2713";\n      color: var(--purple);\n      font-weight: 900;\n    }');
fs.writeFileSync('app/globals.css', css, 'utf8');

// 2. Fix page.tsx encoding corruption (the en-dash issue)
let page = fs.readFileSync('app/page.tsx', 'utf8');
page = page.replace(/7\?"10/g, '7-10');
page = page.replace(/17\?"20/g, '17-20');
fs.writeFileSync('app/page.tsx', page, 'utf8');

console.log("Fixed CSS and Page encoding issues.");
