// ═══════════════════════════════════════════════════════════════
// PRODUCTS.JS -- Deborah Heinlen Fine Art
// Single source of truth for all product data.
// Updated February 2026
//
// To add a new print:
//   1. Copy an existing product block
//   2. Update all fields (id, title, images, altText, etc.)
//   3. Add the product id to the correct COLLECTIONS array below
//   4. Add a CSS color block on the collection page
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
    altText:         "Purple water lily watercolor print -- single bud floating among lily pads on still water at the Dallas Arboretum",
    description:     "Water lilies are among the oldest flowering plants on earth -- they have been here for nearly 130 million years, long before the first flower ever opened anywhere else.  What floats so effortlessly at the surface is supported by an invisible architecture below -- long stems anchoring leaf and blossom to the muddy bottom, roots holding on in the dark while everything above stays light and open.  This bud was photographed at the Dallas Arboretum, a world class garden that gave it the still water and patient light it deserved.  Water lilies open during the day and close at night, tracking the sun across the sky in their own quiet rhythm.  Monet spent the last thirty years of his life trying to paint what they do to water and light.  Rendered with a watercolor finish from an original photograph, this print captures one purple bud at the edge of bloom -- a garden that knows how to be still.",
    images: {
      main:    "images/botanical-studies/waterlily-in-bloom.jpg",
      room:    "images/mockups/waterlily-in-bloom-room.jpg",
      framed:  "images/mockups/waterlily-in-bloom-framed.jpg",
      canvas:  "images/mockups/waterlily-in-bloom-canvas-wrap.jpg",
      metal:   "images/mockups/waterlily-in-bloom-metal.jpg",
      original: "images/originals/waterlily-in-bloom.jpg"
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
    altText:         "Sunflower watercolor print -- single golden sunflower in warm afternoon light along a Hebron Kentucky roadside",
    description:     "Some photographs are planned.  This one was not.  A line of sunflowers along a Hebron, Kentucky roadside stopped the car entirely -- the kind of moment that reminds you why you always keep a camera close.  The sunflower is native to North America, cultivated by Indigenous peoples for thousands of years before the rest of the world caught on.  Young plants track the sun across the sky each day in a behavior called heliotropism -- but once they reach full bloom they settle facing east, greeting each morning with the same quiet faithfulness.  That dark center disk is not a single flower but hundreds of tiny florets arranged in a mathematically perfect Fibonacci spiral, one of nature's most precise and beautiful patterns.  Rendered with a watercolor finish from an original photograph, this print captures a single brilliant moment from a Kentucky summer -- the kind that happens along the roadside when you're paying attention.",
    images: {
      main:    "images/botanical-studies/golden-hour.jpg",
      room:    "images/mockups/golden-hour-room.jpg",
      framed:  "images/mockups/golden-hour-framed.jpg",
      canvas:  "images/mockups/golden-hour-canvas-wrap.jpg",
      metal:   "images/mockups/golden-hour-metal.jpg",
      original: "images/originals/golden-hour.jpg"
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
    altText:         "Eastern redbud watercolor print -- magenta-pink blossoms clustered on bare spring branches photographed in Cincinnati",
    description:     "Every spring in Cincinnati, the Eastern Redbud does something remarkable -- it blooms before its leaves arrive, covering bare branches in clusters of vivid magenta-pink flowers that seem to appear overnight.  Native to the eastern United States, it is one of the first trees to announce the season, an early and generous source of nectar for bees emerging from winter.  What most people don't know is that those blossoms are edible -- slightly sweet, faintly nutty, and beautiful scattered across a spring salad.  The botanical name is Cercis canadensis, and despite being called a redbud the flowers are a vivid magenta-purple -- exactly as nature intended and exactly as you see here.  Photographed in Cincinnati and rendered with a watercolor finish, this close study captures the Eastern Redbud at its most extravagant -- every branch a celebration, every blossom a reminder that winter always ends.",
    images: {
      main:    "images/botanical-studies/redbuds-in-bloom.jpg",
      room:    "images/mockups/redbuds-in-bloom-room.jpg",
      framed:  "images/mockups/redbuds-in-bloom-framed.jpg",
      canvas:  "images/mockups/redbuds-in-bloom-canvas-wrap.jpg",
      metal:   "images/mockups/redbuds-in-bloom-metal.jpg",
        original: "images/originals/redbuds.jpg"
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
    caption:         "Every step.  Every breath.  Every inch.",
    altText:         "Bengal tiger watercolor print -- tiger walking forward with intense direct gaze and low deliberate posture",
    description:     "The Bengal tiger is the largest wild cat on earth -- and this one is walking directly toward you.  That low, deliberate posture is not aggression.  It is focus -- the same complete, unhurried attention that has made tigers the apex predator of the Indian subcontinent for millions of years.  Fewer than 2,500 remain in the wild today, their territory shrinking as the world around them grows louder and more crowded.  Each one carries a stripe pattern as unique as a fingerprint -- no two tigers have ever looked exactly alike.  In Hindu tradition, the tiger is the vehicle of the goddess Durga, a symbol of power, protection, and the destruction of everything that should not endure.  Rendered with a watercolor finish from an original photograph, this portrait puts you directly in the path of all of it -- the beauty, the power, and the weight of what we stand to lose.",
    images: {
      main:    "images/wildlife/focused-intent.jpg",
      room:    "images/mockups/focused-intent-room.jpg",
      framed:  "images/mockups/focused-intent-framed.jpg",
      canvas:  "images/mockups/focused-intent-canvas-wrap.jpg",
      metal:   "images/mockups/focused-intent-metal.jpg",
        original: "images/originals/focused-intent.jpg"
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

  "pathfinder": {
    id:              "pathfinder",
    number:          "No. 02",
    collection:      "wildlife",
    collectionLabel: "Wildlife",
    collectionPage:  "wildlife.html",
    title:           "Pathfinder",
    caption:         "Wild in the truest sense of the word.",
    altText:         "Gray wolf watercolor print -- wolf portrait with golden eyes alert against a winter landscape",
    description:     "In many Native American traditions, the wolf is called the Pathfinder -- the teacher, the guide, the one who knows the way through.  Revered by the Lakota, the Ojibwe, and many Plains tribes for their intelligence, loyalty, and deep family bonds, wolves were considered brothers to humans long before the modern world decided otherwise.  By the mid twentieth century, the gray wolf had been nearly exterminated from the lower 48 states.  Their recovery is one of conservation's most important ongoing stories.  In the distance, just a sound -- a shift in the air.  The golden eyes lock in, unblinking, and the world goes still.  Rendered with a watercolor finish from an original photograph, this portrait captures the wolf in the language he was born to speak -- patient, precise, and completely alive to whatever moves in the dark.",
    images: {
      main:    "images/wildlife/pathfinder.jpg",
      room:    "images/mockups/pathfinder-room.jpg",
      framed:  "images/mockups/pathfinder-framed.jpg",
      canvas:  "images/mockups/pathfinder-canvas-wrap.jpg",
      metal:   "images/mockups/pathfinder-metal.jpg",
        original: "images/originals/pathfinder.jpg"
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
    caption:         "The symbol outlasts the animal.  Unless we choose otherwise.",
    altText:         "African lion watercolor print -- male lion portrait with full dark mane in golden light",
    description:     "The lion has meant something to humans for as long as humans have been telling stories.  From ancient Egypt to the British crown, across every civilization that ever shared a continent with one, the lion has stood for royalty, courage, and a kind of power that doesn't need to prove itself.  Once ranging across Africa, Europe, and Asia, wild lions now exist only in sub-Saharan Africa and a small, protected population in India's Gir Forest -- their numbers declining quietly while the symbol endures everywhere.  The mane tells its own story -- darker and fuller means stronger, healthier, more dominant -- a language written in evolution and read instantly by every other lion in the pride.  Rendered with a watercolor finish from an original photograph, this portrait asks nothing of you except to look -- and to remember that there are fewer of them every year.",
    images: {
      main:    "images/wildlife/untamed-majesty.jpg",
      room:    "images/mockups/untamed-majesty-room.jpg",
      framed:  "images/mockups/untamed-majesty-framed.jpg",
      canvas:  "images/mockups/untamed-majesty-canvas-wrap.jpg",
      metal:   "images/mockups/untamed-majesty-metal.jpg",
        original: "images/originals/untamed-majesty.jpg"
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
    altText:         "Bald eagle watercolor print -- close portrait of bald eagle with white head and sharp golden eye",
    description:     "The bald eagle was nearly gone.  By 1963, hunting and DDT poisoning had reduced the breeding population in the lower 48 states to fewer than 500 nesting pairs -- a symbol of the nation pushed to the edge of extinction.  The recovery that followed is one of conservation's greatest achievements.  Removed from the endangered species list in 2007, bald eagles are now making a remarkable comeback along the Ohio River, where lucky observers catch glimpses of a bird that once seemed lost forever.  That wingspan can reach eight feet.  They mate for life, return to the same nest year after year, and add to it until some nests weigh over a ton.  Benjamin Franklin famously preferred the wild turkey for the national symbol, calling the eagle a bird of bad moral character.  He was outvoted.  Rendered with a watercolor finish from an original photograph, this portrait captures the eagle exactly as Franklin's opponents imagined it -- still, watchful, and absolutely certain of its place in the world.",
    images: {
      main:    "images/avian-studies/american-glory.jpg",
      room:    "images/mockups/american-glory-room.jpg",
      framed:  "images/mockups/american-glory-framed.jpg",
      canvas:  "images/mockups/american-glory-canvas-wrap.jpg",
      metal:   "images/mockups/american-glory-metal.jpg",
        original: "images/originals/american-glory.jpg"
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

  "isis": {
    id:              "isis",
    number:          "No. 02",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Isis",
    caption:         "Rare in every sense of the word.",
    altText:         "Leucistic red-tailed hawk watercolor print -- pale hawk with striking blue eyes at Raptor Inc in Clermont County Ohio",
    description:     "Leucism is a genetic mutation so rare that most people will never encounter it in the wild -- a condition that prevents pigment from being deposited normally, leaving a bird like this red-tailed hawk pale and ghostly where others are richly colored.  Isis has called Raptor Inc. in Clermont County, Ohio home since 2004, when she was found on the ground in Bethel with a gunshot wound that ended any chance of release.  What remained is this -- a portrait of extraordinary stillness and survival, that remarkable blue eye steady against the soft green world behind her.  Rendered with a watercolor finish from an original photograph, this print is a reminder that nature saves its most remarkable things for those paying close attention.",
    images: {
      main:    "images/avian-studies/isis.jpg",
      room:    "images/mockups/isis-room.jpg",
      framed:  "images/mockups/isis-framed.jpg",
      canvas:  "images/mockups/isis-canvas-wrap.jpg",
      metal:   "images/mockups/isis-metal.jpg",
        original: "images/originals/isis.jpg"
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

  "apollo": {
    id:              "apollo",
    number:          "No. 03",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Apollo",
    caption:         "Grounded.  Unbothered.  Magnificent.",
    altText:         "Peregrine falcon watercolor print -- falcon with flared wing and fierce yellow eyes at Raptor Inc Ohio",
    description:     "The peregrine falcon is the fastest animal on earth -- capable of reaching speeds over 240 miles per hour in a dive.  Apollo has lived at Raptor Inc. in Clermont County, Ohio since sustaining a soft tissue injury that grounded him permanently.  He does not appear to have received this news poorly.  That flared wing posture, those fierce yellow eyes, that absolute refusal to be anything less than completely present -- Apollo fills every inch of his frame with the same authority he would bring to open sky.  Speed is only one kind of power.  Rendered with a watercolor finish from an original photograph, this portrait captures a bird who lost the sky and kept everything else.",
    images: {
      main:    "images/avian-studies/apollo.jpg",
      room:    "images/mockups/apollo-room.jpg",
      framed:  "images/mockups/apollo-framed.jpg",
      canvas:  "images/mockups/apollo-canvas-wrap.jpg",
      metal:   "images/mockups/apollo-metal.jpg",
        original: "images/originals/apollo.jpg"
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
    altText:         "Female Eastern bluebird watercolor print -- soft blue and warm rust colored bird perched quietly on a branch",
    description:     "The female Eastern Bluebird rarely gets top billing -- that usually goes to the male, with his brilliant royal blue and vivid rusty breast.  But look closer.  Her coloring is softer, warmer, more complex -- a quiet beauty that rewards the patient observer.  Once nearly gone from the eastern United States due to habitat loss and competition from invasive species, the Eastern Bluebird made a remarkable comeback thanks to dedicated nest box programs across the country.  A year-round resident in the Cincinnati region, she has been a symbol of happiness and good fortune across cultures for centuries -- and it is hard to argue with that assessment.  Rendered with a watercolor finish from an original photograph, this print is a small invitation to slow down and notice the ones who don't announce themselves.",
    images: {
      main:    "images/avian-studies/quiet-perch.jpg",
      room:    "images/mockups/quiet-perch-room.jpg",
      framed:  "images/mockups/quiet-perch-framed.jpg",
      canvas:  "images/mockups/quiet-perch-canvas-wrap.jpg",
      metal:   "images/mockups/quiet-perch-metal.jpg",
        original: "images/originals/quiet-perch.jpg"
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
    altText:         "Great blue heron watercolor print -- tall heron standing motionless on a fallen log above still water",
    description:     "The Great Blue Heron is North America's largest heron -- nearly four and a half feet tall, with a wingspan that can reach six feet -- and yet somehow it has mastered the art of disappearing in plain sight.  Standing motionless on a fallen log above the water, it becomes part of the landscape, indistinguishable from the stillness around it.  That patience is not contemplative -- it is predatory, a hunting strategy refined over millions of years.  A familiar and beloved presence along the rivers and lakes of the Cincinnati region, the Great Blue Heron is one of those creatures that stops you mid-stride every single time.  Rendered with a watercolor finish from an original photograph, this print captures that suspended moment -- the held breath, the still water, the bird that has all the time in the world.",
    images: {
      main:    "images/avian-studies/sentinels-watch.jpg",
      room:    "images/mockups/sentinels-watch-room.jpg",
      framed:  "images/mockups/sentinels-watch-framed.jpg",
      canvas:  "images/mockups/sentinels-watch-canvas-wrap.jpg",
      metal:   "images/mockups/sentinels-watch-metal.jpg",
        original: "images/originals/sentinels-watch.jpg"
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
    altText:         "Great blue heron watercolor print -- heron wading at the water's edge in quiet morning light",
    description:     "The Great Blue Heron is North America's largest heron -- nearly four and a half feet tall, with a wingspan that can reach six feet -- and yet somehow it has mastered the art of disappearing in plain sight.  Standing motionless at the water's edge, it becomes part of the landscape, indistinguishable from the stillness around it.  That patience is not contemplative -- it is predatory, a hunting strategy refined over millions of years.  A familiar and beloved presence along the rivers and lakes of the Cincinnati region, the Great Blue Heron is one of those creatures that stops you mid-stride every single time.  Rendered with a watercolor finish from an original photograph, this print captures that suspended moment -- the held breath, the still water, the bird that has all the time in the world.",
    images: {
      main:    "images/avian-studies/still-waters.jpg",
      room:    "images/mockups/still-waters-room.jpg",
      framed:  "images/mockups/still-waters-framed.jpg",
      canvas:  "images/mockups/still-waters-canvas-wrap.jpg",
      metal:   "images/mockups/still-waters-metal.jpg",
        original: "images/originals/still-waters.jpg"
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

  "the-mantle": {
    id:              "the-mantle",
    number:          "No. 07",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "The Mantle",
    caption:         "The sky was made for exactly this.",
    altText:         "Bald eagle mantling watercolor print -- eagle with wings fully spread and talons gripping a perch",
    description:     "When a bald eagle spreads its wings without taking flight, it is called mantling -- a display of dominance, of presence, of sheer physical authority that needs no explanation.  By 1963, fewer than 500 nesting pairs remained in the lower 48 states, victims of hunting and DDT poisoning.  Today, thanks to one of conservation's greatest success stories, they are back -- including along the Ohio River, where lucky observers catch moments exactly like this one.  With a wingspan that can reach eight feet, the bald eagle does not need to fly to fill a room.  Rendered with a watercolor finish from an original photograph, this print captures the mantle in full -- wings spread, talons gripping, the sky entirely his.",
    images: {
      main:    "images/avian-studies/the-mantle.jpg",
      room:    "images/mockups/the-mantle-room.jpg",
      framed:  "images/mockups/the-mantle-framed.jpg",
      canvas:  "images/mockups/the-mantle-canvas-wrap.jpg",
      metal:   "images/mockups/the-mantle-metal.jpg",
        original: "images/originals/the-mantle.jpg"
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

  "crimson": {
    id:              "crimson",
    number:          "No. 08",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Crimson",
    caption:         "Not just a bird.  Not just red.  Just everything.",
    altText:         "Northern cardinal watercolor print -- bright red male cardinal with fluffed feathers perched on a winter branch",
    description:     "The Northern Cardinal is the state bird of seven states -- including both Ohio and Kentucky -- and it is not hard to understand why.  The male is one of the only North American songbirds clothed entirely in red, a color so vivid it seems almost impossible against the bare branches of winter.  Unlike many of his neighbors, he does not migrate -- he stays through the coldest months, a flash of living color against ice and gray that has stopped people mid-stride for centuries.  That fluffed posture is not attitude -- it is warmth, the feathers trapping air against the cold, the body doing exactly what it was designed to do.  Rendered with a watercolor finish from an original photograph, this portrait puts you face to face with one of the most recognized and beloved birds in North America -- brilliant, unbothered, and entirely at home in the cold.",
    images: {
      main:    "images/avian-studies/crimson.jpg",
      room:    "images/mockups/crimson-room.jpg",
      framed:  "images/mockups/crimson-framed.jpg",
      canvas:  "images/mockups/crimson-canvas-wrap.jpg",
      metal:   "images/mockups/crimson-metal.jpg",
        original: "images/originals/crimson.jpg"
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
    caption:         "The kind of beautiful that keeps on giving.",
    altText:         "Ault Park Cincinnati watercolor print -- grand neoclassical stone steps with summer flowers and dramatic sky",
    description:     "Levi and Susan Ault gave Cincinnati a gift in 1911 -- 224 acres of hillside land in Hyde Park that would become one of the city's most beloved green spaces.  The neoclassical pavilion that crowns those grand stone steps was built in 1930 and has been listed on the National Register of Historic Places ever since, its formal architecture a reminder of an era that believed public spaces should be genuinely beautiful.  For nearly a century Cincinnatians have climbed these steps for weddings, celebrations, and quiet afternoon walks -- the seasonal plantings at the base replanted each year by volunteers who understand that some things are worth maintaining.  Photographed in the summer of 2025 and rendered with a watercolor finish, this print captures Ault Park at its most generous -- the flowers in full bloom, the sky dramatic overhead, the steps waiting for whoever comes next.",
    images: {
      main:    "images/cincinnati/ault-park-ascent.jpg",
      room:    "images/mockups/ault-park-ascent-room.jpg",
      framed:  "images/mockups/ault-park-ascent-framed.jpg",
      canvas:  "images/mockups/ault-park-ascent-canvas-wrap.jpg",
      metal:   "images/mockups/ault-park-ascent-metal.jpg",
        original: "images/originals/ault-park-ascent.jpg"
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

  "gateway-to-the-queen-city": {
    id:              "gateway-to-the-queen-city",
    number:          "No. 02",
    collection:      "cincinnati",
    collectionLabel: "Cincinnati",
    collectionPage:  "cincinnati.html",
    title:           "Gateway to the Queen City",
    caption:         "The original that became a legend.  Brooklyn's inspiration.",
    altText:         "John A Roebling Suspension Bridge watercolor print -- blue bridge spanning the Ohio River with Cincinnati skyline behind",
    description:     "Before the Brooklyn Bridge, there was the John A. Roebling Suspension Bridge.  Roebling completed his crossing of the Ohio River in 1867, connecting Covington, Kentucky to Cincinnati in what was then the longest suspension bridge in the world.  It was here that Roebling perfected the engineering principles and cable construction techniques he would later carry to New York -- making the Roebling Bridge not just a Cincinnati landmark but the direct predecessor of one of the most recognized structures on earth.  Still carrying traffic today, still painted that distinctive blue, still framing the Cincinnati skyline through its Gothic Revival towers exactly as it did over 150 years ago.  Photographed from the Kentucky side and rendered with a watercolor finish, this print puts you at the threshold of all of it -- the history, the engineering, the river, and the city waiting on the other side.",
    images: {
      main:    "images/cincinnati/gateway-to-the-queen-city.jpg",
      room:    "images/mockups/gateway-to-the-queen-city-room.jpg",
      framed:  "images/mockups/gateway-to-the-queen-city-framed.jpg",
      canvas:  "images/mockups/gateway-to-the-queen-city-canvas-wrap.jpg",
      metal:   "images/mockups/gateway-to-the-queen-city-metal.jpg",
        original: "images/originals/gateway-to-the-queen-city.jpg"
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
    caption:         "Still climbing, in memory.",
    altText:         "Cincinnati incline railway watercolor print -- miniature display of historic Mt Adams incline at Krohn Conservatory",
    description:     "Cincinnati was once a city of inclines.  At its peak in the late nineteenth century, the Queen City operated more incline railways than any city in the world -- steep mechanical lifts that carried passengers and freight from the riverfront up to the hilltop neighborhoods that defined the city's character.  The Mt. Adams Incline ran from 1876 to 1948, connecting the bustling streets below to the heights of one of Cincinnati's most beloved neighborhoods before the automobile made it obsolete.  All of the inclines are gone now.  What remains are photographs, memories, and this -- a lovingly crafted miniature display at Cincinnati's Krohn Conservatory in Eden Park, where that little red car still makes its climb through a Victorian Cincinnati that exists only in model form.  Rendered with a watercolor finish from an original photograph, this print captures something twice removed from the present -- a photograph of a memory of a city that was.",
    images: {
      main:    "images/cincinnati/incline-to-the-mount.jpg",
      room:    "images/mockups/incline-to-the-mount-room.jpg",
      framed:  "images/mockups/incline-to-the-mount-framed.jpg",
      canvas:  "images/mockups/incline-to-the-mount-canvas-wrap.jpg",
      metal:   "images/mockups/incline-to-the-mount-metal.jpg",
        original: "images/originals/incline-to-the-mount.jpg"
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
    altText:         "Covington Kentucky COV heart sculpture watercolor print -- red steel heart framing the Roebling Bridge and Cincinnati skyline",
    description:     "The COV sculpture on Covington's riverfront was created by artist Luke Crawley and installed as a gift from Southbank Partners -- a twelve-foot red steel heart that frames the Roebling Bridge and the Cincinnati skyline so perfectly it seems like it was always meant to be there.  Covington is Kentucky's third largest city, founded in 1815 and named for a War of 1812 hero, and it has spent the last two decades reminding everyone on both sides of the river what it is capable of.  Its restaurant scene, its MainStrasse Village neighborhood, its revitalized riverfront -- the Cov has become a destination in its own right while remaining unmistakably itself.  Rendered with a watercolor finish from an original photograph, this print captures that particular Covington energy -- heart wide open, Cincinnati right behind it.",
    images: {
      main:    "images/cincinnati/love-the-cov.jpg",
      room:    "images/mockups/love-the-cov-room.jpg",
      framed:  "images/mockups/love-the-cov-framed.jpg",
      canvas:  "images/mockups/love-the-cov-canvas-wrap.jpg",
      metal:   "images/mockups/love-the-cov-metal.jpg",
        original: "images/originals/love-the-cov.jpg"
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
    caption:         "Every city has a symphony.  This is Cincinnati's opus.",
    altText:         "Cincinnati Music Hall watercolor print -- High Victorian Gothic facade with soaring arches and rose window",
    description:     "Cincinnati Music Hall opened in 1878, built on the site of a paupers' cemetery in a burst of civic ambition that the city has never quite stopped being proud of.  The High Victorian Gothic architecture -- those soaring arches, that rose window, the twin towers -- landed it on the National Register of Historic Places, and a $143 million renovation completed in 2017 uncovered both its original splendor and a collection of ghost stories that delighted the entire city.  It is home to the Cincinnati Symphony Orchestra, the Cincinnati Pops, the Cincinnati Opera, and the Cincinnati Ballet -- more major resident performing arts companies than almost any hall its size in the country.  Rendered with a watercolor finish from an original photograph, this print honors a building that has always understood its purpose -- not just beauty, but something to gather around.",
    images: {
      main:    "images/cincinnati/queen-city-overture.jpg",
      room:    "images/mockups/queen-city-overture-room.jpg",
      framed:  "images/mockups/queen-city-overture-framed.jpg",
      canvas:  "images/mockups/queen-city-overture-canvas-wrap.jpg",
      metal:   "images/mockups/queen-city-overture-metal.jpg",
        original: "images/originals/queen-city-overture.jpg"
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
    caption:         "Every great journey deserved an arrival like this.",
    altText:         "Cincinnati Union Terminal watercolor print -- Art Deco half-dome facade of the Cincinnati Museum Center",
    description:     "Cincinnati Union Terminal opened in 1933 as one of the finest examples of Art Deco architecture in the United States -- its 180-foot half-dome facade one of the largest unsupported domes in the Western Hemisphere.  At its peak during World War II, the terminal handled over 17,000 passengers a day, its grand rotunda filled with WPA murals depicting the history and industry of the Cincinnati region.  By the 1970s it was nearly demolished.  Cincinnati refused.  A community effort saved the building, it was converted to the Cincinnati Museum Center in 1990, and a $212 million restoration completed in 2018 returned it to something close to its original glory.  Rendered with a watercolor finish from an original photograph, this print honors a building that Cincinnati refused to lose.",
    images: {
      main:    "images/cincinnati/the-grand-terminal.jpg",
      room:    "images/mockups/the-grand-terminal-room.jpg",
      framed:  "images/mockups/the-grand-terminal-framed.jpg",
      canvas:  "images/mockups/the-grand-terminal-canvas-wrap.jpg",
      metal:   "images/mockups/the-grand-terminal-metal.jpg",
        original: "images/originals/the-grand-terminal.jpg"
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
    caption:         "She named herself queen.  The river agreed.",
    altText:         "Cincinnati skyline watercolor print -- city reflected in the Ohio River with Great American Tower and Roebling Bridge",
    description:     "Cincinnati called itself the Queen City of the West as early as the 1820s -- and had the ambition to back it up.  By the 1840s, nearly half the city's population was German immigrant, bringing with them a culture of beer, music, and civic investment that shaped everything from its neighborhoods to its symphony.  The city that called itself Porkopolis embraced the flying pig as a symbol of pride rather than embarrassment, which tells you everything you need to know about Cincinnati's relationship with its own identity.  The Great American Tower's distinctive crown, added in 2011, gave the skyline a new punctuation mark -- visible from the Kentucky side where the Roebling Bridge still anchors the view exactly as it has for over 150 years.  Rendered with a watercolor finish from an original photograph, this print captures the Queen City as she has always preferred to be seen -- reflected in her river, confident in her history, entirely at home on the banks of the Ohio.",
    images: {
      main:    "images/cincinnati/the-queens-crown.jpg",
      room:    "images/mockups/the-queens-crown-room.jpg",
      framed:  "images/mockups/the-queens-crown-framed.jpg",
      canvas:  "images/mockups/the-queens-crown-canvas-wrap.jpg",
      metal:   "images/mockups/the-queens-crown-metal.jpg",
        original: "images/originals/the-queens-crown.jpg"
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

  "dawns-early-light": {
    id:              "dawns-early-light",
    number:          "No. 01",
    collection:      "americana",
    collectionLabel: "Americana",
    collectionPage:  "americana.html",
    title:           "Dawn's Early Light",
    caption:         "Not just a flag.  A promise of freedom.",
    altText:         "American flag watercolor print -- flag flying against blue sky in Covington Kentucky",
    description:     "On the morning of September 14, 1814, Francis Scott Key watched the bombardment of Fort McHenry from a ship in Baltimore Harbor and saw, through the smoke and early light, that the American flag was still flying.  The flag that inspired him was 30 by 42 feet -- so large it was designed to be seen from a distance.  His poem became a song, and in 1931 that song became the national anthem.  The flag in this photograph flies today in Covington, Kentucky, across the river from the city that has always understood what it means to be at the crossroads of the American story.  Rendered with a watercolor finish from an original photograph, this print captures the flag as Key saw it -- bright against an uncertain sky, the stars holding their position exactly as they always have.",
    images: {
      main:    "images/americana/dawns-early-light.jpg",
      room:    "images/mockups/dawns-early-light-room.jpg",
      framed:  "images/mockups/dawns-early-light-framed.jpg",
      canvas:  "images/mockups/dawns-early-light-canvas-wrap.jpg",
      metal:   "images/mockups/dawns-early-light-metal.jpg",
        original: "images/originals/dawns-early-light.jpg"
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

  "biko": {
    id:              "biko",
    number:          "No. 02",
    collection:      "americana",
    collectionLabel: "Americana",
    collectionPage:  "americana.html",
    title:           "Biko",
    caption:         "The joy of retirement.",
    altText:         "Thoroughbred horse watercolor print -- rescued Thoroughbred Biko grazing in a Lexington Kentucky pasture",
    description:     "The Thoroughbred is built for one thing -- speed -- and the racing industry does not always make room for what comes after.  But Lexington, Kentucky has a rescue community that does.  Organizations like the Secretariat Center and New Vocations have made the region a leader in Thoroughbred aftercare, giving horses like this one a second chapter that looks nothing like the first.  Biko was rescued from abuse by a friend, and he carries himself with the quiet dignity of an animal who has found exactly where he belongs.  This print is dedicated to Biko, and to Theo -- my own off-the-track Thoroughbred, a dressage partner who earned five first-place finishes at the Kentucky Horse Park before we said goodbye in the fall of 2024.  Rendered with a watercolor finish from an original photograph taken in Lexington, Kentucky, this print is for everyone who has ever earned a Thoroughbred's trust and understood what a privilege that is.",
    images: {
      main:    "images/americana/biko.jpg",
      room:    "images/mockups/biko-room.jpg",
      framed:  "images/mockups/biko-framed.jpg",
      canvas:  "images/mockups/biko-canvas-wrap.jpg",
      metal:   "images/mockups/biko-metal.jpg",
        original: "images/originals/biko.jpg"
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
    altText:         "Red canoe pond watercolor print -- red canoe resting at the shore of a still pond in Burlington Kentucky",
    description:     "Some photographs happen because you plan them.  Others happen because you finally pull over.  This pond sits along a narrow road in Burlington, Kentucky -- passed every day, admired every day, photographed on the one day patience finally ran out.  That red canoe rested at the shore in the full green of a Kentucky summer, perfectly still, perfectly placed, as if it had always known it was worth stopping for.  The scenery along any road changes with every passing day -- the light shifts, the seasons turn, the water rises and falls -- and most of it disappears without anyone ever stopping to notice.  Rendered with a watercolor finish from an original photograph, this print is a small reminder that the most beautiful things are often the ones you pass every day without stopping.  Until the day you do.",
    images: {
      main:    "images/americana/lakeside-solitude.jpg",
      room:    "images/mockups/lakeside-solitude-room.jpg",
      framed:  "images/mockups/lakeside-solitude-framed.jpg",
      canvas:  "images/mockups/lakeside-solitude-canvas-wrap.jpg",
      metal:   "images/mockups/lakeside-solitude-metal.jpg",
        original: "images/originals/lakeside-solitude.jpg"
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
    caption:         "The original American cattle.",
    altText:         "Texas Longhorn watercolor print -- Longhorn cattle portrait at Bluegrass Stockyards in Lexington Kentucky",
    description:     "The Texas Longhorn has been part of the American story since Spanish explorers brought cattle to the Americas in the 1490s.  For centuries they roamed the open range, developing a hardiness and adaptability that no other breed could match -- lean, resourceful, and built to survive conditions that would defeat almost anything else.  By the late 1800s they were the iconic cattle of the great American cattle drives, millions of them moving north along the Chisholm Trail from Texas to Kansas railheads, their distinctive horizontal horns visible for miles across the open plains.  By the early twentieth century they were nearly gone -- replaced by meatier breeds and pushed off the range by fences and farms.  The United States government stepped in during the 1920s to establish a conservation herd, saving one of America's most historic breeds from extinction.  Photographed at the Bluegrass Stockyards in Lexington, Kentucky and rendered with a watercolor finish, this portrait captures a Texas Longhorn doing what they have always done best -- occupying whatever ground they're on with complete and unhurried authority.",
    images: {
      main:    "images/americana/pasture-calm.jpg",
      room:    "images/mockups/pasture-calm-room.jpg",
      framed:  "images/mockups/pasture-calm-framed.jpg",
      canvas:  "images/mockups/pasture-calm-canvas-wrap.jpg",
      metal:   "images/mockups/pasture-calm-metal.jpg",
        original: "images/originals/pasture-calm.jpg"
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
    caption:         "What the lake left behind.",
    altText:         "Bonneville Salt Flats watercolor print -- vivid blue brine channels on white salt crust with Utah mountains in the distance",
    description:     "What looks like another world is actually the ghost of one.  The Bonneville Salt Flats in Utah are what remains of ancient Lake Bonneville -- a prehistoric inland sea that covered much of Utah and parts of Nevada and Idaho, as large as Lake Michigan at its peak some 14,500 years ago.  When the lake receded it left behind a thick crust of salt and minerals so vast and so perfectly flat that the curvature of the earth is visible from ground level.  Those vivid blue channels are not rivers -- they are brine channels, water so saturated with dissolved salt that it reflects the sky in a color that seems almost impossible against the white crust surrounding it.  The mountains in the distance are the same ones that once rose above the shoreline of that ancient sea.  Rendered with a watercolor finish from an original photograph, this print captures a landscape that has been ten thousand years in the making -- still and vast and completely indifferent to the passage of time.",
    images: {
      main:    "images/american-west/blue-channels.jpg",
      room:    "images/mockups/blue-channels-room.jpg",
      framed:  "images/mockups/blue-channels-framed.jpg",
      canvas:  "images/mockups/blue-channels-canvas-wrap.jpg",
      metal:   "images/mockups/blue-channels-metal.jpg",
        original: "images/originals/blue-channels.jpg"
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

  "forgotten-miles": {
    id:              "forgotten-miles",
    number:          "No. 02",
    collection:      "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:           "Forgotten Miles",
    caption:         "The road moved on.",
    altText:         "Vintage Ford truck watercolor print -- 1950s Ford F-series truck on a forgotten Utah back road with snow-capped mountains",
    description:     "Somewhere along a back road in rural Utah, off the highways and past the signage, this truck has been waiting.  It is an early 1950s Ford F-series -- part of the line that revolutionized the American work truck when Ford launched it in 1948, built for the ranches and farms and small businesses of postwar America when the West was still being worked by hand.  At some point the work stopped.  The gas station nearby closed, the road got quieter, and the truck stayed.  The American West is full of places like this -- towns and stops and filling stations that thrived when the roads ran through them and faded when the roads moved on.  What remains is this -- the rust and the patina, the wooden bed, the round headlights still facing forward, the snow-capped mountains keeping watch behind it.  Rendered with a watercolor finish from an original photograph taken along a forgotten Utah back road, this print is for everyone who has ever pulled over for something that deserved to be remembered.",
    images: {
      main:    "images/american-west/forgotten-miles.jpg",
      room:    "images/mockups/forgotten-miles-room.jpg",
      framed:  "images/mockups/forgotten-miles-framed.jpg",
      canvas:  "images/mockups/forgotten-miles-canvas-wrap.jpg",
      metal:   "images/mockups/forgotten-miles-metal.jpg",
        original: "images/originals/forgotten-miles.jpg"
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

  "crossroads": {
    id:              "crossroads",
    number:          "No. 03",
    collection:      "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:           "Crossroads",
    caption:         "Every direction a different story.",
    altText:         "Desert signpost watercolor print -- weathered wooden directional signs at Little Far West near Moab Utah",
    description:     "Every road in the American West eventually leads to a moment like this one.  This weathered signpost stands at Little Far West, a historic property just outside Moab, Utah -- fifteen minutes north of downtown, in the shadow of Arches National Park and the red rock canyon country that defines this corner of the world.  Bluff.  Kanab.  North.  The signs point in every direction, each one a different chapter of the Utah story -- Bluff, one of the oldest continuously inhabited towns in the state, settled by Mormon pioneers who carved a wagon road through solid rock to get there; Kanab, the little southern Utah town that Hollywood discovered and never quite let go.  Rendered with a watercolor finish from an original photograph, this print captures the particular feeling of standing at a crossroads in the wide open West -- every direction a different adventure, every sign a small invitation to go somewhere you haven't been yet.",
    images: {
      main:    "images/american-west/crossroads.jpg",
      room:    "images/mockups/crossroads-room.jpg",
      framed:  "images/mockups/crossroads-framed.jpg",
      canvas:  "images/mockups/crossroads-canvas-wrap.jpg",
      metal:   "images/mockups/crossroads-metal.jpg",
        original: "images/originals/crossroads.jpg"
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
    number:          "No. 04",
    collection:      "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:           "Homestead",
    caption:         "They looked at the wilderness and called it home.",
    altText:         "Utah pioneer chapel watercolor print -- historic chapel with bell tower and star at Little Far West near Moab",
    description:     "In the mid 1800s, Mormon pioneers were called to settle the remote corners of Utah -- directed to go where the land was hard and the distances were vast and build something that would last.  Many of them did.  This historic chapel at Little Far West, just outside Moab, Utah, is what that determination looks like a century and a half later -- the bell tower still standing, the stone foundation still solid, the star on the facade watching over a landscape that has barely changed since the first wagon rolled across it.  That star is part of a tradition as old as the American frontier -- barn stars have marked homesteads across the West since the 1800s, symbols of protection, good fortune, and the quiet hope that whatever you built here would endure.  The old wagon out front has not moved in a very long time.  The red rock canyon country stretching out behind it has not moved in 150 million years.  Rendered with a watercolor finish from an original photograph, this print honors the people who looked at all of that empty distance and decided to call it home.",
    images: {
      main:    "images/american-west/homestead.jpg",
      room:    "images/mockups/homestead-room.jpg",
      framed:  "images/mockups/homestead-framed.jpg",
      canvas:  "images/mockups/homestead-canvas-wrap.jpg",
      metal:   "images/mockups/homestead-metal.jpg",
        original: "images/originals/homestead.jpg"
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
    number:          "No. 05",
    collection:      "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:           "High Desert Mustang",
    caption:         "The original American wild.",
    altText:         "Wild mustang watercolor print -- lone horse standing in golden high desert grass with snow-capped Utah mountains",
    description:     "The wild mustang is one of the most enduring symbols of the American West -- and one of its most complicated stories.  Descended from horses brought to the Americas by Spanish conquistadors in the 1500s, mustangs have roamed the open range for five centuries, as much a part of the western landscape as the mountains and the sage.  At their peak there were an estimated two million of them.  Fewer than 80,000 remain today, managed and monitored on the same Bureau of Land Management lands where this one was found.  Mustangs typically travel in family bands -- a dominant mare, her offspring, a stallion keeping watch at the edges.  This one was alone.  Standing in the golden high desert grass of rural Utah, the snow-capped mountains rising behind him, he offered no explanation for his solitude and required none.  Some stories are never told.  Rendered with a watercolor finish from an original photograph, this print captures a moment of accidental grace -- a lone mustang on the open range, exactly where he belongs, entirely on his own terms.",
    images: {
      main:    "images/american-west/high-desert-mustang.jpg",
      room:    "images/mockups/high-desert-mustang-room.jpg",
      framed:  "images/mockups/high-desert-mustang-framed.jpg",
      canvas:  "images/mockups/high-desert-mustang-canvas-wrap.jpg",
      metal:   "images/mockups/high-desert-mustang-metal.jpg",
        original: "images/originals/high-desert-mustang.jpg"
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
    caption:         "The deeper the dark, the brighter the beauty.",
    altText:         "Utah night sky watercolor print -- Milky Way and Pleiades over illuminated bare tree using light painting technique",
    description:     "For most of human history, this is what the night looked like.  The Pleiades -- the Seven Sisters -- visible on the right, recognized and named by virtually every culture on earth for thousands of years, used by Native American tribes throughout the West as a calendar, a compass, and a source of story.  The Milky Way visible to everyone, everywhere, every clear night.  That world is largely gone now -- light pollution has stolen the dark sky from more than eighty percent of the world's population, and most people alive today have never seen a night like this one.  Utah is one of the last places in the continental United States where it still exists.  It has more International Dark Sky Parks than any other state, and on a clear mountain night the stars still perform exactly as they have for ten thousand years.  This image was made in the mountains of Utah using light painting -- a long exposure technique that illuminates the foreground with hand-held light while the camera drinks in the sky above.  The bare tree glows against the darkness exactly as it did that night, reaching toward a sky that most of the world has forgotten how to see.  Rendered with a watercolor finish from an original photograph, this print is a reminder of what the night used to be -- and in a few rare places, still is.",
    images: {
      main:    "images/american-west/night-watch.jpg",
      room:    "images/mockups/night-watch-room.jpg",
      framed:  "images/mockups/night-watch-framed.jpg",
      canvas:  "images/mockups/night-watch-canvas-wrap.jpg",
      metal:   "images/mockups/night-watch-metal.jpg",
        original: "images/originals/night-watch.jpg"
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
    caption:         "Still water.  Deep history.",
    altText:         "Utah mountain reflection watercolor print -- Cedar Mountains reflected in still water with golden marsh grass",
    description:     "This is one of the quietest places in Utah -- and one of the most storied.  The still water in the foreground reflects the Cedar Mountains, a 45-mile range whose name is itself a small piece of history -- early pioneers who settled this country called the juniper trees cedars, and the name stuck long after the mistake was recognized.  The ghost town of Aragonite sits nearby, named for the mineral once mined from these hills, now uninhabited and almost entirely gone.  The road that runs through here is the Hastings Cutoff -- the same route the Donner Party followed in 1846 on their ill-fated journey west, their wagons becoming mired in the mud just below the salt crust a few miles from this very spot.  None of that history is visible in this image.  What remains is the water, the mountains, the golden marsh grass, and a silence so complete it is almost impossible to believe the stories buried beneath it.  Rendered with a watercolor finish from an original photograph, this print captures a landscape that has seen everything and gives nothing away.",
    images: {
      main:    "images/american-west/quiet-shore.jpg",
      room:    "images/mockups/quiet-shore-room.jpg",
      framed:  "images/mockups/quiet-shore-framed.jpg",
      canvas:  "images/mockups/quiet-shore-canvas-wrap.jpg",
      metal:   "images/mockups/quiet-shore-metal.jpg",
        original: "images/originals/quiet-shore.jpg"
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
    caption:         "The road doesn't need a name.  Neither does the feeling.",
    altText:         "Utah red rock road watercolor print -- BLM dirt road leading toward red and white sandstone cliffs with sagebrush",
    description:     "The road doesn't have a name.  It doesn't need one.  Bureau of Land Management roads like this one thread through millions of acres of public land across the American West -- unpaved, unmarked, and leading toward some of the most extraordinary geology on earth.  Those red and white cliffs are Entrada and Navajo Sandstone, laid down 150 to 200 million years ago when this part of Utah was a vast desert of shifting dunes.  The red comes from iron oxide -- rust, essentially -- that coated every grain of sand as it was deposited, layer by layer, era by era, until the earth compressed it all into the striped canyon walls you see today.  Each horizontal band is a different chapter of time, readable to anyone patient enough to look.  The sagebrush and juniper flanking the road have been here considerably less long -- only a few thousand years -- but they belong to this landscape as completely as the rock itself.  Rendered with a watercolor finish from an original photograph taken along a BLM road in rural Utah, this print captures the particular feeling of a road that goes somewhere worth going -- and the particular freedom of being the one driving it.",
    images: {
      main:    "images/american-west/red-rock-light.jpg",
      room:    "images/mockups/red-rock-light-room.jpg",
      framed:  "images/mockups/red-rock-light-framed.jpg",
      canvas:  "images/mockups/red-rock-light-canvas-wrap.jpg",
      metal:   "images/mockups/red-rock-light-metal.jpg",
        original: "images/originals/red-rock-light.jpg"
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
// Used by collection pages to list products in order.
// To reorder prints on a collection page, just rearrange the ids here.
// ═══════════════════════════════════════════════════════════════

const COLLECTIONS = {
  "botanical-studies": [
    "waterlily-in-bloom",
    "golden-hour",
    "redbuds-in-bloom"
  ],
  "wildlife": [
    "focused-intent",
    "pathfinder",
    "untamed-majesty"
  ],
  "avian-studies": [
    "american-glory",
    "isis",
    "apollo",
    "quiet-perch",
    "sentinels-watch",
    "still-waters",
    "the-mantle",
    "crimson"
  ],
  "cincinnati": [
    "ault-park-ascent",
    "gateway-to-the-queen-city",
    "incline-to-the-mount",
    "love-the-cov",
    "queen-city-overture",
    "the-grand-terminal",
    "the-queens-crown"
  ],
  "americana": [
    "dawns-early-light",
    "biko",
    "lakeside-solitude",
    "pasture-calm"
  ],
  "american-west": [
    "blue-channels",
    "forgotten-miles",
    "crossroads",
    "homestead",
    "high-desert-mustang",
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
