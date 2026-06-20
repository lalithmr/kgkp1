const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'public', 'kgkp-logo.svg');
const lightPath = path.join(__dirname, 'public', 'logo-light.svg');
const darkPath = path.join(__dirname, 'public', 'logo-dark.svg');

const svgContent = fs.readFileSync(srcPath, 'utf8');

// The original logo has colors like #1B1C46, #020308, etc. which are dark.
// For light mode, we keep original (which is mostly #2B4C65ish but actually various dark colors). User said "Primary logo color: #2B4C65". Let's standardize light logo to #2B4C65.
const lightContent = svgContent.replace(/fill="#[0-9a-fA-F]{6}"/gi, 'fill="#2B4C65"');

// For dark mode, white logo
const darkContent = svgContent.replace(/fill="#[0-9a-fA-F]{6}"/gi, 'fill="#F8FAFC"');

fs.writeFileSync(lightPath, lightContent);
fs.writeFileSync(darkPath, darkContent);

console.log('Created logo-light.svg and logo-dark.svg');
