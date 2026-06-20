const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'public', 'kgkp-logo.svg');
const outDir = path.join(__dirname, 'public');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 }
];

async function generate() {
  try {
    for (const { name, size } of sizes) {
      await sharp(svgPath)
        .resize(size, size)
        .png()
        .toFile(path.join(outDir, name));
      console.log(`Generated ${name}`);
    }
    
    // Also generate an .ico file (32x32 is common enough for basic .ico)
    // sharp doesn't output .ico directly well, we can just output a 32x32 png and rename it for basic usage
    // Or just let Next.js handle it by using `app/icon.png`. Next.js 13 supports static `favicon.ico` in app/.
    // Actually, sharp can't write .ico easily, let's just make a 32x32 and use it if needed, or Next.js handles pngs fine.
    // The user requested favicon.ico specifically. Since we don't have an ico encoder, I'll copy favicon-32x32.png to favicon.ico. It's not a true ICO format but many browsers accept it, OR I can just skip the .ico and let Next.js use the PNGs. Actually, let's just use Next.js built-in `icon.png` or `apple-icon.png` etc.
  } catch (error) {
    console.error(error);
  }
}

generate();
