const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Replace Light Mode Theme Variables
cssContent = cssContent.replace(
  /:root\s*{([\s\S]*?)--brand-text/m,
  `:root {
  --brand-primary: #1B1C46;
  --brand-secondary: #1B1C46;
  --brand-accent: #1B1C46;
  --brand-text`
);

cssContent = cssContent.replace(
  /--brand-button:.*?;/g,
  `--brand-button: #1B1C46;`
);

cssContent = cssContent.replace(
  /--brand-button-hover:.*?;/g,
  `--brand-button-hover: #2A2C6E;`
);

// Add brand-button-active if it doesn't exist
if (!cssContent.includes('--brand-button-active')) {
  cssContent = cssContent.replace(
    /--brand-button-hover:.*?;/g,
    `--brand-button-hover: #2A2C6E;\n  --brand-button-active: #11122D;`
  );
}

// Ensure dark mode uses same brand colors
cssContent = cssContent.replace(
  /\.dark\s*{([\s\S]*?)--brand-text/m,
  `.dark {
  --brand-primary: #1B1C46;
  --brand-secondary: #1B1C46;
  --brand-accent: #1B1C46;
  --brand-text`
);

// Update button styles to include active state
if (!cssContent.includes('.primary-button:active')) {
  cssContent = cssContent.replace(
    /\.primary-button:hover\s*{[\s\S]*?}/,
    `.primary-button:hover {
  transform: translateY(-3px) scale(1.02);
  background: var(--brand-button-hover);
  box-shadow: 0 12px 32px -8px rgba(27, 28, 70, 0.4);
}

.primary-button:active {
  transform: translateY(0) scale(0.98);
  background: var(--brand-button-active);
  box-shadow: 0 4px 16px -4px rgba(27, 28, 70, 0.4);
}`
  );
}

fs.writeFileSync(cssPath, cssContent);
console.log('globals.css updated with original logo color!');
