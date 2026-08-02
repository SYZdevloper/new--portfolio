const fs = require('fs');
const path = require('path');

const pagePath = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// 1. Add imports and async function signature + logic
const importsToAdd = `import HomeInteractions from "@/components/HomeInteractions";
import { headers } from 'next/headers';

export default async function HomePage() {
  const headersList = await headers();
  const country = headersList.get('x-vercel-ip-country') || 'IN';
  const isIndia = country === 'IN';

  const currency = isIndia ? '₹' : '$';
  const priceStarter = isIndia ? '8,499' : '249';
  const pricePremium = isIndia ? '17,999' : '449';
  const priceEnterprise = isIndia ? '25,000+' : '649+';
  
  const budgetOptions = isIndia 
    ? [
        "Under ₹25,000",
        "₹25,000 – ₹50,000",
        "₹50,000 – ₹1,00,000",
        "₹1,00,000 – ₹3,00,000",
        "₹3,00,000+"
      ]
    : [
        "Under $500",
        "$500 – $1,000",
        "$1,000 – $2,500",
        "$2,500 – $5,000",
        "$5,000+"
      ];
`;

content = content.replace(
  'import HomeInteractions from "@/components/HomeInteractions";\r\n\r\nexport default function HomePage() {',
  importsToAdd
).replace(
  'import HomeInteractions from "@/components/HomeInteractions";\n\nexport default function HomePage() {',
  importsToAdd
);

// 2. Replace hardcoded prices
content = content.replace(/₹8,499/g, '{currency}{priceStarter}');
content = content.replace(/₹17,999/g, '{currency}{pricePremium}');
content = content.replace(/₹25,000\+/g, '{currency}{priceEnterprise}');

// Wait, the data-budget for enterprise button has "₹25,000 – ₹50,000". We need to replace that.
content = content.replace(/data-budget="₹25,000 – ₹50,000"/g, 'data-budget={budgetOptions[1]}');
content = content.replace(/data-budget="Under ₹25,000"/g, 'data-budget={budgetOptions[0]}');

// 3. Replace WhatsApp text dynamically
content = content.replace(
  '<li>WhatsApp chat integration</li>',
  '{isIndia && <li>WhatsApp chat integration</li>}'
);
content = content.replace(
  /and consent to receive a call, email or WhatsApp response regarding this enquiry\./g,
  'and consent to receive a call, email {isIndia ? "or WhatsApp " : ""}response regarding this enquiry.'
);

// 4. Replace budget options in <select>
const oldOptions = `                      <option>Under ₹25,000</option>
                      <option>₹25,000 – ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>₹1,00,000 – ₹3,00,000</option>
                      <option>₹3,00,000+</option>`;

const oldOptions2 = `                  <option>Under ₹25,000</option>
                  <option>₹25,000 – ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000 – ₹3,00,000</option>
                  <option>₹3,00,000+</option>`;

content = content.replace(oldOptions, '{budgetOptions.map(opt => <option key={opt}>{opt}</option>)}');
content = content.replace(oldOptions2, '{budgetOptions.map(opt => <option key={opt}>{opt}</option>)}');
content = content.replace(oldOptions.replace(/\r\n/g, '\n'), '{budgetOptions.map(opt => <option key={opt}>{opt}</option>)}');
content = content.replace(oldOptions2.replace(/\r\n/g, '\n'), '{budgetOptions.map(opt => <option key={opt}>{opt}</option>)}');

// 5. Replace "Starter packages begin at ₹8,499."
content = content.replace(
  'Starter packages begin at {currency}{priceStarter}.',
  'Starter packages begin at {currency}{priceStarter}.' // already replaced by regex
);

// We need to fix the JSX interpolation in strings that were matched by regex.
// E.g., data-price="{currency}{priceStarter}" -> data-price={\`\${currency}\${priceStarter}\`}
content = content.replace(/data-price="\{currency\}\{priceStarter\}"/g, 'data-price={`${currency}${priceStarter}`}');
content = content.replace(/data-price="\{currency\}\{pricePremium\}"/g, 'data-price={`${currency}${pricePremium}`}');
content = content.replace(/data-price="\{currency\}\{priceEnterprise\}"/g, 'data-price={`${currency}${priceEnterprise}`}');

// Also, <div className="price-value">{currency}{priceStarter}</div> is fine.
// But wait, there might be quotes around prices elsewhere.
// Let's write back the file
fs.writeFileSync(pagePath, content);
console.log('Done!');
