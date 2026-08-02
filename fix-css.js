const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');
// The file might contain invalid characters, we just want to replace the content string
css = css.replace(/\.price-features li::before\s*{\s*content:\s*"[^"]*";/g, '.price-features li::before {\n      content: "✓";');
fs.writeFileSync('app/globals.css', css, 'utf8');
console.log('Fixed CSS checkmark');
