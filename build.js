// Java// ═══════════════════════════════════════════════════════════════
// BUILD.JS -- Heinlen Fine Art
// Generates a static HTML file for each product in products.js.
// Run with: node build.js
// ═══════════════════════════════════════════════════════════════

const fs   = require('fs');
const path = require('path');

// ── LOAD PRODUCTS ────────────────────────────────────────────
// Strip the const declarations so we can eval the data
let src = fs.readFileSync('./js/products.js', 'utf8');
src = src
  .replace(/^const PRODUCTS\s*=/, 'var PRODUCTS =')
  .replace(/^const COLLECTIONS\s*=/, 'var COLLECTIONS =')
  .replace(/^const FRAME_OPTIONS\s*=/, 'var FRAME_OPTIONS =')
  .replace(/^const MAT_OPTIONS\s*=/, 'var MAT_OPTIONS =');
eval(src);

// ── OUTPUT FOLDER ─────────────────────────────────────────────
// Creates a /products folder for the static files
const outDir = path.join(__dirname, 'products');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

// ── GENERATE ONE FILE PER PRODUCT ────────────────────────────
let count = 0;

Object.values(PRODUCTS).forEach(product => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${product.title} | ${product.collectionLabel} | Heinlen Fine Art</title>
  <meta name="description" content="${product.description.substring(0, 155).replace(/"/g, '&quot;')}" />
  <link rel="canonical" href="https://heinlenfineart.com/products/${product.id}.html" />

  <meta property="og:title" content="${product.title} | Heinlen Fine Art" />
  <meta property="og:description" content="${product.caption.replace(/"/g, '&quot;')}" />
  <meta property="og:image" content="https://heinlenfineart.com/${product.images.main}" />
  <meta property="og:type" content="product" />
  <meta property="og:url" content="https://heinlenfineart.com/products/${product.id}.html" />

  <script>
    // Forward to the dynamic product page immediately
    window.location.replace("https://heinlenfineart.com/product.html?id=${product.id}");
  </script>
</head>
<body>
  <p>Loading <a href="https://heinlenfineart.com/product.html?id=${product.id}">${product.title}</a>...</p>
</body>
</html>`;

  const filePath = path.join(outDir, product.id + '.html');
  fs.writeFileSync(filePath, html, 'utf8');
  count++;
  console.log('Created: products/' + product.id + '.html');
});

console.log('\nDone. ' + count + ' product pages generated.');
```

Once that's saved, here's how to run it. Open Terminal, navigate to your Fine-Arts-Website folder and run:
```
node build.jsScript Document