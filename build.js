// ═══════════════════════════════════════════════════════════════
// BUILD.JS -- Heinlen Fine Art -- Updated April 2026
//
// Generates /product/{id}/index.html for every product in products.js.
// Each generated page is a complete static HTML file with:
//   - Correct SEO metadata (title, description, canonical, og tags)
//   - window.__PRODUCT_ID__ hardcoded so the product UI renders
//     without needing the ?id= query string
//   - All ../ paths converted to / paths since generated pages
//     are one level deeper than product/index.html
//
// To add a new product:
//   1. Add it to js/products.js
//   2. Push to main -- GitHub Actions runs this script automatically
//
// Also deletes the old /products/ folder of redirect stubs.
// ═══════════════════════════════════════════════════════════════

const fs   = require('fs');
const path = require('path');

// ── LOAD PRODUCTS.JS ────────────────────────────────────────────
let src = fs.readFileSync('./js/products.js', 'utf8');
src = src
  .replace(/^const PRODUCTS\s*=/m,      'var PRODUCTS =')
  .replace(/^const COLLECTIONS\s*=/m,   'var COLLECTIONS =')
  .replace(/^const FRAME_OPTIONS\s*=/m, 'var FRAME_OPTIONS =')
  .replace(/^const MAT_OPTIONS\s*=/m,   'var MAT_OPTIONS =');
eval(src);

// ── READ THE SHARED PRODUCT PAGE TEMPLATE ───────────────────────
const templatePath = path.join(__dirname, 'product', 'index.html');
const template     = fs.readFileSync(templatePath, 'utf8');

// ── CLEAN UP OLD PRODUCTS/ FOLDER ───────────────────────────────
const oldDir = path.join(__dirname, 'products');
if (fs.existsSync(oldDir)) {
  fs.rmSync(oldDir, { recursive: true, force: true });
  console.log('Deleted old products/ folder.');
}

// ── ENSURE PRODUCT/ BASE FOLDER EXISTS ──────────────────────────
const productBaseDir = path.join(__dirname, 'product');
if (!fs.existsSync(productBaseDir)) {
  fs.mkdirSync(productBaseDir);
}

// ── CLEAN OUT EXISTING ID SUBFOLDERS IN PRODUCT/ ────────────────
fs.readdirSync(productBaseDir).forEach(function(item) {
  const itemPath = path.join(productBaseDir, item);
  if (fs.statSync(itemPath).isDirectory()) {
    fs.rmSync(itemPath, { recursive: true, force: true });
  }
});
console.log('Cleaned existing product/ subfolders.');

// ── GENERATE ONE PAGE PER PRODUCT ───────────────────────────────
let count = 0;

Object.values(PRODUCTS).forEach(function(product) {

  const id           = product.id;
  const canonicalUrl = 'https://heinlenfineart.com/product/' + id + '/';
  const metaDesc     = product.description
    .substring(0, 155)
    .replace(/"/g, '&quot;');
  const ogImage      = 'https://heinlenfineart.com/' + product.images.main;
  const ogTitle      = product.title.replace(/"/g, '&quot;') + ' | Heinlen Fine Art';
  const ogCaption    = product.caption.replace(/"/g, '&quot;');
  const pageTitle    = product.title + ' | ' + product.collectionLabel + ' | Heinlen Fine Art';

  // Start with the shared template
  let page = template;

  // 1. Replace the generic <title>
  page = page.replace(
    '<title>Fine Art Print | Heinlen Fine Art</title>',
    '<title>' + pageTitle + '</title>'
  );

  // 2. Replace the generic meta description
  page = page.replace(
    '<meta name="description" content="Watercolor fine art print by Deborah Heinlen." />',
    '<meta name="description" content="' + metaDesc + '" />'
  );

  // 3. Replace the canonical URL
  page = page.replace(
    '<link rel="canonical" href="https://heinlenfineart.com/product" />',
    '<link rel="canonical" href="' + canonicalUrl + '" />'
  );

  // 4. Replace og:title
  page = page.replace(
    '<meta property="og:title" content="Heinlen Fine Art" />',
    '<meta property="og:title" content="' + ogTitle + '" />'
  );

  // 5. Replace og:description
  page = page.replace(
    '<meta property="og:description" content="Watercolor fine art prints of wildlife, botanicals, birds, landscapes, and more.  Every print begins as a photograph." />',
    '<meta property="og:description" content="' + ogCaption + '" />'
  );

  // 6. Replace og:image
  page = page.replace(
    '<meta property="og:image" content="https://heinlenfineart.com/images/banner-social.jpg" />',
    '<meta property="og:image" content="' + ogImage + '" />'
  );

  // 7. Replace og:url
  page = page.replace(
    '<meta property="og:url" content="https://heinlenfineart.com/product" />',
    '<meta property="og:url" content="' + canonicalUrl + '" />'
  );

  // 8. Inject window.__PRODUCT_ID__ before the closing </head>
  const productIdScript = '  <script>window.__PRODUCT_ID__ = \'' + id + '\';</script>\n</head>';
  page = page.replace('</head>', productIdScript);

  // 9. Fix all relative paths -- generated pages are one level deeper
  //    than product/index.html so all ../ references need to become /
  page = page.replace(/src="\.\.\/images\//g,              'src="/images/');
  page = page.replace(/href="\.\.\/images\//g,             'href="/images/');
  page = page.replace(/src="\.\.\/js\//g,                  'src="/js/');
  page = page.replace(/href="\.\.\/cart\//g,               'href="/cart/');
  page = page.replace(/href="\.\.\/contact\//g,            'href="/contact/');
  page = page.replace(/href="\.\.\/index\.html/g,          'href="/index.html');
  page = page.replace(/href="\.\.\/wildlife\//g,           'href="/wildlife/');
  page = page.replace(/href="\.\.\/botanical-studies\//g,  'href="/botanical-studies/');
  page = page.replace(/href="\.\.\/avian-studies\//g,      'href="/avian-studies/');
  page = page.replace(/href="\.\.\/cincinnati\//g,         'href="/cincinnati/');
  page = page.replace(/href="\.\.\/horse-country\//g,      'href="/horse-country/');
  page = page.replace(/href="\.\.\/landscapes\//g,         'href="/landscapes/');
  page = page.replace(/href="\.\.\/american-west\//g,      'href="/american-west/');
  page = page.replace(/'\.\.\//g,                          "'/");
  page = page.replace(/`\.\.\//g,                          "`/");
    
    
    

  // 10. Add a note at the top that this is auto-generated
  page = page.replace(
    '<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n     PRODUCT PAGE -- product.html',
    '<!-- AUTO-GENERATED BY BUILD.JS -- DO NOT EDIT THIS FILE\n     Product: ' + product.title + '\n     Edit js/products.js and push to main to regenerate.\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n     PRODUCT PAGE -- product.html'
  );

  // Write the file
  const dir      = path.join(productBaseDir, id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page, 'utf8');
  count++;
  console.log('Created: product/' + id + '/index.html');

});

console.log('\nDone.  ' + count + ' product pages generated in product/.');
