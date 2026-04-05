const fs = require('fs');
const path = require('path');

let src = fs.readFileSync('./js/products.js', 'utf8');
src = src
  .replace(/^const PRODUCTS\s*=/m, 'var PRODUCTS =')
  .replace(/^const COLLECTIONS\s*=/m, 'var COLLECTIONS =')
  .replace(/^const FRAME_OPTIONS\s*=/m, 'var FRAME_OPTIONS =')
  .replace(/^const MAT_OPTIONS\s*=/m, 'var MAT_OPTIONS =');
eval(src);

const outDir = path.join(__dirname, 'products');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

let count = 0;

Object.values(PRODUCTS).forEach(function(product) {
  var html = '<!DOCTYPE html>\n'
    + '<html lang="en">\n'
    + '<head>\n'
    + '<meta charset="UTF-8" />\n'
    + '<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
    + '<title>' + product.title + ' | ' + product.collectionLabel + ' | Heinlen Fine Art</title>\n'
    + '<meta name="description" content="' + product.description.substring(0, 155).replace(/"/g, '&quot;') + '" />\n'
    + '<link rel="canonical" href="https://heinlenfineart.com/products/' + product.id + '.html" />\n'
    + '<meta property="og:title" content="' + product.title + ' | Heinlen Fine Art" />\n'
    + '<meta property="og:description" content="' + product.caption.replace(/"/g, '&quot;') + '" />\n'
    + '<meta property="og:image" content="https://heinlenfineart.com/' + product.images.main + '" />\n'
    + '<meta property="og:type" content="product" />\n'
    + '<meta property="og:url" content="https://heinlenfineart.com/products/' + product.id + '.html" />\n'
    + '<script>window.location.replace("https://heinlenfineart.com/product.html?id=' + product.id + '");</script>\n'
    + '</head>\n'
    + '<body>\n'
    + '<p>Loading <a href="https://heinlenfineart.com/product.html?id=' + product.id + '">' + product.title + '</a>...</p>\n'
    + '</body>\n'
    + '</html>';

  var filePath = path.join(outDir, product.id + '.html');
  fs.writeFileSync(filePath, html, 'utf8');
  count++;
  console.log('Created: products/' + product.id + '.html');
});

console.log('\nDone. ' + count + ' product pages generated.');