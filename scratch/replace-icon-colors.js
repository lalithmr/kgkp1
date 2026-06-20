const fs = require('fs');
const path = 'src/app/icon.svg';
let content = fs.readFileSync(path, 'utf8');

// Replace old logo color with new brand primary
content = content.replace(/fill="#[A-Fa-f0-9]+"/g, 'fill="#1B1C46"');

// Inject style tag for dark mode
const svgTag = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1620" height="612">';
const replacement = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1620" height="612">\n<style>@media (prefers-color-scheme: dark) { path { fill: #FFFFFF !important; } }</style>';

content = content.replace(svgTag, replacement);

fs.writeFileSync(path, content);
console.log("Updated icon.svg");
