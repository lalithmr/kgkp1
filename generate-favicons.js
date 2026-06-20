const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const pngToIco = require("png-to-ico").default;

const INPUT_SVG = path.join(__dirname, "public", "kgkp-logo.svg");
const PUBLIC_DIR = path.join(__dirname, "public");

const SIZES = [
  { name: "favicon-16x16.png", size: 16, padding: 1 },
  { name: "favicon-32x32.png", size: 32, padding: 2 },
  { name: "apple-touch-icon.png", size: 180, padding: 16 },
  { name: "android-chrome-192x192.png", size: 192, padding: 20 },
  { name: "android-chrome-512x512.png", size: 512, padding: 48 },
];

async function generate() {
  try {
    for (const item of SIZES) {
      const outPath = path.join(PUBLIC_DIR, item.name);
      const innerSize = item.size - (item.padding * 2);
      
      await sharp(INPUT_SVG)
        .resize({ width: innerSize, height: innerSize, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .extend({
          top: item.padding,
          bottom: item.padding,
          left: item.padding,
          right: item.padding,
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .toFile(outPath);
      console.log(`Generated ${item.name}`);
    }

    const icoPath = path.join(PUBLIC_DIR, "favicon.ico");
    const buf = await pngToIco([
      path.join(PUBLIC_DIR, "favicon-16x16.png"),
      path.join(PUBLIC_DIR, "favicon-32x32.png")
    ]);
    fs.writeFileSync(icoPath, buf);
    console.log("Generated favicon.ico");

  } catch (error) {
    console.error("Error generating icons:", error);
  }
}

generate();
