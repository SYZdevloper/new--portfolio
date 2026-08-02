const fs = require('fs');
const content = fs.readFileSync('app/page.tsx', 'utf8');
const lines = content.split('\n');

// Keep lines 0 to 7 (which is up to `const isIndia = country === 'IN';`)
const topLines = lines.slice(0, 8);
// Add the fixed line 8
const fixedLine = "  const currency = isIndia ? '₹' : '$';";
// Append everything from line 1106 (which is `  const priceStarter = ...`) onwards
const bottomLines = lines.slice(1106);

const fixedContent = [...topLines, fixedLine, ...bottomLines].join('\n');
fs.writeFileSync('app/page.tsx', fixedContent);
console.log('Fixed page.tsx!');
