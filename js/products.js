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
    
  "blue-flax": {
    id:              "blue-flax",
    number:          "No. 05",
    collection:      "botanical-studies",
    collectionLabel: "Botanical Studies",
    collectionPage:  "botanical-studies.html",
    title:           "Blue Flax",
    caption:         "Delicate by design.  Resilient by nature.",
    altText:         "Blue flax wildflower watercolor print -- delicate sky-blue five-petaled blossoms on slender stems against a soft neutral background",
    description:     "Blue flax has been part of the North American landscape for thousands of years, long before the botanist Frederick Pursh formally described it in 1814 and named it for Meriwether Lewis, who collected specimens along the Missouri River during the Corps of Discovery expedition.  Each individual blossom lasts only a single day -- opening in the morning, falling by afternoon -- but the plant produces new flowers continuously through the season, so the display never stops.  Native to the western United States and the Great Plains, it has naturalized across much of North America, appearing in meadows and roadsides with the kind of quiet persistence that easy beauty often hides.  The blue is not quite sky blue and not quite violet -- it shifts depending on the light, the time of day, and the angle from which you find it.  Rendered with a watercolor finish from an original photograph, this print captures a small cluster of blue flax at its most unguarded -- a few blooms and their buds on a pale ground, simple and completely certain of themselves.",
    images: {
      main:    "images/botanical-studies/blue-flax.jpg",
      room:    "images/mockups/blue-flax-room.jpg",
      framed:  "images/mockups/blue-flax-framed.jpg",
      canvas:  "images/mockups/blue-flax-canvas-wrap.jpg",
      metal:   "images/mockups/blue-flax-metal.jpg",
        original: "images/originals/blue-flax.jpg"
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
    
   "stargazer": {
    id:              "stargazer",
    number:          "No. 04",
    collection:      "botanical-studies",
    collectionLabel: "Botanical Studies",
    collectionPage:  "botanical-studies.html",
    title:           "Stargazer",
    caption:         "Some flowers don't wait to be noticed.",
    altText:         "Stargazer lily watercolor print -- vivid pink and white Stargazer lily in full bloom with deep magenta stripes and golden stamens",
    description:     "The Stargazer lily did not exist before 1978.  It was created by a California lily breeder named Leslie Woodriff, who spent years crossing Oriental and Asiatic varieties to produce a bloom that faced upward toward the sky rather than drooping like most lilies of its kind.  He named it Stargazer for exactly that reason.  It became one of the best-selling cut flowers in the world within a decade of its introduction, its fragrance so powerful that a single bloom can scent an entire room.  The deep magenta stripes radiating from the center follow the same Fibonacci geometry found in sunflowers and pinecones -- nature's preferred organizational pattern, present in nearly every flower that has ever opened.  Photographed in close detail and rendered with a watercolor finish from an original photograph, this print captures the Stargazer at full bloom -- every petal a small argument for paying closer attention to the things that grow quietly around us.",
    images: {
      main:    "images/botanical-studies/stargazer.jpg",
      room:    "images/mockups/stargazer-room.jpg",
      framed:  "images/mockups/stargazer-framed.jpg",
      canvas:  "images/mockups/stargazer-canvas-wrap.jpg",
      metal:   "images/mockups/stargazer-metal.jpg",
        original: "images/originals/stargazer.jpg"
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
    
     "hilo-gold": {
    id:              "hilo-gold",
    number:          "No. 07",
    collection:      "botanical-studies",
    collectionLabel: "Botanical Studies",
    collectionPage:  "botanical-studies.html",
    title:           "Hilo Gold",
    caption:         "Too cheerful to be overlooked. Too common to be appreciated. Until now.",
    altText:         "Wedelia watercolor print -- single bright yellow wedelia blossom surrounded by broad green leaves photographed near Hilo on the Big Island of Hawaii",
    description:     "Wedelia did not start out Hawaiian.  Native to Mexico and Central America, it arrived on the islands the way so many things do -- carried, planted, and eventually released into a landscape that suited it so completely that it simply never left.  It is everywhere near Hilo now, a low cheerful ground cover that runs along roadsides and spills over garden edges with the easy confidence of something that has long since stopped asking permission.  Most people walk past it without a second glance.  It is too familiar to be remarkable, too common to be celebrated -- which is exactly the kind of oversight that a camera can correct.  Seen up close, that single yellow blossom is as precisely constructed as any flower in a formal garden, its petals arranged with the same mathematical care that nature applies to everything it makes.  The broad rounded leaves surrounding it catch and hold the soft diffused light that Hilo's famously generous rainfall produces.  Rendered with a watercolor finish from an original photograph taken near Hilo on the Big Island of Hawaii, this print is a quiet argument for looking down once in a while -- for noticing what has been there all along.",
    images: {
      main:    "images/botanical-studies/hilo-gold.jpg",
      room:    "images/mockups/hilo-gold-room.jpg",
      framed:  "images/mockups/hilo-gold-framed.jpg",
      canvas:  "images/mockups/hilo-gold-canvas-wrap.jpg",
      metal:   "images/mockups/hilo-gold-metal.jpg",
        original: "images/originals/hilo-gold.jpg"
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
    
    "kohala-fire": {
    id:              "kohala-fire",
    number:          "No. 08",
    collection:      "botanical-studies",
    collectionLabel: "Botanical Studies",
    collectionPage:  "botanical-studies.html",
    title:           "Kohala Fire",
    caption:         "Soft enough to bloom. Strong enough to grow in lava.",
    altText:         "Ice plant watercolor print -- vibrant pink ice plant flower in full bloom nestled among thick blue-green succulent leaves in the lava fields of the Kohala Coast, Hawaii",
    description:     "The Kohala Coast on the western edge of the Big Island is not where you expect to find a flower this extravagant.  This is dry country -- black lava fields stretching to the sea, the sun direct and unfiltered, the ground beneath your feet the same hardened volcanic rock that ancient Hawaiians carved with petroglyphs centuries ago.  The Puako Petroglyph Archaeological Preserve holds one of the largest collections of those carvings in the Pacific, figures and symbols pressed into lava by people who understood that this landscape demanded something permanent.  Ice plant understood the same thing.  A succulent by nature, it stores water in those thick waxy leaves precisely because the ground around it offers so little.  The bloom it produces in exchange for that patience is almost unreasonably beautiful -- a hot pink starburst with a warm yellow center, every petal catching the Kohala light as if it were designed specifically to be seen against black rock.  It was.  Rendered with a watercolor finish from an original photograph taken in the lava fields near the Puako Petroglyphs on the Big Island of Hawaii, this print captures a flower that has made its peace with difficult ground -- and decided to be spectacular anyway.",
    images: {
      main:    "images/botanical-studies/kohala-fire.jpg",
      room:    "images/mockups/kohala-fire-room.jpg",
      framed:  "images/mockups/kohala-fire-framed.jpg",
      canvas:  "images/mockups/kohala-fire-canvas-wrap.jpg",
      metal:   "images/mockups/kohala-fire-metal.jpg",
        original: "images/originals/kohala-fire.jpg"
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
    
    "lowcountry-red": {
    id:              "lowcountry-red",
    number:          "No. 09",
    collection:      "botanical-studies",
    collectionLabel: "Botanical Studies",
    collectionPage:  "botanical-studies.html",
    title:           "Lowcountry Red",
    caption:         "One day to bloom. No time to be anything but magnificent.",
    altText:         "Tropical hibiscus watercolor print -- deep red-orange tropical hibiscus bloom with yellow stamens against rich dark green foliage photographed in Hilton Head, South Carolina",
    description:     "The tropical hibiscus has been cultivated for so long and carried so far from its original home in Asia that botanists are no longer entirely certain where it started.  What they do know is that it has made itself at home in warm, humid places all over the world -- and the South Carolina Lowcountry, with its salt air and generous heat, suits it perfectly.  Each individual bloom lasts exactly one day.  It opens in the morning, reaches full extravagance by midday, and is gone by evening -- which means the plant you are looking at is not being dramatic.  It is simply making the most of the time it has.  The deep red-orange of this particular bloom is produced by pigments called anthocyanins, the same compounds that color autumn leaves and dark berries, here concentrated into something that seems almost to generate its own light against the dark green behind it.  The long staminal column rising from the center -- that distinctive architectural detail that makes hibiscus unmistakable -- carries both pollen and pistil, the flower pollinating itself if nothing else arrives in time.  Rendered with a watercolor finish from an original photograph taken in Hilton Head, South Carolina, this print captures a single day's worth of effort -- which turns out to be more than enough.",
    images: {
      main:    "images/botanical-studies/lowcountry-red.jpg",
      room:    "images/mockups/lowcountry-red-room.jpg",
      framed:  "images/mockups/lowcountry-red-framed.jpg",
      canvas:  "images/mockups/lowcountry-red-canvas-wrap.jpg",
      metal:   "images/mockups/lowcountry-red-metal.jpg",
        original: "images/originals/lowcountry-red.jpg"
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
    
    "cloud-forest-crimson": {
    id:              "cloud-forest-crimson",
    number:          "No. 10",
    collection:      "botanical-studies",
    collectionLabel: "Botanical Studies",
    collectionPage:  "botanical-studies.html",
    title:           "Cloud Forest Crimson",
    caption:         "In a world of green and mist, one color announces itself.",
    altText:         "Red ginger watercolor print -- deep crimson red ginger spike rising between broad tropical leaves in the Mauna Kea Cloud Forest Bioreserve near Hilo, Hawaii",
    description:     "The Mauna Kea Cloud Forest Bioreserve exists in a world between worlds -- high enough on the slopes of the mountain to catch the clouds as they move through, low enough to sustain a lush and dripping tropical forest that feels nothing like the volcanic coastline below.  It is cool here, and quiet, and everything is green in approximately seventeen different ways.  Into all of that, red ginger announces itself in crimson.  Red ginger is not native to Hawaii.  Originally from Malaysia, it arrived on the islands and adapted so completely to the wet, warm conditions of places like this that it has become one of the defining flowers of the Hawaiian landscape.  That dramatic crimson spike is not actually the flower -- it is a series of bracts, modified leaves whose deep color attracts the pollinators that find the small true flowers tucked between them.  The whole structure can last for weeks, which is unusual in a world where most tropical blooms measure their lives in days.  Rendered with a watercolor finish from an original photograph taken in the Mauna Kea Cloud Forest Bioreserve near Hilo, this print captures a flower that has found its place in one of the most remarkable ecosystems on earth -- and made itself entirely at home.",
    images: {
      main:    "images/botanical-studies/cloud-forest-crimson.jpg",
      room:    "images/mockups/cloud-forest-crimson-room.jpg",
      framed:  "images/mockups/cloud-forest-crimson-framed.jpg",
      canvas:  "images/mockups/cloud-forest-crimson-canvas-wrap.jpg",
      metal:   "images/mockups/cloud-forest-crimson-metal.jpg",
        original: "images/originals/cloud-forest-crimson.jpg"
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
    
    "lavender-and-light": {
    id:              "lavender-and-light",
    number:          "No. 11",
    collection:      "botanical-studies",
    collectionLabel: "Botanical Studies",
    collectionPage:  "botanical-studies.html",
    title:           "Lavender and Light",
    caption:         "Every petal a study in how much color can live in one place.",
    altText:         "Bearded iris watercolor print -- pale lavender bearded iris with deep purple veining and golden center photographed at Waipio Valley Lookout on the Big Island of Hawaii",
    description:     "The bearded iris has been cultivated by humans for at least three thousand years.  Ancient Egyptians grew it in temple gardens.  The French made it the model for the fleur-de-lis.  Renaissance painters used it as a symbol of the Virgin Mary.  And yet for all of that history, the flower itself has never needed any of it -- it is entirely sufficient on its own terms.  What makes the bearded iris unmistakable is that fuzzy stripe of color running down the center of each lower petal, the beard that gives the flower both its name and its most distinctive character.  In this bloom the coloring moves from pale lavender at the outer edges inward through deeper purple veining to a warm golden heart, the whole thing lit from within in a way that watercolor renders with particular grace.  This image was photographed at the Waipio Valley Lookout on the Big Island of Hawaii -- a place the Hawaiian people have considered sacred for centuries, a valley of waterfalls and taro fields visible far below, the kind of place that puts everything into a certain quiet perspective.  Rendered with a watercolor finish from an original photograph taken at Waipio Valley, this print captures a flower that has traveled through three thousand years of human history and arrived, still perfect, at the edge of one of the most beautiful places on earth.",
    images: {
      main:    "images/botanical-studies/lavender-and-light.jpg",
      room:    "images/mockups/lavender-and-light-room.jpg",
      framed:  "images/mockups/lavender-and-light-framed.jpg",
      canvas:  "images/mockups/lavender-and-light-canvas-wrap.jpg",
      metal:   "images/mockups/lavender-and-light-metal.jpg",
        original: "images/originals/lavender-and-light.jpg"
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

   "firefox": {
    id:              "firefox",
    number:          "No. 04",
    collection:      "wildlife",
    collectionLabel: "Wildlife",
    collectionPage:  "wildlife.html",
    title:           "Firefox",
    caption:         "The original.  The one worth knowing.",
    altText:         "Red panda watercolor print -- russet-furred red panda with alert dark eyes and striped tail perched on a branch with soft green background",
    description:     "The red panda was described by Western science in 1825, nearly fifty years before anyone in the outside world had heard of the giant panda.  It was the original panda -- its name coming from the Nepali word 'ponya,' and its nickname 'firefox' predating any browser by more than a century.  Despite sharing a love of bamboo and a range that overlaps across the forests of the Himalayas and southwestern China, the red panda and the giant panda are not closely related.  The red panda is the only living member of its own family, Ailuridae, an evolutionary original with no close relatives anywhere on earth.  Fewer than 10,000 are estimated to remain in the wild, their numbers declining as the mountain forests they depend on shrink and fragment.  That expression -- alert, a little skeptical, entirely self-possessed -- is characteristic of an animal that has been doing things its own way for millions of years.  Rendered with a watercolor finish from an original photograph, this portrait introduces you to one of nature's most distinctive and least understood originals.",
    images: {
      main:    "images/wildlife/firefox.jpg",
      room:    "images/mockups/firefox-room.jpg",
      framed:  "images/mockups/firefox-framed.jpg",
      canvas:  "images/mockups/firefox-canvas-wrap.jpg",
      metal:   "images/mockups/firefox-metal.jpg",
      original: "images/originals/firefox.jpg"
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

   "night-shift": {
    id:              "night-shift",
    number:          "No. 04",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Night Shift",
    caption:         "Twelve hours of dark.  Not a moment wasted.",
    altText:         "Great horned owl watercolor print -- great horned owl with intense yellow eyes and prominent ear tufts on a dark woodland perch.",
    description:     "The Great Horned Owl is one of the most powerful and adaptable raptors in North America -- and one of the most perfectly engineered for the work it does.  Those tufts are not ears.  They are feathers, used for communication and camouflage, arranged to break up the owl's silhouette against the bark of the trees where it roosts.  The actual ears are asymmetrical openings on either side of the skull, positioned at slightly different heights so the brain can triangulate the exact location of a sound in three dimensions -- a system so precise that a Great Horned Owl can locate and strike prey beneath a foot of snow in complete darkness.  It can rotate its head 270 degrees, compensating for eyes that are fixed in the skull and so large relative to its body that they cannot move.  The Great Horned Owl will eat almost anything -- rabbits, skunks, house cats, other raptors, Canada geese -- and is the only animal that regularly preys on skunks.  Rendered with a watercolor finish from an original photograph, this portrait captures a bird that has heard everything going on around it and is choosing, for the moment, not to act.",
    images: {
      main:    "images/avian-studies/night-shift.jpg",
      room:    "images/mockups/night-shift-room.jpg",
      framed:  "images/mockups/night-shift-framed.jpg",
      canvas:  "images/mockups/night-shift-canvas-wrap.jpg",
      metal:   "images/mockups/night-shift-metal.jpg",
      original: "images/originals/night-shift.jpg"
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
    number:          "No. 12",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Quiet Perch",
    caption:         "Small enough to overlook.  Too beautiful not to notice.",
    altText:         "Female Eastern bluebird watercolor print -- soft blue and warm rust colored bird perched quietly on a branch",
    description:     "The Tufted Titmouse is one of the most overlooked birds in the eastern woodland, which is remarkable given that it is almost never actually quiet.  It announces itself constantly -- a loud, whistled 'peter-peter-peter' that carries well beyond what a four-inch bird has any right to project.  That silver-gray crest is not just decorative; like the Great Horned Owl's tufts, it communicates mood, rising when the bird is alert or agitated and flattening when it is calm.  The Tufted Titmouse is a hoarder by nature, caching seeds and insects one at a time in bark crevices and soil, returning to them through winter with a memory that researchers have found to be surprisingly precise.  It is also bold for its size, frequently the first bird to investigate a new feeder and one of the few small songbirds that will take food directly from a human hand with enough patience on your part.  A year-round resident throughout the eastern United States, it does not migrate and does not disappear in winter -- it simply gets louder.  Rendered with a watercolor finish from an original photograph, Quiet Perch captures a bird that has never once considered going unnoticed.",
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
    number:          "No. 10",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Sentinel's Watch",
    caption:         "Standing guard over something only they can see.",
    altText:        "Female Eastern Bluebird watercolor print -- eastern bluebird perched on a branch",
    description:     "The female Eastern Bluebird rarely gets top billing -- that usually goes to the male, with his brilliant royal blue and vivid rusty breast.  But look closer.  Her coloring is softer, warmer, more complex -- a quiet beauty that rewards the patient observer.  Once nearly gone from the eastern United States due to habitat loss and competition from invasive species, the Eastern Bluebird made a remarkable comeback thanks to dedicated nest box programs across the country.  A year-round resident in the Cincinnati region, she has been a symbol of happiness and good fortune across cultures for centuries -- and it is hard to argue with that assessment.  Rendered with a watercolor finish from an original photograph, this print is a small invitation to slow down and notice the ones who don't announce themselves.",
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
    number:          "No. 14",
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
    number:          "No. 05",
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
    number:          "No. 06",
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
    
    "rose-and-rust": {
    id:              "rose-and-rust",
    number:          "No. 07",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Rose and Rust",
    caption:         "Softer in color.  Equal in song.",
    altText:         "Female Northern cardinal watercolor print -- warm brown and rose-tinted female cardinal with orange bill perched on a winter branch",
    description:     "The female Northern Cardinal is almost always the one people overlook.  He arrives first, he is louder in color, he takes the obvious perch.  She is quieter in plumage -- warm brown and buff with just enough red in the crest and wing to remind you what she is -- but in one important way she is his equal and then some.  The female Northern Cardinal sings, which is unusual among North American songbirds where only the male typically vocalizes.  She sings while sitting on the nest, likely to communicate with her mate about food delivery.  Her song is as complex and musical as his, and she has her own territorial calls.  That orange bill is the same on both -- bright, heavy, and perfectly designed for cracking open seeds that would defeat a smaller beak.  Rendered with a watercolor finish from an original photograph, this portrait asks you to look at the one who doesn't announce herself -- and to notice, once you do, how much you had been missing.",
    images: {
      main:    "images/avian-studies/rose-and-rust.jpg",
      room:    "images/mockups/rose-and-rust-room.jpg",
      framed:  "images/mockups/rose-and-rust-framed.jpg",
      canvas:  "images/mockups/rose-and-rust-canvas-wrap.jpg",
      metal:   "images/mockups/rose-and-rust-metal.jpg",
      original: "images/originals/rose-and-rust.jpg"
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
    
    "the-redbird": {
    id:              "the-redbird",
    number:          "No. 08",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "The Redbird",
    caption:         "Unmistakable at any distance.",
    altText:         "Northern cardinal watercolor print -- vivid red male cardinal perched on a weathered wooden rail against a soft green background",
    description:     "The Northern Cardinal gets its name from the Roman Catholic cardinals whose brilliant red robes were as recognizable in the Old World as this bird is in the New.  The male is one of the only songbirds in North America clothed entirely in red -- no stripes, no patches, no hedging -- just that complete, unambiguous declaration of color against whatever background he chooses.  He is the state bird of seven states, including both Ohio and Kentucky, a distinction earned not by committee but by the simple fact that he is impossible to overlook and impossible to forget.  Unlike most migratory songbirds, the Northern Cardinal stays through winter, a flash of living red against snow and bare branches that has been stopping people mid-stride for centuries.  Photographed perched on a weathered wooden rail and rendered with a watercolor finish from an original photograph, this portrait puts you face to face with one of the most recognized birds in North America -- still, watchful, and entirely at home exactly where he is.",
    images: {
      main:    "images/avian-studies/the-redbird.jpg",
      room:    "images/mockups/the-redbird-room.jpg",
      framed:  "images/mockups/the-redbird-framed.jpg",
      canvas:  "images/mockups/the-redbird-canvas-wrap.jpg",
      metal:   "images/mockups/the-redbird-metal.jpg",
      original: "images/originals/the-redbird.jpg"
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
    
    "hidden-fire": {
    id:              "hidden-fire",
    number:          "No. 09",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Hidden Fire",
    caption:         "Red finds a way to show through anything.",
    altText:         "Northern cardinal watercolor print -- brilliant red male cardinal perched among green leafy branches in dappled light",
    description:     "The Northern Cardinal male does not migrate, does not molt into a duller winter plumage, and does not apologize for being exactly as vivid in February as he is in July.  That consistency is part of what makes him so beloved -- he is the same bird in every season, the same declaration of red against whatever the world puts behind him.  The green branches surrounding him here are not background -- they are context, the cardinal's preferred habitat of woodland edges and dense shrubby cover where he can move quickly between open feeding areas and sheltered perches.  He defends his territory by song as much as by presence, one of the most recognizable voices in the North American dawn chorus.  Cardinals were once trapped and sold as cage birds in the United States -- a practice that continued until the Migratory Bird Treaty Act of 1918 finally made it illegal.  Rendered with a watercolor finish from an original photograph, this print captures him in his element -- brilliant, unhurried, and entirely on his own terms.",
    images: {
      main:    "images/avian-studies/hidden-fire.jpg",
      room:    "images/mockups/hidden-fire-room.jpg",
      framed:  "images/mockups/hidden-fire-framed.jpg",
      canvas:  "images/mockups/hidden-fire-canvas-wrap.jpg",
      metal:   "images/mockups/hidden-fire-metal.jpg",
      original: "images/originals/hidden-fire.jpg"
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
    
    "full-sail": {
    id:              "full-sail",
    number:          "No. 11",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Full Sail",
    caption:         "Built for speed.  Built for beauty.  Built for both.",
    altText:         "Tree swallow watercolor print -- iridescent blue-green tree swallow photographed in full flight with wings outstretched against open sky.",
    description:     "The Tree Swallow is one of the most acrobatic fliers in North America, capable of turns and reversals at speed that seem to defy physics -- and this image catches it at full wing extension, every primary feather spread and readable against a soft watercolor sky.  That iridescent blue-green is not pigment in the conventional sense.  It is structural color, produced by the microscopic arrangement of the feather's surface, which reflects light differently depending on the angle -- shifting from deep blue to turquoise to almost green as the bird moves.  Tree Swallows are among the first migratory birds to return in spring, arriving in the Ohio and Kentucky region as early as late February, often before the insects they depend on are reliably flying.  They survive cold snaps by switching temporarily to berries -- a dietary flexibility rare among swallows and one of the reasons they can push the season further than almost any of their relatives.  Rendered with a watercolor finish from an original photograph, this print captures a single perfect moment of flight -- wings out, the air entirely cooperative, everything working exactly as it was designed to.",
    images: {
      main:    "images/avian-studies/full-sail.jpg",
      room:    "images/mockups/full-sail-room.jpg",
      framed:  "images/mockups/full-sail-framed.jpg",
      canvas:  "images/mockups/full-sail-canvas-wrap.jpg",
      metal:   "images/mockups/hidden-full-sail.jpg",
      original: "images/originals/full-sail.jpg"
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
    
 
    
     "island-gold": {
    id:              "island-gold",
    number:          "No. 13",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Island Gold",
    caption:         "Twice the color. Half the noise.",
    altText:         "Saffron finch watercolor print -- two brilliant yellow saffron finches with orange-red caps perched side by side on a weathered branch in Hawaii",
    description:     "The saffron finch did not arrive in Hawaii by accident.  Native to South America, where it ranges from Colombia to Argentina, it was introduced to the Hawaiian Islands decades ago and has made itself entirely at home -- particularly on the Big Island, where it is now one of the more reliably cheerful sights in the landscape.  That yellow is not subtle.  The saffron finch wears it the way the sun wears it -- completely, without apology, as if there were never any other option.  The orange-red cap that gives the male his most distinctive feature deepens with age, a signal of experience that other finches apparently find worth paying attention to.  These two share a branch with the easy familiarity of birds who have long since decided the world is large enough for both of them.  Neither is performing.  Neither is particularly concerned with being watched.  Saffron finches are seed eaters, ground foragers by nature, but this pair has found a higher vantage point and seems to be in no hurry to leave it.  Rendered with a watercolor finish from an original photograph taken on the Big Island of Hawaii, this print captures a moment of uncomplicated and completely golden companionship.",
    images: {
      main:    "images/avian-studies/island-gold.jpg",
      room:    "images/mockups/island-gold-room.jpg",
      framed:  "images/mockups/island-gold-framed.jpg",
      canvas:  "images/mockups/island-gold-canvas-wrap.jpg",
      metal:   "images/mockups/island-gold-metal.jpg",
        original: "images/originals/island-gold.jpg"
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
      
  "winter-vigil": {
    id:              "winter-vigil",
    number:          "No. 15",
    collection:      "avian-studies",
    collectionLabel: "Avian Studies",
    collectionPage:  "avian-studies.html",
    title:           "Winter Vigil",
    caption:         "In the heart of the storm, stillness.",
    altText:         "A barred owl perched on a snow-covered branch during a winter blizzard, rendered in watercolor style with soft muted tones of taupe, gray, and cream",
    description:     "The Barred Owl is one of the most successful raptors in North America, not because it is the largest or the most powerful, but because it is extraordinarily adaptable. It does not migrate. It does not hibernate. It simply stays, enduring whatever winter delivers with a patience that borders on indifference. While most wildlife retreats during a blizzard, the Barred Owl often hunts more actively, using hearing so acute it can detect a mouse moving beneath a foot of fresh snow. Those dark brown eyes -- unusual in a world of yellow-eyed owls -- give it an almost human expressiveness, which may explain why people stop cold when they encounter one. It cannot move those eyes; like all owls, its eyes are fixed in the skull, so it rotates its entire head instead, up to 270 degrees, missing nothing. Its call -- 'who cooks for you, who cooks for you-all' -- carries through winter woods for half a mile. If you have heard it and not known what it was, you have not forgotten it. Rendered with a watercolor finish from an original photograph taken during an active snowstorm, Winter Vigil captures a bird that has been watching far longer than you have been looking.",
    images: {
      main:    "images/avian-studies/winter-vigil.jpg",
      room:    "images/mockups/winter-vigil-room.jpg",
      framed:  "images/mockups/winter-vigil-framed.jpg",
      canvas:  "images/mockups/winter-vigil-canvas-wrap.jpg",
      metal:   "images/mockups/winter-vigil-metal.jpg",
        original: "images/originals/winter-vigil.jpg"
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

    "gateway-to-the-queen-city": {
    id:              "gateway-to-the-queen-city",
    number:          "No. 03",
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
    
  
      "heart-of-the-city": {
    id:              "heart-of-the-city",
    number:          "No. 02",
    collection:      "cincinnati",
    collectionLabel: "Cincinnati",
    collectionPage:  "cincinnati.html",
    title:           "Heart of the City",
    caption:         "She has stood at the center of Cincinnati since 1871.",
    altText:         "Tyler Davidson Fountain watercolor print -- the historic bronze Genius of Water statue atop the Tyler Davidson Fountain on Fountain Square in downtown Cincinnati, with water cascading from her outstretched arms",
    description:     "She has stood at the center of Cincinnati since 1871, arms outstretched, water pouring from her hands in every direction, a gesture of abundance and welcome that has defined Fountain Square for over 150 years. The Tyler Davidson Fountain was a gift to the city from businessman Henry Probasco, given in memory of his business partner and brother-in-law Tyler Davidson. Designed by August von Kreling and cast in Munich, the central figure  known as the Genius of Water, stands atop a tiered bronze basin surrounded by figures representing the many uses of water in daily life: the farmer, the fisherman, the mother, the firefighter.  Cincinnati was a city built on water. The Ohio River made it a trading capital and the Miami and Erie Canal connected it to the Great Lakes. The fountain honored all of that with a single figure and a single gesture, hands open, water catching the light in every direction. Fountain Square has been the city's gathering place ever since, for concerts, celebrations, and ordinary lunch breaks, and she has watched all of it from the center, exactly where she was placed. Rendered with a watercolor finish from an original photograph, this print captures one of Cincinnati's most enduring icons at her most luminous.",

    images: {
      main:    "images/cincinnati/heart-of-the-city.jpg",
      room:    "images/mockups/heart-of-the-city-room.jpg",
      framed:  "images/mockups/heart-of-the-city-framed.jpg",
      canvas:  "images/mockups/heart-of-the-city-canvas-wrap.jpg",
      metal:   "images/mockups/heart-of-the-city-metal.jpg",
        original: "images/originals/heart-of-the-city.jpg"
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
    number:          "No. 08",
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
    number:          "No. 04",
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
    number:          "No. 05",
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
    number:          "No. 01",
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

    
    
    "market-day": {
    id:              "market-day",
    number:          "No. 06",
    collection:      "cincinnati",
    collectionLabel: "Cincinnati",
    collectionPage:  "cincinnati.html",
    title:           "Market Day",
    caption:         "Since 1852, and still the best reason to get up early.",
    altText:         "Findlay Market watercolor print -- the iconic green and red Findlay Market pavilion in Cincinnati's Over-the-Rhine neighborhood, with red café chairs and outdoor seating under a summer sky",
    description:     "Findlay Market is the oldest continuously operating public market in Ohio, open since 1852, surviving wars, depressions, urban decline, and urban renewal, and arriving in the present day more vital than ever. The market sits at the heart of Over-the-Rhine, one of the largest intact urban historic districts in the United States, its cast iron and brick surroundings a reminder of the German immigrant community that built this neighborhood and this city into something remarkable. The pavilion itself, with its distinctive green signage, red ironwork, and cheerful awnings, has been a gathering place for Cincinnatians for over 170 years. On weekends it fills with farmers, vendors, chefs, families, and people who simply understand that buying food from the person who grew it is a different experience than any other kind of shopping. The red café chairs out front are almost always occupied, the coffee is always good, and the tomatoes are always worth the drive. Rendered with a watercolor finish from an original photograph, this print captures one of Cincinnati's most beloved institutions exactly as it looks on a perfect market morning -- the sign lit, the chairs out, and the doors about to open.",
    images: {
      main:    "images/cincinnati/market-day.jpg",
      room:    "images/mockups/market-day-room.jpg",
      framed:  "images/mockups/market-day-framed.jpg",
      canvas:  "images/mockups/market-day-canvas-wrap.jpg",
      metal:   "images/mockups/market-day-metal.jpg",
        original: "images/originals/market-day.jpg"
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
    
    
    
    "ault-park-ascent": {
    id:              "ault-park-ascent",
    number:          "No. 07",
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


  "dawns-early-light": {
    id:              "dawns-early-light",
    number:          "No. 10",
    collection:      "cincinnati",
    collectionLabel: "Cincinnati",
    collectionPage:  "cincinnati.html",
    title:           "Dawn's Early Light",
    caption:         "Not just a flag.  A promise of freedom.",
    altText:         "American flag watercolor print -- flag flying against blue sky in Covington Kentucky",
    description:     "On the morning of September 14, 1814, Francis Scott Key watched the bombardment of Fort McHenry from a ship in Baltimore Harbor and saw, through the smoke and early light, that the American flag was still flying.  The flag that inspired him was 30 by 42 feet -- so large it was designed to be seen from a distance.  His poem became a song, and in 1931 that song became the national anthem.  The flag in this photograph flies today in Covington, Kentucky, across the river from the city that has always understood what it means to be at the crossroads of the American story.  Rendered with a watercolor finish from an original photograph, this print captures the flag as Key saw it -- bright against an uncertain sky, the stars holding their position exactly as they always have.",
    images: {
      main:    "images/cincinnati/dawns-early-light.jpg",
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
    
  "incline-to-the-mount": {
    id:              "incline-to-the-mount",
    number:          "No. 09",
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

  // ── AMERICAN WEST ────────────────────────────────────────────



  "forgotten-miles": {
    id:              "forgotten-miles",
    number:          "No. 01",
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
    number:          "No. 02",
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
    number:          "No. 03",
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
    
  "pasture-calm": {
    id:              "pasture-calm",
    number:          "No. 04",
    collection:      "american-west",
    collectionLabel: "American West",
    collectionPage:  "american-west.html",
    title:           "Pasture Calm",
    caption:         "The original American cattle.",
    altText:         "Texas Longhorn watercolor print -- Longhorn cattle portrait at Bluegrass Stockyards in Lexington Kentucky",
    description:     "The Texas Longhorn has been part of the American story since Spanish explorers brought cattle to the Americas in the 1490s.  For centuries they roamed the open range, developing a hardiness and adaptability that no other breed could match -- lean, resourceful, and built to survive conditions that would defeat almost anything else.  By the late 1800s they were the iconic cattle of the great American cattle drives, millions of them moving north along the Chisholm Trail from Texas to Kansas railheads, their distinctive horizontal horns visible for miles across the open plains.  By the early twentieth century they were nearly gone -- replaced by meatier breeds and pushed off the range by fences and farms.  The United States government stepped in during the 1920s to establish a conservation herd, saving one of America's most historic breeds from extinction.  Photographed at the Bluegrass Stockyards in Lexington, Kentucky and rendered with a watercolor finish, this portrait captures a Texas Longhorn doing what they have always done best -- occupying whatever ground they're on with complete and unhurried authority.",
    images: {
      main:    "images/american-west/pasture-calm.jpg",
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
    
  
      // ── HORSE COUNTRY ────────────────────────────────────────────
    
    "biko": {
    id:              "biko",
    number:          "No. 01",
    collection:      "horse-country",
    collectionLabel: "Horse Country",
    collectionPage:  "horse-country.html",
    title:           "Biko",
    caption:         "The joy of retirement.",
    altText:         "Thoroughbred horse watercolor print -- rescued Thoroughbred Biko grazing in a Lexington Kentucky pasture",
    description:     "The Thoroughbred is built for one thing -- speed -- and the racing industry does not always make room for what comes after.  But Lexington, Kentucky has a rescue community that does.  Organizations like the Secretariat Center and New Vocations have made the region a leader in Thoroughbred aftercare, giving horses like this one a second chapter that looks nothing like the first.  Biko was rescued from abuse by a friend, and he carries himself with the quiet dignity of an animal who has found exactly where he belongs.  This print is dedicated to Biko, and to Theo -- my own off-the-track Thoroughbred, a dressage partner who earned five first-place finishes at the Kentucky Horse Park before we said goodbye in the fall of 2025.  Rendered with a watercolor finish from an original photograph taken in Lexington, Kentucky, this print is for everyone who has ever earned a Thoroughbred's trust and understood what a privilege that is.",
    images: {
      main:    "images/horse-country/biko.jpg",
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
    
    "kindred": {
    id:              "kindred",
    number:          "No. 02",
    collection:      "horse-country",
    collectionLabel: "Horse Country",
    collectionPage:  "horse-country.html",
    title:           "Kindred",
    caption:         "Trust built over years.  Shown in a moment.",
    altText:         "Thoroughbred horse watercolor print -- two horses nuzzling nose to nose in a winter pasture with dark bare trees behind them",
    description:     "Horses are among the most socially complex of all domesticated animals, and the bond between two horses that have chosen each other is one of the most consistent and recognizable relationships in the animal world.  They groom each other, stand together in all weather, grieve when separated, and in documented cases have refused to eat after the loss of a companion.  The word 'kindred' comes from the Old English for family -- those bound by blood or by bond -- and this is exactly what that looks like.  The palomino and the chestnut stand together with their heads touching, the dark background of bare winter trees framing them in the particular warm light that comes just before the cold sets in.  There is nothing performed about this.  They are simply where they want to be, with the one they want to be with.  Rendered with a watercolor finish from an original photograph, this print captures a moment of equine connection so plain and so complete that it requires no explanation from either of them.",
    images: {
      main:    "images/horse-country/kindred.jpg",
      room:    "images/mockups/kindred-room.jpg",
      framed:  "images/mockups/kindred-framed.jpg",
      canvas:  "images/mockups/kindred-canvas-wrap.jpg",
      metal:   "images/mockups/kindred-metal.jpg",
        original: "images/originals/kindred.jpg"
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
    
    "eye-to-eye": {
    id:              "eye-to-eye",
    number:          "No. 03",
    collection:      "horse-country",
    collectionLabel: "Horse Country",
    collectionPage:  "horse-country.html",
    title:           "Eye to Eye",
    caption:         "Horses decide in a moment whether you're worth their attention.  This one decided.",
    altText:        "Thoroughbred horse watercolor print -- chestnut horse with blaze facing directly toward camera in close portrait",
    description:     "The horse in this portrait is looking directly at you, and that is not an accident.  Horses decide very quickly whether a person is worth their attention, and the ones who have been treated well tend to greet curiosity with curiosity -- holding eye contact, reading the face in front of them, making a judgment that happens faster than you can track.  The chestnut coat in this image catches the light from directly ahead, the bokeh of the autumn trees behind going soft and warm, everything in the composition pointing toward that face and those eyes.  The blaze -- the white marking running down the center of the face -- is as individual as a fingerprint.  No two blazes are exactly alike, and experienced horsemen can identify individual animals by them from a considerable distance.  This horse is built heavily through the neck and chest, a frame that suggests draft blood somewhere in the lineage, the kind of quiet power that doesn't need to announce itself.  Rendered with a watercolor finish from an original photograph, this portrait puts you exactly where the title says -- looking directly into the face of an animal that has decided you are worth a moment of its complete attention.",
    images: {
      main:    "images/horse-country/eye-to-eye.jpg",
      room:    "images/mockups/eye-to-eye-room.jpg",
      framed:  "images/mockups/eye-to-eye-framed.jpg",
      canvas:  "images/mockups/eye-to-eye-canvas-wrap.jpg",
      metal:   "images/mockups/eye-to-eye-metal.jpg",
        original: "images/originals/eye-to-eye.jpg"
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
     
    "the-lookout": {
    id:              "the-lookout",
    number:          "No. 04",
    collection:      "horse-country",
    collectionLabel: "Horse Country",
    collectionPage:  "horse-country.html",
    title:           "The Lookout",
    caption:         "Always aware.  Never alarmed.",
    altText:         "Thoroughbred horse watercolor print -- chestnut horse in side profile standing alert in a soft green summer pasture",
    description:     "The chestnut horse is not the most common color in the Thoroughbred world, but it is one of the oldest -- a warm reddish-brown coat produced by a recessive gene that has been present in horses since long before anyone was breeding them intentionally.  This one carries it well.  That neck, the set of the ears, the alert eye turned slightly toward the camera -- this is a horse that is aware of everything in its immediate environment and has decided, for the moment, that none of it requires action.  Horses have nearly 360-degree vision, with only two small blind spots -- directly in front of the nose and directly behind the tail -- and they process their surroundings constantly, their ears rotating independently to locate sounds the way a satellite dish tracks a signal.  The soft green background here is the kind of open pasture that horses evolved to read -- flat, visible, nowhere for a predator to hide.  Rendered with a watercolor finish from an original photograph, this portrait captures a horse in its preferred state -- aware, unhurried, and completely in charge of its own attention.",
    images: {
      main:    "images/horse-country/the-lookout.jpg",
      room:    "images/mockups/the-lookout-room.jpg",
      framed:  "images/mockups/the-lookout-framed.jpg",
      canvas:  "images/mockups/the-lookout-canvas-wrap.jpg",
      metal:   "images/mockups/the-lookout-metal.jpg",
        original: "images/originals/the-lookout.jpg"
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
    
    "three-wide": {
    id:              "three-wide",
    number:          "No. 05",
    collection:      "horse-country",
    collectionLabel: "Horse Country",
    collectionPage:  "horse-country.html",
    title:           "Three Wide",
    caption:         "When there's no room to spare, every inch is everything.",
    altText:         "Thoroughbred horse racing watercolor print -- three racehorses mid-stride in green checkered and blue silks at Belterra Park",
    description:     "Three horses, three jockeys, three entirely different ideas about who is going to win.  Belterra Park opened in 1999 on the banks of the Ohio River in Anderson Township, bringing Thoroughbred racing back to the Cincinnati area after a long absence and establishing itself as one of the premier racing venues in the region.  The dirt track that looks so simple from the grandstand is anything but -- its composition, moisture content, and maintenance affect every race run on it, and the horses that learn to read it fastest are the ones who run on it best.  In this moment the outcome is genuinely undecided.  The green-silked jockey on the left has the inside position.  The checkered silks in the center has the whip raised.  The blue silks on the right has the angle.  The dirt flying behind them is the sound you can almost hear from here.  Rendered with a watercolor finish from an original photograph taken at Belterra Park, this print puts you at the rail for the moment before everything is decided.",
    images: {
      main:    "images/horse-country/three-wide.jpg",
      room:    "images/mockups/three-wide-room.jpg",
      framed:  "images/mockups/three-wide-framed.jpg",
      canvas:  "images/mockups/three-wide-canvas-wrap.jpg",
      metal:   "images/mockups/three-wide-metal.jpg",
        original: "images/originals/three-wide.jpg"
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
    
    "the-win": {
    id:              "the-win",
    number:          "No. 06",
    collection:      "horse-country",
    collectionLabel: "Horse Country",
    collectionPage:  "horse-country.html",
    title:           "The Win",
    caption:         "This is what it looks like the moment everything is decided.",
    altText:         "Thoroughbred horse racing watercolor print -- three racehorses driving toward the finish line with jockey in red and white silks celebrating",
    description:     "This is what it looks like at the exact moment everything is decided.  The jockey in the red and white silks has the whip raised high -- not urging now, but celebrating, the finish line already behind him, the race already his.  The two horses flanking him on either side are still running, still fighting for position, still in the race that he has already won.  Belterra Park in Anderson Township, Ohio has been the home of Cincinnati-area Thoroughbred racing since 1999, and moments like this one are why people keep coming back to the rail.  The crowd behind the wire fence is a blur.  The building beyond them is barely there.  Nothing in this image exists except the finish line that was just crossed and the man on the horse who crossed it first.  Thoroughbred racing has been called the sport of kings, which understates what it costs and overstates who benefits -- but it does not overstate what it looks like at this exact moment.  Rendered with a watercolor finish from an original photograph taken at Belterra Park, this print captures the win -- the raised whip, the open celebration, the brief and brilliant moment when everything went exactly right.",
    images: {
      main:    "images/horse-country/the-win.jpg",
      room:    "images/mockups/the-win-room.jpg",
      framed:  "images/mockups/the-win-framed.jpg",
      canvas:  "images/mockups/the-win-canvas-wrap.jpg",
      metal:   "images/mockups/the-win-metal.jpg",
        original: "images/originals/the-win.jpg"
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
    
    "nose-to-nose": {
    id:              "nose-to-nose",
    number:          "No. 07",
    collection:      "horse-country",
    collectionLabel: "Horse Country",
    collectionPage:  "horse-country.html",
    title:           "Nose to Nose",
    caption:         "At speed, a length is a lifetime.",
    altText:         "Thoroughbred horse racing watercolor print -- two racehorses neck and neck with numbers 7 and 4 visible in a close finish",
    description:     "In Thoroughbred racing, a nose is an official margin of victory -- the smallest winning distance recognized, smaller than a head, smaller than a neck, smaller than the length of time it takes to register what you are seeing.  At Belterra Park in Anderson Township, Ohio, this is the kind of race that keeps people at the rail long after the favorite has finished comfortably in front.  Horse number seven and horse number four are running as if they share a single intention -- bodies at full extension, legs out of phase, each one occupying exactly the space the other one wants.  The jockey in the checkered silks is not looking at number four.  Number four's jockey is not looking at number seven.  They are both looking at where they are going, because at this speed there is no time to look anywhere else.  Rendered with a watercolor finish from an original photograph taken at Belterra Park, this print captures the particular drama of a race that will be decided by something smaller than a breath.",
    images: {
      main:    "images/horse-country/nose-to-nose.jpg",
      room:    "images/mockups/nose-to-nose-room.jpg",
      framed:  "images/mockups/nose-to-nose-framed.jpg",
      canvas:  "images/mockups/nose-to-nose-canvas-wrap.jpg",
      metal:   "images/mockups/nose-to-nose-metal.jpg",
        original: "images/originals/nose-to-nose.jpg"
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
    
    "in-the-clear": {
    id:              "in-the-clear",
    number:          "No. 02",
    collection:      "horse-country",
    collectionLabel: "Horse Country",
    collectionPage:  "horse-country.html",
    title:           "In the Clear",
    caption:         "Once you're ahead, all you hear is your own hoofbeats.",
    altText:         "Thoroughbred horse racing watercolor print -- lone racehorse number 5 in green silks pulling ahead on the track at Belterra Park",
    description:     "There is a moment in every race when one horse simply opens up a lead that the others cannot answer.  Number five has found that moment.  The green silks match the number on the saddle cloth and the color of the turf beyond the rail -- everything in this image pointing forward, everything in motion, the dirt kicking up behind hooves that are covering ground faster than they appear to be.  Belterra Park in Anderson Township, Ohio sits on the banks of the Ohio River, its backstretch visible from the Kentucky side on a clear day.  The horses that run here are Thoroughbreds -- a breed developed in England in the 17th and 18th centuries by crossing native mares with three founding Arabian stallions, every registered Thoroughbred alive today traceable through an unbroken line to one of those three horses.  What looks like open track ahead of number five is actually the hardest part of the race -- holding the lead when the pack behind you has everything to gain and nothing to lose.  Rendered with a watercolor finish from an original photograph taken at Belterra Park, this print captures the moment when the race becomes a conversation between one horse and the clock.",
    images: {
      main:    "images/horse-country/in-the-clear.jpg",
      room:    "images/mockups/in-the-clear-room.jpg",
      framed:  "images/mockups/in-the-clear-framed.jpg",
      canvas:  "images/mockups/in-the-clear-canvas-wrap.jpg",
      metal:   "images/mockups/in-the-clear-metal.jpg",
        original: "images/originals/in-the-clear.jpg"
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
    number:          "No. 09",
    collection:      "horse-country",
    collectionLabel: "Horse Country",
    collectionPage:  "horse-country.html",
    title:           "High Desert Mustang",
    caption:         "The original American wild.",
    altText:         "Wild mustang watercolor print -- lone horse standing in golden high desert grass with snow-capped Utah mountains",
    description:     "The wild mustang is one of the most enduring symbols of the American West -- and one of its most complicated stories.  Descended from horses brought to the Americas by Spanish conquistadors in the 1500s, mustangs have roamed the open range for five centuries, as much a part of the western landscape as the mountains and the sage.  At their peak there were an estimated two million of them.  Fewer than 80,000 remain today, managed and monitored on the same Bureau of Land Management lands where this one was found.  Mustangs typically travel in family bands -- a dominant mare, her offspring, a stallion keeping watch at the edges.  This one was alone.  Standing in the golden high desert grass of rural Utah, the snow-capped mountains rising behind him, he offered no explanation for his solitude and required none.  Some stories are never told.  Rendered with a watercolor finish from an original photograph, this print captures a moment of accidental grace -- a lone mustang on the open range, exactly where he belongs, entirely on his own terms.",
    images: {
      main:    "images/horse-country/high-desert-mustang.jpg",
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

    "new-beginnings": {
    id:              "new-beginnings",
    number:          "No. 10",
    collection:      "horse-country",
    collectionLabel: "Horse Country",
    collectionPage:  "horse-country.html",
    title:           "New Beginnings",
    caption:         "Every season starts with something new.",
    altText:         "Mare and foal watercolor print -- chestnut foal standing close beside a dapple grey mare in a green Kentucky pasture at Woodstock Farm in Lexington, Kentucky",
    description:     "There is no more hopeful sight in horse country than a foal finding its place in the world.  This chestnut foal, nestled close to its grey mare at Woodstock Farm in Lexington, Kentucky, was photographed in the early weeks of life -- still discovering, still learning, still entirely dependent on the quiet strength standing beside it.  Thoroughbred foals are born knowing almost nothing and learn almost everything in the first hours and days -- how to stand, how to nurse, how to follow, how to trust.  The mare knows her job without being told.  She has positioned herself close, patient and unhurried, exactly as nature intended.  Woodstock Farm sits in the heart of the Bluegrass region, where the limestone-rich soil and rolling green pastures have produced some of the greatest racehorses in history.  The foal may race someday, may carry a name that ends up in a record book somewhere -- but in this moment none of that exists yet.  In this moment there is only a mare, a foal, and a green Kentucky spring that has all the time in the world.  Rendered with a watercolor finish from an original photograph, this print is for everyone who has ever witnessed a beginning and understood what a privilege that is.",
    images: {
      main:    "images/horse-country/new-beginnings.jpg",
      room:    "images/mockups/new-beginnings-room.jpg",
      framed:  "images/mockups/new-beginnings-framed.jpg",
      canvas:  "images/mockups/new-beginnings-canvas-wrap.jpg",
      metal:   "images/mockups/new-beginnings-metal.jpg",
      original: "images/originals/new-beginnings.jpg"
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
    
     // ── LANDSCAPES ────────────────────────────────────────────

    "ancient-falls": {
    id:              "ancient-falls",
    number:          "No. 01",
    collection:      "landscapes",
    collectionLabel: "Landscapes",
    collectionPage:  "landscapes.html",
    title:           "Ancient Falls",
    caption:         "The water found its way long before the path did.",
    altText:         "Hocking Hills waterfall watercolor print -- cascading waterfall over ancient Black Hand Sandstone into a mossy gorge in southeastern Ohio",
    description:     "Hocking Hills State Park sits in the sandstone hill country of southeastern Ohio, carved over thousands of years by water finding its way through Black Hand Sandstone -- a formation laid down roughly 320 million years ago when this part of North America lay beneath a shallow coastal sea.  What looks like a waterfall in a remote wilderness is less than two hours from Cincinnati, tucked into a gorge thick with hemlock and fern that stays cool and green even in the height of summer.  The waterfall feeds a plunge pool at the base, the mist from the falling water keeping the surrounding rock perpetually damp and the moss perpetually alive.  The hemlock trees that line this gorge are old growth, survivors of an era before logging reached this particular hollow -- some of them hundreds of years old, their roots finding purchase in the sandstone walls the same way water does, patiently and without hurry.  Rendered with a watercolor finish from an original photograph, this print captures one of Ohio's most extraordinary natural places -- ancient, quiet, and worth every mile of the drive.",
    images: {
      main:    "images/landscapes/ancient-falls.jpg",
      room:    "images/mockups/ancient-falls-room.jpg",
      framed:  "images/mockups/ancient-falls-framed.jpg",
      canvas:  "images/mockups/ancient-falls-canvas-wrap.jpg",
      metal:   "images/mockups/ancient-falls-metal.jpg",
      original: "images/originals/ancient-falls.jpg"
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
    
    "bluegrass-summer": {
    id:              "bluegrass-summer",
    number:          "No. 03",
    collection:      "landscapes",
    collectionLabel: "Landscapes",
    collectionPage:  "landscapes.html",
    title:           "Bluegrass Summer",
    caption:         "Not a state of mind.  An actual place that looks exactly like this.",
    altText:         "Kentucky bluegrass watercolor print -- rolling green pastures with white fence and still pond under a wide summer sky.",
    description:     "The Bluegrass Region of Kentucky is named for a grass that is not actually blue.  Kentucky bluegrass produces small bluish-purple buds in spring that give the fields a blue cast from a distance -- but what you see here, in the full green of a Kentucky summer, is what the region looks like for most of the year.  Rolling limestone-rich hills, ponds fed by springs, white fences threading between pastures, the particular deep green that comes from soil built up over millennia on a foundation of karst.  That limestone is the key to everything -- it filters the water, enriches the grass, and has made this region the center of American Thoroughbred breeding for over two centuries.  Roughly half of all active North American Thoroughbreds trace their Kentucky roots directly to the farms and fields of this landscape.  The white animal grazing in the middle distance is a small piece of a much larger story, one that has been unfolding on these hills since Daniel Boone first described this country as a second paradise.  Rendered with a watercolor finish from an original photograph, this print captures a Kentucky summer afternoon exactly as it looks when you pull over and give it your full attention.",
    images: {
      main:    "images/landscapes/bluegrass-summer.jpg",
      room:    "images/mockups/bluegrass-summer-room.jpg",
      framed:  "images/mockups/bluegrass-summer-framed.jpg",
      canvas:  "images/mockups/bluegrass-summer-canvas-wrap.jpg",
      metal:   "images/mockups/bluegrass-summer-metal.jpg",
      original: "images/originals/bluegrass-summer.jpg"
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
    number:          "No. 07",
    collection:      "landscapes",
    collectionLabel: "Landscapes",
    collectionPage:  "landscapes.html",
    title:           "Night Watch",
    caption:         "The deeper the dark, the brighter the beauty.",
    altText:         "Utah night sky watercolor print -- Milky Way and Pleiades over illuminated bare tree using light painting technique",
    description:     "For most of human history, this is what the night looked like.  The Pleiades -- the Seven Sisters -- visible on the right, recognized and named by virtually every culture on earth for thousands of years, used by Native American tribes throughout the West as a calendar, a compass, and a source of story.  The Milky Way visible to everyone, everywhere, every clear night.  That world is largely gone now -- light pollution has stolen the dark sky from more than eighty percent of the world's population, and most people alive today have never seen a night like this one.  Utah is one of the last places in the continental United States where it still exists.  It has more International Dark Sky Parks than any other state, and on a clear mountain night the stars still perform exactly as they have for ten thousand years.  This image was made in the mountains of Utah using light painting -- a long exposure technique that illuminates the foreground with hand-held light while the camera drinks in the sky above.  The bare tree glows against the darkness exactly as it did that night, reaching toward a sky that most of the world has forgotten how to see.  Rendered with a watercolor finish from an original photograph, this print is a reminder of what the night used to be -- and in a few rare places, still is.",
    images: {
      main:    "images/landscapes/night-watch.jpg",
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
    
    "blue-channels": {
    id:              "blue-channels",
    number:          "No. 02",
    collection:      "landscapes",
    collectionLabel: "Landscapes",
    collectionPage:  "landscapes.html",
    title:           "Blue Channels",
    caption:         "What the lake left behind.",
    altText:         "Bonneville Salt Flats watercolor print -- vivid blue brine channels on white salt crust with Utah mountains in the distance",
    description:     "What looks like another world is actually the ghost of one.  The Bonneville Salt Flats in Utah are what remains of ancient Lake Bonneville -- a prehistoric inland sea that covered much of Utah and parts of Nevada and Idaho, as large as Lake Michigan at its peak some 14,500 years ago.  When the lake receded it left behind a thick crust of salt and minerals so vast and so perfectly flat that the curvature of the earth is visible from ground level.  Those vivid blue channels are not rivers -- they are brine channels, water so saturated with dissolved salt that it reflects the sky in a color that seems almost impossible against the white crust surrounding it.  The mountains in the distance are the same ones that once rose above the shoreline of that ancient sea.  Rendered with a watercolor finish from an original photograph, this print captures a landscape that has been ten thousand years in the making -- still and vast and completely indifferent to the passage of time.",
    images: {
      main:    "images/landscapes/blue-channels.jpg",
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

    "quiet-shore": {
    id:              "quiet-shore",
    number:          "No. 05",
    collection:      "landscapes",
    collectionLabel: "Landscapes",
    collectionPage:  "landscapes.html",
    title:           "Quiet Shore",
    caption:         "Still water.  Deep history.",
    altText:         "Utah mountain reflection watercolor print -- Cedar Mountains reflected in still water with golden marsh grass",
    description:     "This is one of the quietest places in Utah -- and one of the most storied.  The still water in the foreground reflects the Cedar Mountains, a 45-mile range whose name is itself a small piece of history -- early pioneers who settled this country called the juniper trees cedars, and the name stuck long after the mistake was recognized.  The ghost town of Aragonite sits nearby, named for the mineral once mined from these hills, now uninhabited and almost entirely gone.  The road that runs through here is the Hastings Cutoff -- the same route the Donner Party followed in 1846 on their ill-fated journey west, their wagons becoming mired in the mud just below the salt crust a few miles from this very spot.  None of that history is visible in this image.  What remains is the water, the mountains, the golden marsh grass, and a silence so complete it is almost impossible to believe the stories buried beneath it.  Rendered with a watercolor finish from an original photograph, this print captures a landscape that has seen everything and gives nothing away.",
    images: {
      main:    "images/landscapes/quiet-shore.jpg",
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
    number:          "No. 06",
    collection:      "landscapes",
    collectionLabel: "Landscapes",
    collectionPage:  "landscapes.html",
    title:           "Red Rock Light",
    caption:         "The road doesn't need a name.  Neither does the feeling.",
    altText:         "Utah red rock road watercolor print -- BLM dirt road leading toward red and white sandstone cliffs with sagebrush",
    description:     "The road doesn't have a name.  It doesn't need one.  Bureau of Land Management roads like this one thread through millions of acres of public land across the American West -- unpaved, unmarked, and leading toward some of the most extraordinary geology on earth.  Those red and white cliffs are Entrada and Navajo Sandstone, laid down 150 to 200 million years ago when this part of Utah was a vast desert of shifting dunes.  The red comes from iron oxide -- rust, essentially -- that coated every grain of sand as it was deposited, layer by layer, era by era, until the earth compressed it all into the striped canyon walls you see today.  Each horizontal band is a different chapter of time, readable to anyone patient enough to look.  The sagebrush and juniper flanking the road have been here considerably less long -- only a few thousand years -- but they belong to this landscape as completely as the rock itself.  Rendered with a watercolor finish from an original photograph taken along a BLM road in rural Utah, this print captures the particular feeling of a road that goes somewhere worth going -- and the particular freedom of being the one driving it.",
    images: {
      main:    "images/landscapes/red-rock-light.jpg",
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
  },
    
    "lakeside-solitude": {
    id:              "lakeside-solitude",
    number:          "No. 04",
    collection:      "landscapes",
    collectionLabel: "Landscapes",
    collectionPage:  "landscapes.html",
    title:           "Lakeside Solitude",
    caption:         "The water knows how to keep a secret.",
    altText:         "Red canoe pond watercolor print -- red canoe resting at the shore of a still pond in Burlington Kentucky",
    description:     "Some photographs happen because you plan them.  Others happen because you finally pull over.  This pond sits along a narrow road in Burlington, Kentucky -- passed every day, admired every day, photographed on the one day patience finally ran out.  That red canoe rested at the shore in the full green of a Kentucky summer, perfectly still, perfectly placed, as if it had always known it was worth stopping for.  The scenery along any road changes with every passing day -- the light shifts, the seasons turn, the water rises and falls -- and most of it disappears without anyone ever stopping to notice.  Rendered with a watercolor finish from an original photograph, this print is a small reminder that the most beautiful things are often the ones you pass every day without stopping.  Until the day you do.",
    images: {
      main:    "images/landscapes/lakeside-solitude.jpg",
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
    
    "the-long-melt": {
    id:              "the-long-melt",
    number:          "No. 08",
    collection:      "landscapes",
    collectionLabel: "Landscapes",
    collectionPage:  "landscapes.html",
    title:           "The Long Melt",
    caption:         "Ten thousand years of patience, moving toward the sea.",
    altText:         "Kenai Fjords glacier watercolor print -- massive blue tidewater glacier flowing between rust-colored canyon walls toward calm water in Kenai Fjords National Park, Alaska",
    description:     "The glacier you are looking at has been moving toward the sea for thousands of years, and it has never once been in a hurry.  Tidewater glaciers like this one in Kenai Fjords National Park are rivers of ice -- born in the snowfields high above, compressed over centuries into something ancient and dense, moving downhill under their own impossible weight at a pace measured in feet per day.  That blue is not a trick of the light.  Glacial ice is so compressed that it absorbs every color in the spectrum except blue, which it reflects back in shades that have no equivalent anywhere else in the natural world.  The rust and gold of the canyon walls on either side are the exposed bedrock the glacier has been carving for millennia, scraping and reshaping the Alaskan coastline one slow inch at a time.  Kenai Fjords National Park holds over 40 glaciers, and every one of them is a record of time written in ice and stone.  Rendered with a watercolor finish from an original photograph taken from the water in Kenai Fjords, this print captures a landscape that has been becoming itself since long before anyone was there to see it.",
    images: {
      main:    "images/landscapes/the-long-melt.jpg",
      room:    "images/mockups/the-long-melt-room.jpg",
      framed:  "images/mockups/the-long-melt-framed.jpg",
      canvas:  "images/mockups/the-long-melt-canvas-wrap.jpg",
      metal:   "images/mockups/the-long-melt-metal.jpg",
        original: "images/originals/the-long-melt.jpg"
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
       
   "reflections-of-wonder": {
    id:              "reflections-of-wonder",
    number:          "No. 09",
    collection:      "landscapes",
    collectionLabel: "Landscapes",
    collectionPage:  "landscapes.html",
    title:           "Reflections of Wonder",
    caption:         "Some places are so large they can only be understood in the reflection.",
    altText:         "Denali watercolor print -- snow-capped Mount McKinley and Alaska Range reflected in the still water of Wonder Lake in Denali National Park, Alaska",
    description:     "The Athabascan people named this mountain Denali -- the great one -- and left it at that, which turns out to have been the right call.  At 20,310 feet, it is the highest peak in North America, and on a clear day in Denali National Park it dominates the horizon in a way that makes every other landscape feel like a rehearsal.  Wonder Lake sits at mile 85 of the Denali Park Road, shallow and glacier-fed, cold enough and quiet enough on calm mornings to produce a reflection this precise -- the mountain and the sky doubled, the clouds above and below the same clouds, the peaks above and below the same peaks.  There is no road noise here.  No crowds.  Just the water, the mountain, and the particular silence that only exists in places this far from everything else.  The park protects six million acres of wilderness around it, most of it roadless, most of it unchanged since the ice retreated twelve thousand years ago.  Rendered with a watercolor finish from an original photograph taken at Wonder Lake in Denali National Park, this print captures the moment when the mountain becomes its own mirror -- and the silence has a shape you can almost see.",
    images: {
      main:    "images/landscapes/reflections-of-wonder.jpg",
      room:    "images/mockups/reflections-of-wonder-room.jpg",
      framed:  "images/mockups/reflections-of-wonder-framed.jpg",
      canvas:  "images/mockups/reflections-of-wonder-canvas-wrap.jpg",
      metal:   "images/mockups/reflections-of-wonder-metal.jpg",
        original: "images/originals/reflections-of-wonder.jpg"
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
    "redbuds-in-bloom",
    "stargazer",
    "blue-flax",
    "hilo-gold",
    "kohala-fire",
    "lowcountry-red",
    "cloud-forest-crimson",
    "lavender-and-light"
  ],
    
  "wildlife": [
    "focused-intent",
    "pathfinder",
    "untamed-majesty",
    "firefox"
  ],
    
  "avian-studies": [ 
    "american-glory",
    "isis",
    "apollo",
    "night-shift",  
    "the-mantle",
    "crimson",
    "rose-and-rust", 
    "the-redbird",      
    "hidden-fire", 
    "sentinels-watch",
    "full-sail",
    "quiet-perch",
    "island-gold",
    "still-waters",
    "winter-vigil"
  ],
    
  "cincinnati": [
    "the-queens-crown",      
    "heart-of-the-city",
    "gateway-to-the-queen-city",
    "queen-city-overture",
    "the-grand-terminal",
    "market-day",
    "ault-park-ascent",
    "love-the-cov",
    "incline-to-the-mount",
    "dawns-early-light"
  ],
    
  "american-west": [
    "forgotten-miles",
    "crossroads",
    "homestead",
    "pasture-calm"
  ],
    "landscapes": [
    "ancient-falls",
    "blue-channels",
    "bluegrass-summer",
    "lakeside-solitude",
    "quiet-shore",   
    "red-rock-light",    
    "night-watch",
    "the-long-melt",
    "reflections-of-wonder"
  ],
    "horse-country": [
    "biko",
    "kindred",    
    "eye-to-eye",
    "the-lookout", 
    "three-wide",
    "the-win",
    "nose-to-nose",
    "in-the-clear",    
    "high-desert-mustang",
    "new-beginnings"
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
