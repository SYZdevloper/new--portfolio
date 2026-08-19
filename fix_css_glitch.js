const fs = require('fs');
const path = require('path');

function processDirectory(baseDir, cssImportStr, layoutCssImportStr) {
    // 1. Create layout.tsx
    const layoutContent = `import "${layoutCssImportStr}";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
`;
    fs.writeFileSync(path.join(baseDir, 'layout.tsx'), layoutContent, 'utf8');
    console.log(`Created layout.tsx in ${baseDir}`);

    // 2. Remove the CSS import from all page.tsx files
    const dirs = fs.readdirSync(baseDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    let replacedCount = 0;
    for (const dirName of dirs) {
        const pagePath = path.join(baseDir, dirName, 'page.tsx');
        if (fs.existsSync(pagePath)) {
            let content = fs.readFileSync(pagePath, 'utf8');
            if (content.includes(cssImportStr)) {
                content = content.replace(cssImportStr, '');
                fs.writeFileSync(pagePath, content, 'utf8');
                replacedCount++;
            } else {
                // Try alternative formats just in case
                const alt1 = cssImportStr.replace(/"/g, "'");
                if (content.includes(alt1)) {
                    content = content.replace(alt1, '');
                    fs.writeFileSync(pagePath, content, 'utf8');
                    replacedCount++;
                }
            }
        }
    }
    console.log(`Removed CSS import from ${replacedCount} page.tsx files in ${baseDir}`);
}

const industriesDir = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'industries');
// The industries pages use: import "../industry-template.css";
// In layout.tsx, it will be: import "./industry-template.css";
processDirectory(industriesDir, 'import "../industry-template.css";\n', './industry-template.css');

const servicesDir = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'services');
// The services pages use: import "../business-website-development/services.css";
// In layout.tsx, it will be: import "./business-website-development/services.css";
processDirectory(servicesDir, 'import "../business-website-development/services.css";\n', './business-website-development/services.css');
