// ═══════════════════════════════════════════════════════════════
// PRODUCTS.JS -- Deborah Heinlen Fine Art
// All product data lives here.  To add a new print:
//   1. Copy an existing product block
//   2. Update all fields
//   3. Add the product id to the correct collection array below
// ═══════════════════════════════════════════════════════════════

const PRODUCTS = {

  // ── BOTANICAL STUDIES ────────────────────────────────────────

  "waterlily-in-bloom": {
    id:              "waterlily-in-bloom",
    number:          "No. 01",
    collection:      "botanical-studies",
    collectionLabel: "Botanical Studies",
    collectionPage:  "botanical-studies.html",
    title:           "Waterlily in Bloom",
    caption:         "Patience made visible, floating at the edge of reflection.",
    description:     "A single water lily rests at the surface of still water, its petals open and unhurried. Rendered with a watercolor finish from an original photograph, this print celebrates the quiet geometry of nature -- the perfect circle, the gentle reflection, the moment before the ripple.",
    images: {
      main:    "images/botanical-studies/waterlily-in-bloom.jpg",
      room:    "images/mockups/waterlily-in-bloom/waterlily-in-bloom-room.jpg",
      framed:  "images/mockups/waterlily-in-bloom/waterlily-in-bloom-framed.jpg",
      canvas:  "images/mockups/waterlily-in-bloom/waterlily-in-bloom-canvas.jpg",
      metal:   "images/mockups/waterlily-in-bloom/waterlily-in-bloom-metal.jpg"
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
    id:              "golden-hour",
    number:          "No. 02",
    collection:      "botanical-studies",
    collectionLabel: "Botanical Studies",
    collectionPage:  "botanical-studies.html",
    title:           "Golden Hour",
    caption:         "Brief and brilliant, like all the best things.",
    description:     "A sunflower catches the last warmth of an afternoon, its petals radiating outward in shades of amber and gold. This watercolor-finished print transforms a single fleeting moment into something permanent -- the kind of light that only lasts a few minutes but stays with you much longer.",
    images: {
      main:    "images/botanical-studies/golden-hour.jpg",
      room:    "images/mockups/golden-hour/golden-hour-room.jpg",
      framed:  "images/mockups/golden-hour/golden-hour-framed.jpg",
      canvas:  "images/mockups/golden-hour/golden-hour-canvas.jpg",
      metal:   "images/mockups/golden-hour/golden-hour-metal.jpg"
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
    id:              "redbuds-in-bloom",
    number:          "No. 03",
    collection:      "botanical-studies",
    collectionLabel: "Botanical Studies",
    collectionPage:  "botanical-studies.html",
    title:           "Redbuds in Bloom",
    caption:         "Some things announce themselves without apology.",
    description:     "Delicate redbud blossoms cluster along a single branch in early spring, their purple-pink flowers announcing the season with quiet insistence. Rendered with a watercolor finish from an original photograph, this print celebrates the ephemeral beauty of flowering trees -- soft, familiar, and alive with the gentle color of renewal.",
    images: {
      main:    "images/botanical-studies/redbuds-in-bloom.jpg",
      room:    "images/mockups/redbuds-in-bloom/redbuds-in-bloom-room.jpg",
      framed:  "images/mockups/redbuds-in-bloom/redbuds-in-bloom-framed.jpg",
      canvas:  "images/mockups/redbuds-in-bloom/redbuds-in-bloom-canvas.jpg",
      metal:   "images/mockups/redbuds-in-bloom/redbuds-in-bloom-metal.jpg"
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

  "focused-intent": {
    id:              "focused-intent",
    number:          "No. 01",
    collection:      "wildlife",
    collectionLabel: "Wildlife",
    collectionPage:  "wildlife.html",
    title:           "Focused Intent",
    caption:         "Everything still.  Everything ready.",
    description:     "A predator at the edge of action, every sense engaged and every muscle coiled in quiet readiness. Rendered with a watercolor finish from an original photograph, this print captures the electric stillness of a wild animal at its most alive -- present, purposeful, and completely in its element.",
    images: {
      main:    "images/wildlife/focused-intent.jpg",
      room:    "images/mockups/focused-intent/focused-intent-room.jpg",
      framed:  "images/mockups/focused-intent/focused-intent-framed.jpg",
      canvas:  "images/mockups/focused-intent/focused-intent-canvas.jpg",
      metal:   "images/mockups/focused-intent/focused-intent-metal.jpg"
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

  "gray-wind": {
    id:              "gray-wind",
    number:          "No. 02",
    collection:      "wildlife",
    collectionLabel: "Wildlife",
    collectionPage:  "wildlife.html",
    title:           "Gray Wind",
    caption:         "Wild in the truest sense of the word.",
    description:     "A wolf moves through the landscape with the unhurried confidence of something that belongs there completely. Rendered with a watercolor finish from an original photograph, this print honors the wolf's enduring wildness -- present, purposeful, and entirely its own.",
    images: {
      main:    "images/wildlife/gray-wind.jpg",
      room:    "images/mockups/gray-wind/gray-wind-room.jpg",
      framed:  "images/mockups/gray-wind/gray-wind-framed.jpg",
      canvas:  "images/mockups/gray-wind/gray-wind-canvas.jpg",
      metal:   "images/mockups/gray-wind/gray-wind-metal.jpg"
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

  "untamed-majesty": {
    id:              "untamed-majesty",
    number:          "No. 03",
    collection:      "wildlife",
    collectionLabel: "Wildlife",
    collectionPage:  "wildlife.html",
    title:           "Untamed Majesty",
    caption:         "Still, watchful, sovereign.",
    description:     "A great wild animal rests in the quiet authority of its own presence, its gaze unhurried and absolute. Rendered with a watercolor finish from an original photograph, this print captures the paradox of the wild -- immense power held in perfect stillness, a reminder of everything the natural world still is.",
    images: {
      main:    "images/wildlife/untamed-majesty.jpg",
      room:    "images/mockups/untamed-majesty/untamed-majesty-room.jpg",
      framed:  "images/mockups/untamed-majesty/untamed-majesty-framed.jpg",
      canvas:  "images/mockups/untamed-majesty/untamed-majesty-canvas.jpg",
      metal:   "images/mockups/untamed-majesty/untamed-majesty-metal.jpg"
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

  "american-glory": {
    id:              "american-glory",
    number:          "No. 01",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "American Glory",
    caption:         "Freedom is not a metaphor when you watch one fly.",
    description:     "A bald eagle holds its position against an open sky, its white head bright and its gaze fixed on something beyond the frame. Rendered with a watercolor finish from an original photograph, this print is both a portrait of a bird and a reminder of the wild places still left in the world.",
    images: {
      main:    "images/avian-studies/american-glory.jpg",
      room:    "images/mockups/american-glory/american-glory-room.jpg",
      framed:  "images/mockups/american-glory/american-glory-framed.jpg",
      canvas:  "images/mockups/american-glory/american-glory-canvas.jpg",
      metal:   "images/mockups/american-glory/american-glory-metal.jpg"
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

  "ghost-wing": {
    id:              "ghost-wing",
    number:          "No. 02",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Ghost Wing",
    caption:         "Silent as intention.  Swift as thought.",
    description:     "An owl moves through the dim light on wings that make no sound, its pale form suspended between darkness and air. Rendered with a watercolor finish from an original photograph, this print captures the owl at its most elemental -- a creature of threshold moments, equally at home in shadow and stillness.",
    images: {
      main:    "images/avian-studies/ghost-wing.jpg",
      room:    "images/mockups/ghost-wing/ghost-wing-room.jpg",
      framed:  "images/mockups/ghost-wing/ghost-wing-framed.jpg",
      canvas:  "images/mockups/ghost-wing/ghost-wing-canvas.jpg",
      metal:   "images/mockups/ghost-wing/ghost-wing-metal.jpg"
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

  "poised": {
    id:              "poised",
    number:          "No. 03",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Poised",
    caption:         "The moment before everything changes.",
    description:     "A bird holds perfectly still at the edge of action, its body a study in contained energy. Rendered with a watercolor finish from an original photograph, this print is a meditation on readiness -- the suspended breath, the gathered attention, the instant of pure potential just before flight.",
    images: {
      main:    "images/avian-studies/poised.jpg",
      room:    "images/mockups/poised/poised-room.jpg",
      framed:  "images/mockups/poised/poised-framed.jpg",
      canvas:  "images/mockups/poised/poised-canvas.jpg",
      metal:   "images/mockups/poised/poised-metal.jpg"
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

  "quiet-perch": {
    id:              "quiet-perch",
    number:          "No. 04",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Quiet Perch",
    caption:         "Small enough to overlook.  Too beautiful not to notice.",
    description:     "A small bird rests on a branch in a moment of complete stillness, its colors rendered in the soft hues of a watercolor finish. A familiar sight in fields and backyards, this print brings the quiet joy of backyard birdwatching into your home -- intimate, unhurried, and full of the simple pleasure of paying attention.",
    images: {
      main:    "images/avian-studies/quiet-perch.jpg",
      room:    "images/mockups/quiet-perch/quiet-perch-room.jpg",
      framed:  "images/mockups/quiet-perch/quiet-perch-framed.jpg",
      canvas:  "images/mockups/quiet-perch/quiet-perch-canvas.jpg",
      metal:   "images/mockups/quiet-perch/quiet-perch-metal.jpg"
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

  "sentinels-watch": {
    id:              "sentinels-watch",
    number:          "No. 05",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Sentinel's Watch",
    caption:         "Standing guard over something only they can see.",
    description:     "Two birds share a high perch, their attention turned outward in the same direction as if keeping watch over the world below. Rendered with a watercolor finish from an original photograph, this print captures the companionable silence of creatures at ease in their element -- alert, composed, and entirely present.",
    images: {
      main:    "images/avian-studies/sentinels-watch.jpg",
      room:    "images/mockups/sentinels-watch/sentinels-watch-room.jpg",
      framed:  "images/mockups/sentinels-watch/sentinels-watch-framed.jpg",
      canvas:  "images/mockups/sentinels-watch/sentinels-watch-canvas.jpg",
      metal:   "images/mockups/sentinels-watch/sentinels-watch-metal.jpg"
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

  "still-waters": {
    id:              "still-waters",
    number:          "No. 06",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Still Waters",
    caption:         "Patience is its own kind of wisdom.",
    description:     "A wading bird stands motionless at the water's edge, its reflection perfectly doubled in the calm surface below. Rendered with a watercolor finish from an original photograph, this print is a study in stillness -- the practiced patience of a creature that has learned to wait, and wait well.",
    images: {
      main:    "images/avian-studies/still-waters.jpg",
      room:    "images/mockups/still-waters/still-waters-room.jpg",
      framed:  "images/mockups/still-waters/still-waters-framed.jpg",
      canvas:  "images/mockups/still-waters/still-waters-canvas.jpg",
      metal:   "images/mockups/still-waters/still-waters-metal.jpg"
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

  "wings-of-glory": {
    id:              "wings-of-glory",
    number:          "No. 07",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Wings of Glory",
    caption:         "The sky was made for exactly this.",
    description:     "A large bird spreads its wings to their full magnificent span, caught at the moment of pure aerial freedom. Rendered with a watercolor finish from an original photograph, this print fills a room with the feeling of open sky -- expansive, exhilarating, and impossible to ignore.",
    images: {
      main:    "images/avian-studies/wings-of-glory.jpg",
      room:    "images/mockups/wings-of-glory/wings-of-glory-room.jpg",
      framed:  "images/mockups/wings-of-glory/wings-of-glory-framed.jpg",
      canvas:  "images/mockups/wings-of-glory/wings-of-glory-canvas.jpg",
      metal:   "images/mockups/wings-of-glory/wings-of-glory-metal.jpg"
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

  "winter-red": {
    id:              "winter-red",
    number:          "No. 08",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Winter Red",
    caption:         "Red against white -- the simplest kind of beautiful.",
    description:     "A male cardinal rests among snow-dusted branches, his crimson plumage vivid against the pale quiet of winter. This watercolor-finished print captures one of nature's most striking contrasts, familiar to anyone who has ever looked out a window on a cold morning and caught their breath.",
    images: {
      main:    "images/avian-studies/winter-red.jpg",
      room:    "images/mockups/winter-red/winter-red-room.jpg",
      framed:  "images/mockups/winter-red/winter-red-framed.jpg",
      canvas:  "images/mockups/winter-red/winter-red-canvas.jpg",
      metal:   "images/mockups/winter-red/winter-red-metal.jpg"
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

  "ault-park-ascent": {
    id:              "ault-park-ascent",
    number:          "No. 01",
    collection:      "cincinnati",
    collectionLabel: "Cincinnati",
    collectionPage:  "cincinnati.html",
    title:           "Ault Park Ascent",
    caption:         "A city that knows how to be still.",
    description:     "The grand staircase and pavilion of Ault Park rise through the trees in quiet elegance, a beloved landmark rendered in the soft hues of a watercolor finish. This print honors one of Cincinnati's most cherished green spaces -- formal in its architecture, generous in its beauty, and deeply woven into the memory of everyone who has ever walked its paths.",
    images: {
      main:    "images/cincinnati/ault-park-ascent.jpg",
      room:    "images/mockups/ault-park-ascent/ault-park-ascent-room.jpg",
      framed:  "images/mockups/ault-park-ascent/ault-park-ascent-framed.jpg",
      canvas:  "images/mockups/ault-park-ascent/ault-park-ascent-canvas.jpg",
      metal:   "images/mockups/ault-park-ascent/ault-park-ascent-metal.jpg"
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

  "gateway-to-queen-city": {
    id:              "gateway-to-queen-city",
    number:          "No. 02",
    collection:      "cincinnati",
    collectionLabel: "Cincinnati",
    collectionPage:  "cincinnati.html",
    title:           "Gateway to Queen City",
    caption:         "Every bridge is a beginning.",
    description:     "One of Cincinnati's iconic bridges spans the Ohio River, connecting two states and two stories in a single graceful arc. Rendered with a watercolor finish from an original photograph, this print celebrates the river crossings that have defined Cincinnati's character -- industrial and beautiful, practical and poetic, always pointing toward something on the other side.",
    images: {
      main:    "images/cincinnati/gateway-to...een-city.jpg",
      room:    "images/mockups/gateway-to-queen-city/gateway-to-queen-city-room.jpg",
      framed:  "images/mockups/gateway-to-queen-city/gateway-to-queen-city-framed.jpg",
      canvas:  "images/mockups/gateway-to-queen-city/gateway-to-queen-city-canvas.jpg",
      metal:   "images/mockups/gateway-to-queen-city/gateway-to-queen-city-metal.jpg"
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

  "incline-to-the-mount": {
    id:              "incline-to-the-mount",
    number:          "No. 03",
    collection:      "cincinnati",
    collectionLabel: "Cincinnati",
    collectionPage:  "cincinnati.html",
    title:           "Incline to the Mount",
    caption:         "The city below.  The view above.  The climb between.",
    description:     "The historic Mount Adams neighborhood rises above the city in a scene that blends Cincinnati's working-class past with its hillside beauty. Rendered with a watercolor finish from an original photograph, this print pays tribute to the neighborhoods and steep streets that give Cincinnati its unmistakable character.",
    images: {
      main:    "images/cincinnati/incline-to-the-mount.jpg",
      room:    "images/mockups/incline-to-the-mount/incline-to-the-mount-room.jpg",
      framed:  "images/mockups/incline-to-the-mount/incline-to-the-mount-framed.jpg",
      canvas:  "images/mockups/incline-to-the-mount/incline-to-the-mount-canvas.jpg",
      metal:   "images/mockups/incline-to-the-mount/incline-to-the-mount-metal.jpg"
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

  "love-the-cov": {
    id:              "love-the-cov",
    number:          "No. 04",
    collection:      "cincinnati",
    collectionLabel: "Cincinnati",
    collectionPage:  "cincinnati.html",
    title:           "Love the Cov",
    caption:         "Just across the river.  Completely its own.",
    description:     "Covington, Kentucky glows across the Ohio River, its historic architecture and riverfront lights reflected in the water below. Rendered with a watercolor finish from an original photograph, this print celebrates the Cov's unique identity -- independent, vibrant, and inseparable from the Cincinnati story.",
    images: {
      main:    "images/cincinnati/love-the-cov.jpg",
      room:    "images/mockups/love-the-cov/love-the-cov-room.jpg",
      framed:  "images/mockups/love-the-cov/love-the-cov-framed.jpg",
      canvas:  "images/mockups/love-the-cov/love-the-cov-canvas.jpg",
      metal:   "images/mockups/love-the-cov/love-the-cov-metal.jpg"
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

  "queen-city-overture": {
    id:              "queen-city-overture",
    number:          "No. 05",
    collection:      "cincinnati",
    collectionLabel: "Cincinnati",
    collectionPage:  "cincinnati.html",
    title:           "Queen City Overture",
    caption:         "A city that earns its place on the river.",
    description:     "The Cincinnati skyline reflects on the Ohio River in the blue hour just before dark, its lights beginning to emerge against a deepening sky. This watercolor-finished print captures the city as it rarely gets to be seen -- quiet, luminous, and entirely itself.",
    images: {
      main:    "images/cincinnati/queen-city-overture.jpg",
      room:    "images/mockups/queen-city-overture/queen-city-overture-room.jpg",
      framed:  "images/mockups/queen-city-overture/queen-city-overture-framed.jpg",
      canvas:  "images/mockups/queen-city-overture/queen-city-overture-canvas.jpg",
      metal:   "images/mockups/queen-city-overture/queen-city-overture-metal.jpg"
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

  "the-grand-terminal": {
    id:              "the-grand-terminal",
    number:          "No. 06",
    collection:      "cincinnati",
    collectionLabel: "Cincinnati",
    collectionPage:  "cincinnati.html",
    title:           "The Grand Terminal",
    caption:         "Built for an age that believed in arrival.",
    description:     "Cincinnati Union Terminal rises in its full Art Deco grandeur, its sweeping half-dome facade one of the most recognized landmarks in the American Midwest. Rendered with a watercolor finish from an original photograph, this print honors a building that was designed to make people feel the significance of going somewhere.",
    images: {
      main:    "images/cincinnati/the-grand-terminal.jpg",
      room:    "images/mockups/the-grand-terminal/the-grand-terminal-room.jpg",
      framed:  "images/mockups/the-grand-terminal/the-grand-terminal-framed.jpg",
      canvas:  "images/mockups/the-grand-terminal/the-grand-terminal-canvas.jpg",
      metal:   "images/mockups/the-grand-terminal/the-grand-terminal-metal.jpg"
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

  "the-queens-crown": {
    id:              "the-queens-crown",
    number:          "No. 07",
    collection:      "cincinnati",
    collectionLabel: "Cincinnati",
    collectionPage:  "cincinnati.html",
    title:           "The Queen's Crown",
    caption:         "She has always known who she is.",
    description:     "A defining feature of the Cincinnati skyline stands illuminated against the sky, its architecture a testament to the city's ambition and permanence. Rendered with a watercolor finish from an original photograph, this print celebrates the landmarks that give a city its identity -- the shapes you recognize from miles away and feel at home beneath.",
    images: {
      main:    "images/cincinnati/the-queens-crown.jpg",
      room:    "images/mockups/the-queens-crown/the-queens-crown-room.jpg",
      framed:  "images/mockups/the-queens-crown/the-queens-crown-framed.jpg",
      canvas:  "images/mockups/the-queens-crown/the-queens-crown-canvas.jpg",
      metal:   "images/mockups/the-queens-crown/the-queens-crown-metal.jpg"
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

  "american-sky": {
    id:              "american-sky",
    number:          "No. 01",
    collection:      "americana",
    collectionLabel: "Americana",
    collectionPage:  "americana.html",
    title:           "American Sky",
    caption:         "Bigger than you remembered.  Always.",
    description:     "A vast American sky stretches overhead in shades of blue and cloud white, the kind of sky that makes you pull over and just look. Rendered with a watercolor finish from an original photograph, this print captures the particular feeling of open country under an open sky -- unhurried, expansive, and quietly magnificent.",
    images: {
      main:    "images/americana/american-sky.jpg",
      room:    "images/mockups/american-sky/american-sky-room.jpg",
      framed:  "images/mockups/american-sky/american-sky-framed.jpg",
      canvas:  "images/mockups/american-sky/american-sky-canvas.jpg",
      metal:   "images/mockups/american-sky/american-sky-metal.jpg"
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

  "kentucky-afternoon": {
    id:              "kentucky-afternoon",
    number:          "No. 02",
    collection:      "americana",
    collectionLabel: "Americana",
    collectionPage:  "americana.html",
    title:           "Kentucky Afternoon",
    caption:         "Time moves differently here.  That's the whole point.",
    description:     "A Kentucky afternoon unfolds in the long golden light of a summer day, the landscape rolling and unhurried as far as the eye can see. Rendered with a watercolor finish from an original photograph, this print is a love letter to the bluegrass state -- its fences, its fields, its particular quality of late-day quiet.",
    images: {
      main:    "images/americana/kentucky-afternoon.jpg",
      room:    "images/mockups/kentucky-afternoon/kentucky-afternoon-room.jpg",
      framed:  "images/mockups/kentucky-afternoon/kentucky-afternoon-framed.jpg",
      canvas:  "images/mockups/kentucky-afternoon/kentucky-afternoon-canvas.jpg",
      metal:   "images/mockups/kentucky-afternoon/kentucky-afternoon-metal.jpg"
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

  "lakeside-solitude": {
    id:              "lakeside-solitude",
    number:          "No. 03",
    collection:      "americana",
    collectionLabel: "Americana",
    collectionPage:  "americana.html",
    title:           "Lakeside Solitude",
    caption:         "The water knows how to keep a secret.",
    description:     "A quiet lakeside scene stretches out in the early morning calm, the water still and the light just beginning to find its way through the trees. Rendered with a watercolor finish from an original photograph, this print captures the restorative stillness of a place where nothing is required of you except to be there.",
    images: {
      main:    "images/americana/lakeside-solitude.jpg",
      room:    "images/mockups/lakeside-solitude/lakeside-solitude-room.jpg",
      framed:  "images/mockups/lakeside-solitude/lakeside-solitude-framed.jpg",
      canvas:  "images/mockups/lakeside-solitude/lakeside-solitude-canvas.jpg",
      metal:   "images/mockups/lakeside-solitude/lakeside-solitude-metal.jpg"
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

  "pasture-calm": {
    id:              "pasture-calm",
    number:          "No. 04",
    collection:      "americana",
    collectionLabel: "Americana",
    collectionPage:  "americana.html",
    title:           "Pasture Calm",
    caption:         "In the field, before the dawn.",
    description:     "A quiet pasture stretches in the soft light of early morning, its grass heavy with dew and its fence lines the only geometry in an otherwise open landscape. This watercolor-finished print is a meditation on the rural American scene -- simple, enduring, and full of a stillness that the modern world rarely offers.",
    images: {
      main:    "images/americana/pasture-calm.jpg",
      room:    "images/mockups/pasture-calm/pasture-calm-room.jpg",
      framed:  "images/mockups/pasture-calm/pasture-calm-framed.jpg",
      canvas:  "images/mockups/pasture-calm/pasture-calm-canvas.jpg",
      metal:   "images/mockups/pasture-calm/pasture-calm-metal.jpg"
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

  "blue-channels": {
    id:              "blue-channels",
    number:          "No. 01",
    collection:      "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:           "Blue Channels",
    caption:         "Water finds its way.  It always does.",
    description:     "A network of water channels winds through the Western landscape in shades of blue and silver, carving its patient path through rock and earth. Rendered with a watercolor finish from an original photograph, this print captures the quiet persistence of water in an arid land -- beautiful, deliberate, and older than anything we have built.",
    images: {
      main:    "images/american-west/blue-channels.jpg",
      room:    "images/mockups/blue-channels/blue-channels-room.jpg",
      framed:  "images/mockups/blue-channels/blue-channels-framed.jpg",
      canvas:  "images/mockups/blue-channels/blue-channels-canvas.jpg",
      metal:   "images/mockups/blue-channels/blue-channels-metal.jpg"
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

  "country-roads": {
    id:              "country-roads",
    number:          "No. 02",
    collection:      "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:           "Country Roads",
    caption:         "The road ahead longer than the road behind.",
    description:     "A ribbon of road disappears into the Western horizon, the landscape vast and indifferent on either side. This watercolor-finished print captures the particular feeling of driving West -- the sky bigger than seems reasonable, the landscape reminding you how small you are, and the road ahead full of everything still possible.",
    images: {
      main:    "images/american-west/country-roads.jpg",
      room:    "images/mockups/country-roads/country-roads-room.jpg",
      framed:  "images/mockups/country-roads/country-roads-framed.jpg",
      canvas:  "images/mockups/country-roads/country-roads-canvas.jpg",
      metal:   "images/mockups/country-roads/country-roads-metal.jpg"
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

  "desert-roads": {
    id:              "desert-roads",
    number:          "No. 03",
    collection:      "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:           "Desert Roads",
    caption:         "Part photograph.  Part painting.  All West.",
    description:     "A desert highway cuts through the red rock landscape in the fierce clarity of midday light, the asphalt shimmering and the canyon walls glowing warm on either side. Rendered with a watercolor finish from an original photograph, this print brings the raw beauty of the desert Southwest into your home -- vivid, elemental, and impossible to forget.",
    images: {
      main:    "images/american-west/desert-roads.jpg",
      room:    "images/mockups/desert-roads/desert-roads-room.jpg",
      framed:  "images/mockups/desert-roads/desert-roads-framed.jpg",
      canvas:  "images/mockups/desert-roads/desert-roads-canvas.jpg",
      metal:   "images/mockups/desert-roads/desert-roads-metal.jpg"
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

  "high-desert-mustang": {
    id:              "high-desert-mustang",
    number:          "No. 04",
    collection:      "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:           "High Desert Mustang",
    caption:         "Wild in a way that cannot be taught.",
    description:     "A mustang moves across the high desert plateau with the unhurried confidence of something that has never been told where to go. Rendered with a watercolor finish from an original photograph, this print is a portrait of American wildness at its most elemental -- free, beautiful, and entirely its own.",
    images: {
      main:    "images/american-west/high-desert-mustang.jpg",
      room:    "images/mockups/high-desert-mustang/high-desert-mustang-room.jpg",
      framed:  "images/mockups/high-desert-mustang/high-desert-mustang-framed.jpg",
      canvas:  "images/mockups/high-desert-mustang/high-desert-mustang-canvas.jpg",
      metal:   "images/mockups/high-desert-mustang/high-desert-mustang-metal.jpg"
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

  "homestead": {
    id:              "homestead",
    number:          "No. 05",
    collection:      "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:           "Homestead",
    caption:         "Someone built this.  Someone stayed.",
    description:     "A weathered Western homestead stands against a wide sky, its worn wood and faded paint the record of seasons and work and the particular stubbornness it takes to make a life in open country. Rendered with a watercolor finish from an original photograph, this print honors the quiet endurance of the people who shaped the American West.",
    images: {
      main:    "images/american-west/homestead.jpg",
      room:    "images/mockups/homestead/homestead-room.jpg",
      framed:  "images/mockups/homestead/homestead-framed.jpg",
      canvas:  "images/mockups/homestead/homestead-canvas.jpg",
      metal:   "images/mockups/homestead/homestead-metal.jpg"
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

  "night-watch": {
    id:              "night-watch",
    number:          "No. 06",
    collection:      "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:           "Night Watch",
    caption:         "The stars are not decoration.  They are the point.",
    description:     "The Milky Way arches over the Western desert in a display that feels less like weather and more like revelation. Rendered with a watercolor finish from an original photograph, this print brings the overwhelming scale of the night sky into your home -- intimate, luminous, and quietly humbling.",
    images: {
      main:    "images/american-west/night-watch.jpg",
      room:    "images/mockups/night-watch/night-watch-room.jpg",
      framed:  "images/mockups/night-watch/night-watch-framed.jpg",
      canvas:  "images/mockups/night-watch/night-watch-canvas.jpg",
      metal:   "images/mockups/night-watch/night-watch-metal.jpg"
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

  "quiet-shore": {
    id:              "quiet-shore",
    number:          "No. 07",
    collection:      "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:           "Quiet Shore",
    caption:         "The water came this far and decided to rest.",
    description:     "A Western shoreline stretches in the early morning quiet, the water calm and the light still deciding what color to be. Rendered with a watercolor finish from an original photograph, this print captures the particular peace of a place where land and water have reached an understanding -- gentle, unhurried, and completely still.",
    images: {
      main:    "images/american-west/quiet-shore.jpg",
      room:    "images/mockups/quiet-shore/quiet-shore-room.jpg",
      framed:  "images/mockups/quiet-shore/quiet-shore-framed.jpg",
      canvas:  "images/mockups/quiet-shore/quiet-shore-canvas.jpg",
      metal:   "images/mockups/quiet-shore/quiet-shore-metal.jpg"
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

  "red-rock-light": {
    id:              "red-rock-light",
    number:          "No. 08",
    collection:      "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:           "Red Rock Light",
    caption:         "The canyon was here long before the word ancient meant anything.",
    description:     "Red rock formations glow in the warm light of a Western afternoon, their layered faces telling a story measured in millions of years. Rendered with a watercolor finish from an original photograph, this print brings the monumental beauty of canyon country into your home -- ancient, vivid, and deeply grounding.",
    images: {
      main:    "images/american-west/red-rock-light.jpg",
      room:    "images/mockups/red-rock-light/red-rock-light-room.jpg",
      framed:  "images/mockups/red-rock-light/red-rock-light-framed.jpg",
      canvas:  "images/mockups/red-rock-light/red-rock-light-canvas.jpg",
      metal:   "images/mockups/red-rock-light/red-rock-light-metal.jpg"
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
// Maps collection page slugs to their product ids in display order.
// To add a new print: add its id to the correct array below.
// ═══════════════════════════════════════════════════════════════
const COLLECTIONS = {
  "botanical-studies": [
    "waterlily-in-bloom",
    "golden-hour",
    "redbuds-in-bloom"
  ],
  "wildlife": [
    "focused-intent",
    "gray-wind",
    "untamed-majesty"
  ],
  "avian-studies": [
    "american-glory",
    "ghost-wing",
    "poised",
    "quiet-perch",
    "sentinels-watch",
    "still-waters",
    "wings-of-glory",
    "winter-red"
  ],
  "cincinnati": [
    "ault-park-ascent",
    "gateway-to-queen-city",
    "incline-to-the-mount",
    "love-the-cov",
    "queen-city-overture",
    "the-grand-terminal",
    "the-queens-crown"
  ],
  "americana": [
    "american-sky",
    "kentucky-afternoon",
    "lakeside-solitude",
    "pasture-calm"
  ],
  "american-west": [
    "blue-channels",
    "country-roads",
    "desert-roads",
    "high-desert-mustang",
    "homestead",
    "night-watch",
    "quiet-shore",
    "red-rock-light"
  ]
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
