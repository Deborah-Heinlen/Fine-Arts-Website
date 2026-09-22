// ═══════════════════════════════════════════════════════════════
// STATIONERY.JS -- Heinlen Fine Art
// Greeting cards and postcards.  Kept separate from products.js
// so build.js does not generate product pages for these items.
//
// To add a new design:
//   1. Copy an existing block below
//   2. Update id, number, title, caption, altText, and images
//   3. Add the id to the correct STATIONERY_COLLECTIONS array
//
// If prices or shipping change, also update the checkout Worker.
// ═══════════════════════════════════════════════════════════════


// ── PRICING ──────────────────────────────────────────────────
// Buy bundleMin or more of one type (mix and match designs)
// and every item of that type drops to the bundle price.
const STATIONERY_PRICING = {
  card:     { label: 'Greeting Card', single: 7, bundle: 4 },
  postcard: { label: 'Postcard',      single: 4, bundle: 2.5 },
  bundleMin: 10
};

// ── SHIPPING ─────────────────────────────────────────────────
const SHIPPING_RULES = {
  flatFee: 5.50,     // charged on orders under freeAt
  freeAt:  25        // free shipping at this subtotal and up
};


// ── DESIGNS ──────────────────────────────────────────────────
// images.card     = square image: card front with the inside
// images.postcard = square image: postcard front with the back
// Export both at 2000 x 2000 WebP.

