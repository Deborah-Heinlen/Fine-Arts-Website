// ═══════════════════════════════════════════════════════════════
// PRODUCTS.JS -- Deborah Heinlen Fine Art
// All product data lives here.  To add a new print:
//   1. Copy an existing product block
//   2. Update all fields
//   3. Add the product id to the correct collection array below
// ═══════════════════════════════════════════════════════════════

const PRODUCTS = {

  // ── BOTANICAL STUDIES ────────────────────────────────────────

  "water-lily": {
    id:          "water-lily",
    number:      "No. 01",
    collection:  "botanical-studies",
    collectionLabel: "Botanical Studies",
    collectionPage:  "botanical-studies.html",
    title:       "Water Lily in Bloom",
    caption:     "Patience made visible, floating at the edge of reflection.",
    description: "A single water lily rests at the surface of still water, its petals open and unhurried. Rendered with a watercolor finish from an original photograph, this print celebrates the quiet geometry of nature -- the perfect circle, the gentle reflection, the moment before the ripple.",
    images: {
      main:    "images/botanical-studies/lily.jpg",
      room:    "images/mockups/lily/lily-room.jpg",
      framed:  "images/mockups/lily/lily-framed.jpg",
      canvas:  "images/mockups/lily/lily-canvas.jpg",
      metal:   "images/mockups/lily/lily-metal.jpg"
    },
    prices: {
      metal:  { "55": 55,   "95": 95,   "180": 180 },
      canvas: { "200": 200, "250": 250, "300": 300 },
      framed: { "160": 160, "240": 240, "300": 300, "400": 400 }
    },
    sizeLabels: {
      metal:  { "55": "8x10", "95": "11x14", "180": "16x20" },
      canvas: { "200": "16x20", "250": "20x24", "300": "24x30" },
      framed: { "160": "9x12 print in 11x14 frame", "240": "12x16 print in 16x20 frame", "300": "16x20 print in 20x24 frame", "400": "20x26 print in 24x30 frame" }
    }
  },

  "golden-hour": {
    id:          "golden-hour",
    number:      "No. 02",
    collection:  "botanical-studies",
    collectionLabel: "Botanical Studies",
    collectionPage:  "botanical-studies.html",
    title:       "Golden Hour",
    caption:     "Brief and brilliant, like all the best things.",
    description: "A sunflower catches the last warmth of an afternoon, its petals radiating outward in shades of amber and gold. This watercolor-finished print transforms a single fleeting moment into something permanent -- the kind of light that only lasts a few minutes but stays with you much longer.",
    images: {
      main:    "images/botanical-studies/sunflower.jpg",
      room:    "images/mockups/sunflower/sunflower-room.jpg",
      framed:  "images/mockups/sunflower/sunflower-framed.jpg",
      canvas:  "images/mockups/sunflower/sunflower-canvas.jpg",
      metal:   "images/mockups/sunflower/sunflower-metal.jpg"
    },
    prices: {
      metal:  { "55": 55,   "95": 95,   "180": 180 },
      canvas: { "200": 200, "250": 250, "300": 300 },
      framed: { "160": 160, "240": 240, "300": 300, "400": 400 }
    },
    sizeLabels: {
      metal:  { "55": "8x10", "95": "11x14", "180": "16x20" },
      canvas: { "200": "16x20", "250": "20x24", "300": "24x30" },
      framed: { "160": "9x12 print in 11x14 frame", "240": "12x16 print in 16x20 frame", "300": "16x20 print in 20x24 frame", "400": "20x26 print in 24x30 frame" }
    }
  },

  "redbuds-in-bloom": {
    id:          "redbuds-in-bloom",
    number:      "No. 03",
    collection:  "botanical-studies",
    collectionLabel: "Botanical Studies",
    collectionPage:  "botanical-studies.html",
    title:       "Redbuds in Bloom",
    caption:     "Some things announce themselves without apology.",
    description: "Delicate redbud blossoms cluster along a single branch in early spring, their purple-pink flowers announcing the season with quiet insistence. Rendered with a watercolor finish from an original photograph, this print celebrates the ephemeral beauty of flowering trees -- soft, familiar, and alive with the gentle color of renewal.",
    images: {
      main:    "images/botanical-studies/redbud.jpg",
      room:    "images/mockups/redbud/redbud-room.jpg",
      framed:  "images/mockups/redbud/redbud-framed.jpg",
      canvas:  "images/mockups/redbud/redbud-canvas.jpg",
      metal:   "images/mockups/redbud/redbud-metal.jpg"
    },
    prices: {
      metal:  { "55": 55,   "95": 95,   "180": 180 },
      canvas: { "200": 200, "250": 250, "300": 300 },
      framed: { "160": 160, "240": 240, "300": 300, "400": 400 }
    },
    sizeLabels: {
      metal:  { "55": "8x10", "95": "11x14", "180": "16x20" },
      canvas: { "200": "16x20", "250": "20x24", "300": "24x30" },
      framed: { "160": "9x12 print in 11x14 frame", "240": "12x16 print in 16x20 frame", "300": "16x20 print in 20x24 frame", "400": "20x26 print in 24x30 frame" }
    }
  },

  // ── WILDLIFE ─────────────────────────────────────────────────

  "lion": {
    id:          "lion",
    number:      "No. 01",
    collection:  "wildlife",
    collectionLabel: "Wildlife",
    collectionPage:  "wildlife.html",
    title:       "The Lion",
    caption:     "Still, watchful, sovereign.",
    description: "A lion rests in the quiet authority of its own presence, its gaze unhurried and absolute. Rendered with a watercolor finish from an original photograph, this print captures the paradox of the wild -- immense power held in perfect stillness.",
    images: {
      main:    "images/wildlife/lion.jpg",
      room:    "images/mockups/lion/lion-room.jpg",
      framed:  "images/mockups/lion/lion-framed.jpg",
      canvas:  "images/mockups/lion/lion-canvas.jpg",
      metal:   "images/mockups/lion/lion-metal.jpg"
    },
    prices: {
      metal:  { "55": 55,   "95": 95,   "180": 180 },
      canvas: { "200": 200, "250": 250, "300": 300 },
      framed: { "160": 160, "240": 240, "300": 300, "400": 400 }
    },
    sizeLabels: {
      metal:  { "55": "8x10", "95": "11x14", "180": "16x20" },
      canvas: { "200": "16x20", "250": "20x24", "300": "24x30" },
      framed: { "160": "9x12 print in 11x14 frame", "240": "12x16 print in 16x20 frame", "300": "16x20 print in 20x24 frame", "400": "20x26 print in 24x30 frame" }
    }
  },

  "wolf": {
    id:          "wolf",
    number:      "No. 02",
    collection:  "wildlife",
    collectionLabel: "Wildlife",
    collectionPage:  "wildlife.html",
    title:       "The Wolf",
    caption:     "Wild in the truest sense of the word.",
    description: "A wolf stands against a winter landscape, its coat thick with cold, its eyes alert. This watercolor-finished print honors the wolf's enduring wildness -- present, purposeful, and entirely its own.",
    images: {
      main:    "images/wildlife/wolf.jpg",
      room:    "images/mockups/wolf/wolf-room.jpg",
      framed:  "images/mockups/wolf/wolf-framed.jpg",
      canvas:  "images/mockups/wolf/wolf-canvas.jpg",
      metal:   "images/mockups/wolf/wolf-metal.jpg"
    },
    prices: {
      metal:  { "55": 55,   "95": 95,   "180": 180 },
      canvas: { "200": 200, "250": 250, "300": 300 },
      framed: { "160": 160, "240": 240, "300": 300, "400": 400 }
    },
    sizeLabels: {
      metal:  { "55": "8x10", "95": "11x14", "180": "16x20" },
      canvas: { "200": "16x20", "250": "20x24", "300": "24x30" },
      framed: { "160": "9x12 print in 11x14 frame", "240": "12x16 print in 16x20 frame", "300": "16x20 print in 20x24 frame", "400": "20x26 print in 24x30 frame" }
    }
  },

  // ── AVIAN STUDIES ────────────────────────────────────────────

  "cardinal": {
    id:          "cardinal",
    number:      "No. 01",
    collection:  "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:       "Cardinal in Winter",
    caption:     "Red against white -- the simplest kind of beautiful.",
    description: "A male cardinal rests among snow-dusted branches, his crimson plumage vivid against the pale quiet of winter. This watercolor-finished print captures one of nature's most striking contrasts, familiar to anyone who has ever looked out a window on a cold morning.",
    images: {
      main:    "images/avian-studies/cardinal.jpg",
      room:    "images/mockups/cardinal/cardinal-room.jpg",
      framed:  "images/mockups/cardinal/cardinal-framed.jpg",
      canvas:  "images/mockups/cardinal/cardinal-canvas.jpg",
      metal:   "images/mockups/cardinal/cardinal-metal.jpg"
    },
    prices: {
      metal:  { "55": 55,   "95": 95,   "180": 180 },
      canvas: { "200": 200, "250": 250, "300": 300 },
      framed: { "160": 160, "240": 240, "300": 300, "400": 400 }
    },
    sizeLabels: {
      metal:  { "55": "8x10", "95": "11x14", "180": "16x20" },
      canvas: { "200": "16x20", "250": "20x24", "300": "24x30" },
      framed: { "160": "9x12 print in 11x14 frame", "240": "12x16 print in 16x20 frame", "300": "16x20 print in 20x24 frame", "400": "20x26 print in 24x30 frame" }
    }
  },

  "bald-eagle": {
    id:          "bald-eagle",
    number:      "No. 02",
    collection:  "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:       "Bald Eagle",
    caption:     "Freedom is not a metaphor when you watch one fly.",
    description: "A bald eagle holds its position against an open sky, its white head bright and its gaze fixed on something beyond the frame. Rendered with a watercolor finish from an original photograph, this print is both a portrait of a bird and a reminder of the wild places still left in the world.",
    images: {
      main:    "images/avian-studies/baldeagle.jpg",
      room:    "images/mockups/baldeagle/baldeagle-room.jpg",
      framed:  "images/mockups/baldeagle/baldeagle-framed.jpg",
      canvas:  "images/mockups/baldeagle/baldeagle-canvas.jpg",
      metal:   "images/mockups/baldeagle/baldeagle-metal.jpg"
    },
    prices: {
      metal:  { "55": 55,   "95": 95,   "180": 180 },
      canvas: { "200": 200, "250": 250, "300": 300 },
      framed: { "160": 160, "240": 240, "300": 300, "400": 400 }
    },
    sizeLabels: {
      metal:  { "55": "8x10", "95": "11x14", "180": "16x20" },
      canvas: { "200": "16x20", "250": "20x24", "300": "24x30" },
      framed: { "160": "9x12 print in 11x14 frame", "240": "12x16 print in 16x20 frame", "300": "16x20 print in 20x24 frame", "400": "20x26 print in 24x30 frame" }
    }
  },

  "eastern-bluebird": {
    id:          "eastern-bluebird",
    number:      "No. 03",
    collection:  "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:       "Eastern Bluebird",
    caption:     "Small enough to overlook.  Too beautiful not to notice.",
    description: "An eastern bluebird perches in a moment of stillness, its cobalt and rust coloring rendered in the soft hues of a watercolor finish. A familiar sight in fields and backyards across the eastern United States, this print brings the quiet joy of backyard birdwatching into your home.",
    images: {
      main:    "images/avian-studies/easternbluebird.jpg",
      room:    "images/mockups/easternbluebird/easternbluebird-room.jpg",
      framed:  "images/mockups/easternbluebird/easternbluebird-framed.jpg",
      canvas:  "images/mockups/easternbluebird/easternbluebird-canvas.jpg",
      metal:   "images/mockups/easternbluebird/easternbluebird-metal.jpg"
    },
    prices: {
      metal:  { "55": 55,   "95": 95,   "180": 180 },
      canvas: { "200": 200, "250": 250, "300": 300 },
      framed: { "160": 160, "240": 240, "300": 300, "400": 400 }
    },
    sizeLabels: {
      metal:  { "55": "8x10", "95": "11x14", "180": "16x20" },
      canvas: { "200": "16x20", "250": "20x24", "300": "24x30" },
      framed: { "160": "9x12 print in 11x14 frame", "240": "12x16 print in 16x20 frame", "300": "16x20 print in 20x24 frame", "400": "20x26 print in 24x30 frame" }
    }
  },

  // ── CINCINNATI ───────────────────────────────────────────────

  "cincinnati-skyline": {
    id:          "cincinnati-skyline",
    number:      "No. 01",
    collection:  "cincinnati",
    collectionLabel: "Cincinnati",
    collectionPage:  "cincinnati.html",
    title:       "Cincinnati Skyline",
    caption:     "A city that earns its place on the river.",
    description: "The Cincinnati skyline reflects on the Ohio River in the blue hour just before dark, its lights beginning to emerge against a deepening sky. This watercolor-finished print captures the city as it rarely gets to be seen -- quiet, luminous, and entirely itself.",
    images: {
      main:    "images/cincinnati/cincinnatiskyline.jpg",
      room:    "images/mockups/cincinnatiskyline/cincinnatiskyline-room.jpg",
      framed:  "images/mockups/cincinnatiskyline/cincinnatiskyline-framed.jpg",
      canvas:  "images/mockups/cincinnatiskyline/cincinnatiskyline-canvas.jpg",
      metal:   "images/mockups/cincinnatiskyline/cincinnatiskyline-metal.jpg"
    },
    prices: {
      metal:  { "55": 55,   "95": 95,   "180": 180 },
      canvas: { "200": 200, "250": 250, "300": 300 },
      framed: { "160": 160, "240": 240, "300": 300, "400": 400 }
    },
    sizeLabels: {
      metal:  { "55": "8x10", "95": "11x14", "180": "16x20" },
      canvas: { "200": "16x20", "250": "20x24", "300": "24x30" },
      framed: { "160": "9x12 print in 11x14 frame", "240": "12x16 print in 16x20 frame", "300": "16x20 print in 20x24 frame", "400": "20x26 print in 24x30 frame" }
    }
  },

  // ── AMERICANA ────────────────────────────────────────────────

  "flag": {
    id:          "flag",
    number:      "No. 01",
    collection:  "americana",
    collectionLabel: "Americana",
    collectionPage:  "americana.html",
    title:       "The Flag",
    caption:     "Worn by weather.  Unworn by time.",
    description: "An American flag weathers gracefully, its colors softened by sun and wind into something that feels more like memory than fabric. Rendered with a watercolor finish from an original photograph, this print honors the worn beauty of patriotism -- not the spectacle of it, but the quiet daily kind.",
    images: {
      main:    "images/americana/flag.jpg",
      room:    "images/mockups/flag/flag-room.jpg",
      framed:  "images/mockups/flag/flag-framed.jpg",
      canvas:  "images/mockups/flag/flag-canvas.jpg",
      metal:   "images/mockups/flag/flag-metal.jpg"
    },
    prices: {
      metal:  { "55": 55,   "95": 95,   "180": 180 },
      canvas: { "200": 200, "250": 250, "300": 300 },
      framed: { "160": 160, "240": 240, "300": 300, "400": 400 }
    },
    sizeLabels: {
      metal:  { "55": "8x10", "95": "11x14", "180": "16x20" },
      canvas: { "200": "16x20", "250": "20x24", "300": "24x30" },
      framed: { "160": "9x12 print in 11x14 frame", "240": "12x16 print in 16x20 frame", "300": "16x20 print in 20x24 frame", "400": "20x26 print in 24x30 frame" }
    }
  },

  "biko-fence": {
    id:          "biko-fence",
    number:      "No. 02",
    collection:  "americana",
    collectionLabel: "Americana",
    collectionPage:  "americana.html",
    title:       "Biko Fence",
    caption:     "In the field, before the dawn.",
    description: "A weathered fence line stretches across a quiet field in the early morning, its posts and wire the only geometry in an otherwise open landscape. This watercolor-finished print is a meditation on the rural American scene -- simple, enduring, and full of a stillness that the modern world rarely offers.",
    images: {
      main:    "images/americana/bikofence.jpg",
      room:    "images/mockups/bikofence/bikofence-room.jpg",
      framed:  "images/mockups/bikofence/bikofence-framed.jpg",
      canvas:  "images/mockups/bikofence/bikofence-canvas.jpg",
      metal:   "images/mockups/bikofence/bikofence-metal.jpg"
    },
    prices: {
      metal:  { "55": 55,   "95": 95,   "180": 180 },
      canvas: { "200": 200, "250": 250, "300": 300 },
      framed: { "160": 160, "240": 240, "300": 300, "400": 400 }
    },
    sizeLabels: {
      metal:  { "55": "8x10", "95": "11x14", "180": "16x20" },
      canvas: { "200": "16x20", "250": "20x24", "300": "24x30" },
      framed: { "160": "9x12 print in 11x14 frame", "240": "12x16 print in 16x20 frame", "300": "16x20 print in 20x24 frame", "400": "20x26 print in 24x30 frame" }
    }
  },

  // ── AMERICAN WEST ────────────────────────────────────────────

  "utah-night-sky": {
    id:          "utah-night-sky",
    number:      "No. 01",
    collection:  "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:       "Utah Night Sky",
    caption:     "The stars are not decoration.  They are the point.",
    description: "The Milky Way arches over the Utah desert in a display that feels less like weather and more like revelation. Rendered with a watercolor finish from an original photograph, this print brings the overwhelming scale of the night sky into your home -- intimate, luminous, and quietly humbling.",
    images: {
      main:    "images/american-west/nightstarsutah.jpg",
      room:    "images/mockups/nightstarsutah/nightstarsutah-room.jpg",
      framed:  "images/mockups/nightstarsutah/nightstarsutah-framed.jpg",
      canvas:  "images/mockups/nightstarsutah/nightstarsutah-canvas.jpg",
      metal:   "images/mockups/nightstarsutah/nightstarsutah-metal.jpg"
    },
    prices: {
      metal:  { "55": 55,   "95": 95,   "180": 180 },
      canvas: { "200": 200, "250": 250, "300": 300 },
      framed: { "160": 160, "240": 240, "300": 300, "400": 400 }
    },
    sizeLabels: {
      metal:  { "55": "8x10", "95": "11x14", "180": "16x20" },
      canvas: { "200": "16x20", "250": "20x24", "300": "24x30" },
      framed: { "160": "9x12 print in 11x14 frame", "240": "12x16 print in 16x20 frame", "300": "16x20 print in 20x24 frame", "400": "20x26 print in 24x30 frame" }
    }
  },

  "utah-road": {
    id:          "utah-road",
    number:      "No. 02",
    collection:  "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:       "Utah Road",
    caption:     "Part photograph.  Part painting.  All West.",
    description: "A ribbon of highway disappears into the Utah horizon, the red rock landscape vast and indifferent on either side. This watercolor-finished print captures the particular feeling of driving west -- the road ahead longer than the road behind, the sky bigger than seems reasonable, the landscape reminding you how small you are.",
    images: {
      main:    "images/american-west/utahroad.jpg",
      room:    "images/mockups/utahroad/utahroad-room.jpg",
      framed:  "images/mockups/utahroad/utahroad-framed.jpg",
      canvas:  "images/mockups/utahroad/utahroad-canvas.jpg",
      metal:   "images/mockups/utahroad/utahroad-metal.jpg"
    },
    prices: {
      metal:  { "55": 55,   "95": 95,   "180": 180 },
      canvas: { "200": 200, "250": 250, "300": 300 },
      framed: { "160": 160, "240": 240, "300": 300, "400": 400 }
    },
    sizeLabels: {
      metal:  { "55": "8x10", "95": "11x14", "180": "16x20" },
      canvas: { "200": "16x20", "250": "20x24", "300": "24x30" },
      framed: { "160": "9x12 print in 11x14 frame", "240": "12x16 print in 16x20 frame", "300": "16x20 print in 20x24 frame", "400": "20x26 print in 24x30 frame" }
    }
  }

};

