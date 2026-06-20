const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'public', 'kgkp-logo.svg');
const lightPath = path.join(__dirname, 'public', 'logo-light.svg');
const darkPath = path.join(__dirname, 'public', 'logo-dark.svg');

// Create logo-light.svg (exact copy of original)
fs.copyFileSync(srcPath, lightPath);

// Create logo-dark.svg (replace all fills with #FFFFFF)
let svgContent = fs.readFileSync(srcPath, 'utf8');

// Replace all fill attributes with white
svgContent = svgContent.replace(/fill="[^"]+"/g, 'fill="#FFFFFF"');

fs.writeFileSync(darkPath, svgContent);

console.log('Logos generated successfully!');