const STATIONERY = {

  "candy-cane-tradition": {
    id:       "candy-cane-tradition",
    number:   "No. 01",
    title:    "Candy Cane Tradition",
    caption:  "Striped, ribboned, and the simplest sweetness of the season.",
    altText:  "Candy Cane Tradition Christmas card with two striped candy canes tied with a red bow in watercolor",
    images: {
      card:     "images/christmas/candy-cane-tradition-card.webp",
      postcard: "images/christmas/candy-cane-tradition-postcard.webp"
    }
  },

  "gifts-wrapped-with-love": {
    id:       "gifts-wrapped-with-love",
    number:   "No. 02",
    title:    "Gifts Wrapped with Love",
    caption:  "Ribbons, bows, and the happy suspense of what waits inside.",
    altText:  "Gifts Wrapped with Love Christmas card with a stack of red, green, and gold wrapped presents in watercolor",
    images: {
      card:     "images/christmas/gifts-wrapped-with-love-card.webp",
      postcard: "images/christmas/gifts-wrapped-with-love-postcard.webp"
    }
  },

  "gingerbread-smile": {
    id:       "gingerbread-smile",
    number:   "No. 03",
    title:    "Gingerbread Smile",
    caption:  "Warm spice, sugar icing, and a smile that never crumbles.",
    altText:  "Gingerbread Smile Christmas card with a smiling iced gingerbread man in watercolor",
    images: {
      card:     "images/christmas/gingerbread-smile-card.webp",
      postcard: "images/christmas/gingerbread-smile-postcard.webp"
    }
  },

  "stocking-by-the-fire": {
    id:       "stocking-by-the-fire",
    number:   "No. 04",
    title:    "Stocking by the Fire",
    caption:  "Waiting by the fireplace for whatever the night might bring.",
    altText:  "Stocking by the Fire Christmas card with a red stocking with white fur trim and gold snowflakes in watercolor",
    images: {
      card:     "images/christmas/stocking-by-the-fire-card.webp",
      postcard: "images/christmas/stocking-by-the-fire-postcard.webp"
    }
  },

  "vintage-christmas-lights": {
    id:       "vintage-christmas-lights",
    number:   "No. 05",
    title:    "Vintage Christmas Lights",
    caption:  "The big, bold bulbs that once lit every porch on the block.",
    altText:  "Vintage Christmas Lights card with red, green, blue, and yellow old-fashioned bulbs in watercolor",
    images: {
      card:     "images/christmas/vintage-christmas-lights-card.webp",
      postcard: "images/christmas/vintage-christmas-lights-postcard.webp"
    }
  },

  "nutcracker-sentinel": {
    id:       "nutcracker-sentinel",
    number:   "No. 06",
    title:    "Nutcracker Sentinel",
    caption:  "A steadfast guardian standing watch over the holiday.",
    altText:  "Nutcracker Sentinel Christmas card with a nutcracker portrait in a red and gold coat and black hat in watercolor",
    images: {
      card:     "images/christmas/nutcracker-sentinel-card.webp",
      postcard: "images/christmas/nutcracker-sentinel-postcard.webp"
    }
  },

  "holiday-wreath-welcome": {
    id:       "holiday-wreath-welcome",
    number:   "No. 07",
    title:    "Holiday Wreath Welcome",
    caption:  "Evergreen, pinecones, and a red bow waiting at the door.",
    altText:  "Holiday Wreath Welcome Christmas card with an evergreen wreath, pinecones, berries, and a red bow in watercolor",
    images: {
      card:     "images/christmas/holiday-wreath-welcome-card.webp",
      postcard: "images/christmas/holiday-wreath-welcome-postcard.webp"
    }
  },

  "little-christmas-tree": {
    id:       "little-christmas-tree",
    number:   "No. 08",
    title:    "Little Christmas Tree",
    caption:  "Small in size, full of light, and dressed for the season.",
    altText:  "Little Christmas Tree card with a small decorated tree with a gold star in a burlap base in watercolor",
    images: {
      card:     "images/christmas/little-christmas-tree-card.webp",
      postcard: "images/christmas/little-christmas-tree-postcard.webp"
    }
  },

  "nutcracker-toy-soldier": {
    id:       "nutcracker-toy-soldier",
    number:   "No. 09",
    title:    "Nutcracker Toy Soldier",
    caption:  "At attention in green and gold, ready for the curtain to rise.",
    altText:  "Nutcracker Toy Soldier Christmas card with a full-length nutcracker in a green and gold uniform in watercolor",
    images: {
      card:     "images/christmas/nutcracker-toy-soldier-card.webp",
      postcard: "images/christmas/nutcracker-toy-soldier-postcard.webp"
    }
  },

  "jingle-bells": {
    id:       "jingle-bells",
    number:   "No. 10",
    title:    "Jingle Bells",
    caption:  "Golden bells and a crimson bow, ready to ring in the season.",
    altText:  "Jingle Bells Christmas card with two gold sleigh bells and a red ribbon bow in watercolor",
    images: {
      card:     "images/christmas/jingle-bells-card.webp",
      postcard: "images/christmas/jingle-bells-postcard.webp"
    }
  },

  "holiday-train-express": {
    id:       "holiday-train-express",
    number:   "No. 11",
    title:    "Holiday Train Express",
    caption:  "Carrying a fresh-cut tree through the snow, right on time.",
    altText:  "Holiday Train Express Christmas card with a red locomotive carrying a Christmas tree through the snow in watercolor",
    images: {
      card:     "images/christmas/holiday-train-express-card.webp",
      postcard: "images/christmas/holiday-train-express-postcard.webp"
    }
  },

  "heirloom-ornaments": {
    id:       "heirloom-ornaments",
    number:   "No. 12",
    title:    "Heirloom Ornaments",
    caption:  "Treasured ornaments, each one holding a Christmas past.",
    altText:  "Heirloom Ornaments Christmas card with red, green, blue, and gold glass ornaments in watercolor",
    images: {
      card:     "images/christmas/heirloom-ornaments-card.webp",
      postcard: "images/christmas/heirloom-ornaments-postcard.webp"
    }
  },

  "winter-cardinal": {
    id:       "winter-cardinal",
    number:   "No. 13",
    title:    "Winter Cardinal",
    caption:  "A bright red visitor perched among the strands of holiday lights.",
    altText:  "Winter Cardinal Christmas card with a red cardinal perched on a branch strung with colored lights in watercolor",
    images: {
      card:     "images/christmas/winter-cardinal-card.webp",
      postcard: "images/christmas/winter-cardinal-postcard.webp"
    }
  },

  "christmas-morning-gifts": {
    id:       "christmas-morning-gifts",
    number:   "No. 14",
    title:    "Christmas Morning Gifts",
    caption:  "Packages in red and green, waiting for the first light of the day.",
    altText:  "Christmas Morning Gifts card with green and red wrapped packages tied with ribbon in watercolor",
    images: {
      card:     "images/christmas/christmas-morning-gifts-card.webp",
      postcard: "images/christmas/christmas-morning-gifts-postcard.webp"
    }
  },

  "snowy-evergreen-night": {
    id:       "snowy-evergreen-night",
    number:   "No. 15",
    title:    "Snowy Evergreen Night",
    caption:  "Snow falling softly on a quiet evergreen hillside.",
    altText:  "Snowy Evergreen Night Christmas card with a snow-covered evergreen in falling snow in watercolor",
    images: {
      card:     "images/christmas/snowy-evergreen-night-card.webp",
      postcard: "images/christmas/snowy-evergreen-night-postcard.webp"
    }
  },

  "snowman-and-pine": {
    id:       "snowman-and-pine",
    number:   "No. 16",
    title:    "Snowman and Pine",
    caption:  "A cheerful snowman keeping company with a frosted pine.",
    altText:  "Snowman and Pine Christmas card with a snowman in a red hat beside a frosted pine tree in watercolor",
    images: {
      card:     "images/christmas/snowman-and-pine-card.webp",
      postcard: "images/christmas/snowman-and-pine-postcard.webp"
    }
  },

  "poinsettia-star": {
    id:       "poinsettia-star",
    number:   "No. 17",
    title:    "Poinsettia Star",
    caption:  "Known in Mexico as the flower of Christmas Eve, in full scarlet bloom.",
    altText:  "Poinsettia Star Christmas card with a red poinsettia and evergreen sprigs in watercolor",
    images: {
      card:     "images/christmas/poinsettia-star-card.webp",
      postcard: "images/christmas/poinsettia-star-postcard.webp"
    }
  },

  "holly-and-berries": {
    id:       "holly-and-berries",
    number:   "No. 18",
    title:    "Holly and Berries",
    caption:  "Glossy leaves and bright berries, a winter tradition since Roman times.",
    altText:  "Holly and Berries Christmas card with green holly leaves and red berries in watercolor",
    images: {
      card:     "images/christmas/holly-and-berries-card.webp",
      postcard: "images/christmas/holly-and-berries-postcard.webp"
    }
  }

};


// ── COLLECTIONS ──────────────────────────────────────────────
// Order here is the order on the page.

const STATIONERY_COLLECTIONS = {
  "christmas": [
    "candy-cane-tradition",
    "gifts-wrapped-with-love",
    "gingerbread-smile",
    "stocking-by-the-fire",
    "vintage-christmas-lights",
    "nutcracker-sentinel",
    "holiday-wreath-welcome",
    "little-christmas-tree",
    "nutcracker-toy-soldier",
    "jingle-bells",
    "holiday-train-express",
    "heirloom-ornaments",
    "winter-cardinal",
    "christmas-morning-gifts",
    "snowy-evergreen-night",
    "snowman-and-pine",
    "poinsettia-star",
    "holly-and-berries"
  ]
};
