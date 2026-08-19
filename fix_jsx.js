const fs = require('fs');
const path = require('path');

const directory = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'services');
const filesToFix = [
    "ev-charging-experiences",
    "station-discovery-and-access",
    "accounts-sessions-and-payments",
    "fleet-and-property-portals",
    "charging-operations-dashboards"
];

filesToFix.forEach(slug => {
    const filePath = path.join(directory, slug, "page.tsx");
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace "<SiteFooter />" with "</main>\n\n        <SiteFooter />"
    // Only if </main> is missing.
    if (!content.includes('</main>')) {
        content = content.replace(/<SiteFooter \/>/g, '</main>\n\n        <SiteFooter />');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed JSX in ${slug}`);
    } else {
        console.log(`Already fixed in ${slug}`);
    }
});