// ═══════════════════════════════════════════════════════════════
// COLLECTION INDEX
// Maps collection page slugs to their product ids.
// Used by collection pages to list products in order.
// ═══════════════════════════════════════════════════════════════
const COLLECTIONS = {
  "botanical-studies": ["water-lily", "golden-hour", "redbuds-in-bloom"],
  "wildlife":          ["lion", "wolf"],
  "avian-studies":     ["cardinal", "bald-eagle", "eastern-bluebird"],
  "cincinnati":        ["cincinnati-skyline"],
  "americana":         ["flag", "biko-fence"],
  "american-west":     ["utah-night-sky", "utah-road"]
};

// ═══════════════════════════════════════════════════════════════
// FRAME + MAT OPTIONS
// Shared across all framed products.
// ═══════════════════════════════════════════════════════════════
const FRAME_OPTIONS = [
  { label: "Flat Black",       img: "images/media-types/frames/flat-black-wood-frame.jpg" },
  { label: "Flat White",       img: "images/media-types/frames/flat-white-wood-frame.jpg" },
  { label: "Flat Mocha",       img: "images/media-types/frames/flat-mocha-wood-frame.jpg" },
  { label: "Natural Basswood", img: "images/media-types/frames/flat-natural-basswood-frame.jpg" }
];

const MAT_OPTIONS = [
  { label: "Polar White",     img: "images/media-types/matting/polar-white-mat.jpg" },
  { label: "White",           img: "images/media-types/matting/white-mat.jpg" },
  { label: "Steel Blue",      img: "images/media-types/matting/steel-blue-mat.jpg" },
  { label: "Chocolate Brown", img: "images/media-types/matting/chocolate-brown-mat.jpg" },
  { label: "Smoke Gray",      img: "images/media-types/matting/smoke-gray-mat.jpg" }
];
