// Studio, creative / brand case studies.
// Single source of truth for both the homepage Studio grid and the
// /studio/[slug] case-study pages. Adding a new brand is one new StudioProject
// entry below; no new components or routes required.

export type Swatch = { name: string; hex: string };

export type ImageRef = {
  src: string;
  alt: string;
  caption?: string;
  /** Intrinsic size for next/image. Defaults to 2000×1131 when omitted. */
  w?: number;
  h?: number;
};

/**
 * A case study is an ordered list of content blocks. The case-study page maps
 * over `blocks` and renders the matching component, so each brand can have its
 * own layout (text, full-bleed images, side-by-side pairs, palette, films)
 * purely from data.
 */
export type Block =
  | { type: "text"; eyebrow?: string; heading?: string; body: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | {
      type: "palette";
      eyebrow?: string;
      heading?: string;
      body?: string[];
      swatches: Swatch[];
    }
  | { type: "image"; image: ImageRef; full?: boolean }
  | { type: "imagePair"; items: ImageRef[] }
  | {
      type: "video";
      src: string;
      poster: string;
      mode: "ambient" | "cinematic";
      label?: string;
      eyebrow?: string;
      heading?: string;
      body?: string[];
    }
  | {
      // A row of portrait (9:16) films, e.g. social / Hyper Motion verticals.
      type: "videoRow";
      eyebrow?: string;
      heading?: string;
      body?: string[];
      items: { src: string; poster: string; label?: string }[];
    };

export type StudioProject = {
  slug: string;
  name: string;
  oneLine: string; // grid-card subtitle
  discipline: string; // e.g. "Brand identity · Art direction · Film"
  year: string;
  thumbnail: string; // grid-card image (poster / video fallback)
  /** Lead film shown autoplaying on the grid card so motion plays, not a still. */
  film?: { src: string; poster: string };
  hero: { title: string; tagline: string; image: string };
  /** Short lede shown under the hero, before the blocks. */
  intro: string;
  /** Per-case-study SEO / social metadata. */
  meta: {
    description: string;
    /** Absolute URL of the 1200px social card. */
    ogImage: string;
    /** Height of that card (width is always 1200). */
    ogHeight: number;
  };
  blocks: Block[];
};

const SITE = "https://www.paulstanley.dev";

const sillage: StudioProject = {
  slug: "sillage",
  name: "Sillage",
  oneLine: "A luxury fragrance house, built end to end with AI.",
  discipline: "Brand identity · Art direction · Film",
  year: "2026",
  thumbnail: "/sillage/poster.webp",
  film: { src: "/sillage/film-cinematic.mp4", poster: "/sillage/poster.webp" },
  hero: {
    title: "SILLAGE",
    tagline: "Essence invisible, ever remembered.",
    image: "/sillage/poster.webp",
  },
  intro:
    "A complete luxury perfume house, built from a blank page to a finished campaign. Run the way an agency would, naming and positioning first, then verbal and visual identity, then the product, then the campaign and the films. One operator, full pipeline, start to finish.",
  meta: {
    description:
      "Sillage. A self-directed luxury fragrance house built end to end with AI. Naming, positioning, verbal and visual identity, product, campaign, and two films.",
    ogImage: `${SITE}/sillage/og-poster.jpg`,
    ogHeight: 679,
  },
  blocks: [
    {
      type: "text",
      eyebrow: "Overview",
      heading: "One operator, full pipeline",
      body: [
        "Sillage is a self-directed brand project: a complete luxury perfume house built from a blank page to a finished campaign. I ran it the way an agency would, naming and positioning first, then verbal and visual identity, then the product, then the campaign and the films.",
        "Every decision is documented here so you can see the thinking, not just the output.",
      ],
    },
    {
      type: "text",
      eyebrow: "The idea",
      heading: "You are remembered by what you leave behind",
      body: [
        "The word sillage is a perfumery term. It means the trail of scent a person leaves behind them as they move through a room, the thing you notice a moment after they have gone.",
        "I built the whole brand on that single idea. Not the loudest scent in the room, the one that lingers after you. The name says what the product does without explaining anything, and it gave me a concept that runs through every asset: the trail.",
      ],
    },
    {
      type: "text",
      eyebrow: "Positioning",
      heading: "Quiet, on purpose",
      body: [
        "Sillage sits in modern niche luxury, the fastest-growing tier of the fragrance market, the same register as the houses people who care about scent already follow, but with its own philosophy.",
        "It is genderless on purpose. The idea of a trail and a memory belongs to no one gender.",
        "The tension it owns: almost all fragrance marketing shouts, with fame and seduction. Sillage does the opposite. Restraint, after-image, quiet projection. The luxury of being remembered without trying.",
      ],
    },
    {
      type: "quote",
      text: "Essence invisible, ever remembered.",
      attribution: "Sillage Parfums",
    },
    {
      type: "text",
      eyebrow: "Verbal identity",
      heading: "The brand speaks the way the scent behaves",
      body: [
        "Descriptor, SILLAGE PARFUMS. Tagline, Essence invisible, ever remembered.",
        "Voice: quiet, precise, certain. Short lines. Nothing oversold.",
      ],
    },
    {
      type: "palette",
      eyebrow: "Visual identity",
      heading: "A three-part mark, one trail",
      body: [
        "A three-part mark system, tied together by the trail motif: a tall high-contrast serif wordmark, an abstract scent-trail symbol built from fine lines that fade into the air, and a single-S monogram inside a thin circle for caps, foils and avatars.",
        "Type is Playfair Display for display and Montserrat Light for body. The palette is roughly ninety percent neutral with two small warm accents, because restraint is the luxury.",
      ],
      swatches: [
        { name: "Bone", hex: "#F0E9DD" },
        { name: "Charcoal", hex: "#1A1714" },
        { name: "Smoke Grey", hex: "#6B6A66" },
        { name: "Amber", hex: "#B16A2B" },
        { name: "Antique Gold", hex: "#A98B4F" },
      ],
    },
    {
      type: "imagePair",
      items: [
        {
          src: "/sillage/logo-symbol.webp",
          alt: "Sillage logo and scent-trail symbol, tall serif wordmark with the abstract trail mark.",
        },
        {
          src: "/sillage/brand-kit.webp",
          alt: "Sillage brand kit, wordmark, monogram, palette and type system on one sheet.",
        },
      ],
    },
    {
      type: "text",
      eyebrow: "The product",
      heading: "One hero, not a range",
      body: [
        "I made one product, not a range. A single hero is harder to get right than a lineup, and it forces the brand idea to land cleanly. It is also how the best niche houses actually launch.",
        "Heavy smoked-grey glass with a weighted base, a warm amber extrait glowing inside, a brushed gunmetal cap engraved with the S, and one thin gold hairline as the only warm accent. A fine engraved line wraps the glass as a quiet nod to the trail.",
      ],
    },
    {
      type: "image",
      full: true,
      image: {
        src: "/sillage/product.webp",
        alt: "The Sillage master bottle, smoked grey glass, amber extrait, brushed gunmetal cap engraved with an S.",
        caption: "The master bottle. Raw amber resin and smoked wood in frame, telling the scent story as objects.",
      },
    },
    {
      type: "text",
      eyebrow: "The campaign",
      heading: "A figure out of time",
      body: [
        "For the key visual I cast a figure out of time, a woman in a timeless gown, shot in painterly Old-Master light, dark and still. It reads as exactly what the brand is about: someone you remember long after they have gone.",
        "I pulled the styling into our palette rather than a literal period look, so the romance stays but the brand stays modern. The bottle sits in the warm light beside her, the wordmark runs as a masthead, the marks sit quiet in the corner.",
      ],
    },
    {
      type: "image",
      full: true,
      image: {
        src: "/sillage/location.webp",
        alt: "Sillage campaign environment, warm, painterly light with the styling pulled into the brand palette.",
        caption: "The world, styled into the palette. Romance kept, brand kept modern.",
      },
    },
    {
      type: "video",
      eyebrow: "The films",
      heading: "She walks into it",
      src: "/sillage/film-cinematic.mp4",
      poster: "/sillage/poster.webp",
      mode: "ambient",
      label: "Cinematic cut · 10s",
      body: [
        "I made two films, deliberately opposite, to show the brand holds across registers.",
        "The film is a slow, emotional cinematic cut in a bright sunlit studio, the inverse of the dark poster. She lifts the bottle, sprays once into the air, and steps into the cloud, letting the scent settle and rise into a golden trail that lingers where she stood. A woman walking into her own sillage.",
      ],
    },
    {
      type: "video",
      heading: "The kinetic cut",
      src: "/sillage/film-kinetic.mp4",
      poster: "/sillage/product.webp",
      mode: "ambient",
      label: "Kinetic cut · 8s",
      body: [
        "A fast, vibrant counterpoint. The bottle alone in a chrome and mirror world, hard light fracturing into reflections, quick whip-pans and rapid cuts. Pure product energy.",
      ],
    },
    {
      type: "text",
      eyebrow: "Tools & process",
      heading: "How it stayed one brand",
      body: [
        "Built through Higgsfield. GPT Image 2 for anything with text, since it renders type cleanly. Nano Banana for product and people, since it holds a reference faithfully. References fed in at every step so the bottle, the marks and the face stayed consistent across the whole set. Hyper Motion for the films.",
        "The discipline that made it cohere: lock each asset before moving on, carry the locked pieces forward as references, and keep the palette tight. That is why a dark editorial poster and a bright commercial film read as one brand and not two.",
      ],
    },
    {
      type: "text",
      eyebrow: "What's next",
      heading: "The remaining mile",
      body: [
        "This is concept work, self-directed, so the next step is taking it to full production finish: real typeset layouts in the actual fonts, a live one-page site, and the film cut with sound design. The thinking and the world are done. The polish is the remaining mile.",
      ],
    },
    {
      type: "quote",
      text: "Sillage. Built solo, end to end, with AI.",
    },
  ],
};

const biom: StudioProject = {
  slug: "biom",
  name: "BIOM",
  oneLine: "A luxury prebiotic soda, built end to end with AI.",
  discipline: "Brand identity · Art direction · Packaging · Film",
  year: "2026",
  thumbnail: "/biom/poster.webp",
  film: { src: "/biom/film-hero.mp4", poster: "/biom/poster.webp" },
  hero: {
    title: "BIOM",
    tagline: "Feel it work.",
    image: "/biom/poster.webp",
  },
  intro:
    "A luxury prebiotic soda, built from a blank page to a locked campaign. Naming and positioning first, then verbal and visual identity, then the product and the campaign. One operator, full pipeline.",
  meta: {
    description:
      "BIOM. A self-directed luxury prebiotic soda built end to end with AI. Naming, positioning, identity, packaging, campaign and motion in a chrome-and-blood-orange world.",
    ogImage: `${SITE}/biom/og-poster.jpg`,
    ogHeight: 679,
  },
  blocks: [
    {
      type: "text",
      eyebrow: "Overview",
      heading: "One operator, full pipeline",
      body: [
        "BIOM is a self-directed brand project: a luxury prebiotic soda built from a blank page to a locked campaign. I ran it the way an agency would, naming and positioning first, then verbal and visual identity, then the product and the campaign.",
      ],
    },
    {
      type: "text",
      eyebrow: "The idea",
      heading: "The opposite of the pharmacy",
      body: [
        "Functional drinks almost always look like the pharmacy: clinical, busy, shouting their benefits. I wanted the opposite. BIOM is a prebiotic soda treated as a luxury design object, wellness you can actually feel, with the polish of a premium product rather than a supplement.",
        "The promise is in two words. Feel it work.",
      ],
    },
    {
      type: "quote",
      text: "Feel it work.",
      attribution: "BIOM",
    },
    {
      type: "text",
      eyebrow: "Positioning",
      heading: "Luxury functional soda",
      body: [
        "BIOM sits between wellness and premium beverage, design-led and quietly confident, deliberately away from the health-aisle look.",
        "It is for someone who buys good things and expects the function to come without the clinical packaging.",
      ],
    },
    {
      type: "text",
      eyebrow: "Verbal identity",
      heading: "States what it does, trusts you to get it",
      body: [
        "Tagline, Feel it work.",
        "Voice: confident, modern and precise. Clean lines, a little technical, never preachy about health.",
      ],
    },
    {
      type: "palette",
      eyebrow: "Visual identity",
      heading: "Chrome and blood orange",
      body: [
        "A sharp, slightly futuristic system. Chrome and blood orange against warm cream give it the feel of a premium object, modern and a touch clinical, in the best way.",
        "Type pairs an italic Didone display with a clean grotesk for body and a monospaced face for the technical detail layer. Blood Orange is the hero across every campaign asset, the single colour that makes the whole system snap.",
      ],
      swatches: [
        { name: "Warm Cream", hex: "#FCF6F0" },
        { name: "Charcoal Ink", hex: "#1D1D1B" },
        { name: "Chrome Silver", hex: "#C0C0C0" },
        { name: "Blood Orange", hex: "#9E2B1A" },
      ],
    },
    {
      type: "imagePair",
      items: [
        {
          src: "/biom/logo-symbol.webp",
          alt: "BIOM logo and orbital symbol, italic Didone wordmark with the abstract orbital mark and B monogram.",
        },
        {
          src: "/biom/brand-board.webp",
          alt: "BIOM brand board, wordmark, marks, packaging, palette and type system on one sheet.",
        },
      ],
    },
    {
      type: "text",
      eyebrow: "The product",
      heading: "The can",
      body: [
        "Blood Orange is the hero flavour, the chrome and warm cream carrying the premium feel while the orange does the work. Designed to look like something you would leave out on the counter, not hide in a cupboard.",
      ],
    },
    {
      type: "image",
      full: true,
      image: {
        src: "/biom/product.webp",
        alt: "The BIOM can and bottle, Blood Orange, chrome and charcoal against a dark surface.",
        caption: "The master can, with the bottle format alongside, the orange doing the work.",
      },
    },
    {
      type: "text",
      eyebrow: "The campaign",
      heading: "Holds at a distance, and up close",
      body: [
        "A campaign poster and a wide out-of-home billboard, both built on the chrome-and-blood-orange world. Bold, clean and product-led, the kind of work that holds at a distance on a billboard and up close on a phone.",
      ],
    },
    {
      type: "image",
      full: true,
      image: {
        src: "/biom/ooh.webp",
        alt: "BIOM out-of-home billboard in the chrome-and-blood-orange world.",
      },
    },
    {
      type: "image",
      full: true,
      image: {
        src: "/biom/location.webp",
        alt: "BIOM brand environment, a chrome ring of blood-orange light in a still, architectural space.",
        caption: "The world the brand lives in, still, architectural, lit in blood orange.",
      },
    },
    {
      type: "video",
      eyebrow: "The films",
      heading: "Bringing the can to life",
      src: "/biom/film-hero.mp4",
      poster: "/biom/poster.webp",
      mode: "ambient",
      label: "Hero film",
      body: [
        "Two films in the same chrome-and-blood-orange language, bringing the can to life.",
      ],
    },
    {
      type: "video",
      heading: "The kinetic cut",
      src: "/biom/film-kinetic.mp4",
      poster: "/biom/product.webp",
      mode: "ambient",
      label: "Kinetic cut",
      body: [
        "A fast, product-led counterpoint, hard light, chrome, and the single hit of blood orange.",
      ],
    },
    {
      type: "text",
      eyebrow: "Tools & process",
      heading: "One brand across the whole stack",
      body: [
        "Built through Higgsfield. GPT Image 2 for the text-heavy assets, since it renders type cleanly, and Nano Banana for the can renders and image-to-image consistency. References fed in at every step so the can, the marks and the colour stayed exact across the logo, the master can, the brand board, the poster and the billboard.",
        "Lock each asset before moving on, keep the palette tight, and the whole stack reads as one brand.",
      ],
    },
    {
      type: "quote",
      text: "BIOM. Built solo, end to end, with AI.",
    },
  ],
};

const kera: StudioProject = {
  slug: "kera",
  name: "Kera",
  oneLine: "Men's skincare, without the guesswork.",
  discipline: "Brand identity · Art direction · Packaging · Film",
  year: "2026",
  thumbnail: "/kera/poster.webp",
  film: { src: "/kera/film-spf.mp4", poster: "/kera/poster.webp" },
  hero: {
    title: "KERA",
    tagline: "Good skin, no guesswork.",
    image: "/kera/poster.webp",
  },
  intro:
    "A self-directed men's skincare brand, built from a blank page to a full campaign. The whole pipeline run by one operator: naming and positioning, verbal and visual identity, the product system, the campaign, and the films.",
  meta: {
    description:
      "Kera. A self-directed men's skincare brand built end to end with AI. Naming, positioning, identity, a three-piece product system, campaign, and three films.",
    ogImage: `${SITE}/kera/og-poster.jpg`,
    ogHeight: 679,
  },
  blocks: [
    {
      type: "text",
      eyebrow: "Overview",
      heading: "One operator, start to finish",
      body: [
        "Kera is a self-directed men's skincare brand, built from a blank page to a full campaign. I ran the whole pipeline: naming and positioning, verbal and visual identity, the product system, the campaign, and the films.",
      ],
    },
    {
      type: "text",
      eyebrow: "The idea",
      heading: "Good skin, no guesswork",
      body: [
        "Most men want better skin and zero homework. The category answers that with either clinical drugstore packaging or overwrought luxury-grooming theatre, and both leave a guy guessing what to actually buy and in what order.",
        "I built Kera on the opposite promise: good skin, no guesswork. A short, honest system that tells you exactly what to use, with nothing to decode.",
      ],
    },
    {
      type: "quote",
      text: "Good skin, no guesswork.",
      attribution: "Kera",
    },
    {
      type: "text",
      eyebrow: "Positioning",
      heading: "Approachable premium",
      body: [
        "Kera sits above the drugstore but below the intimidating luxury shelf. Function first, plainly spoken, confident without shouting.",
        "It is made for the man who wants results and a routine he can actually keep.",
      ],
    },
    {
      type: "text",
      eyebrow: "Verbal identity",
      heading: "Talks like a straight-talking friend",
      body: [
        "Tagline, Good skin, no guesswork.",
        "Voice: plain, direct, certain. No jargon, no miracle claims, no fluff. It talks the way a straight-talking friend would, the one who actually knows what works.",
      ],
    },
    {
      type: "palette",
      eyebrow: "Visual identity",
      heading: "Warm and clean, the opposite of clinical",
      body: [
        "The palette stays in soft natural neutrals so the products feel calm and premium. A clean wordmark and a tight, legible type system carry the honesty of the brand. Nothing decorative that the message does not need.",
        "Type pairs a warm contrast serif for headings with a clean grotesk for body.",
      ],
      swatches: [
        { name: "Cream", hex: "#F5F1E9" },
        { name: "Sand", hex: "#CBB593" },
        { name: "Stone", hex: "#9A9389" },
        { name: "Ink", hex: "#1A1815" },
      ],
    },
    {
      type: "imagePair",
      items: [
        {
          src: "/kera/logo.webp",
          alt: "Kera wordmark and K monogram, a clean contrast serif with a tight, legible mark.",
          w: 2000,
          h: 1116,
        },
        {
          src: "/kera/brand-board.webp",
          alt: "Kera brand board, wordmark, monogram, palette and type system on one sheet.",
        },
      ],
    },
    {
      type: "text",
      eyebrow: "The product",
      heading: "Three things that actually matter",
      body: [
        "A focused three-piece system: cleanser, moisturiser and SPF. Not a wall of products, the three things that actually matter, in the order you use them.",
        "The kit is the brand idea made physical. No guesswork about where to start or what comes next.",
      ],
    },
    {
      type: "image",
      full: true,
      image: {
        src: "/kera/product-set.webp",
        alt: "The Kera three-piece kit, cleanser, moisturiser and SPF, on warm travertine stone.",
        caption: "The three-piece kit: cleanser, moisturiser and SPF, in the order you use them.",
      },
    },
    {
      type: "text",
      eyebrow: "The campaign",
      heading: "Quiet confidence, not a hard sell",
      body: [
        "A cinematic hero poster and a wide out-of-home billboard, built on the same calm, warm world. The products lead, the copy stays short, and the whole thing reads as quiet confidence rather than a hard sell.",
      ],
    },
    {
      type: "image",
      full: true,
      image: {
        src: "/kera/ooh.webp",
        alt: "Kera out-of-home billboard in the calm, warm brand world.",
      },
    },
    {
      type: "videoRow",
      eyebrow: "The films",
      heading: "Three films, two opposite moods",
      body: [
        "A UGC-style cleanser spot, the honest, in-hand register that men's grooming actually sells in. Then two product-hero Hyper Motion commercials: the moisturiser in a dark moody studio, and the SPF in bright, sun-drenched light. Same brand, two opposite moods, to prove it holds either way.",
      ],
      items: [
        {
          src: "/kera/film-cleanser.mp4",
          poster: "/kera/film-cleanser-poster.webp",
          label: "Cleanser · UGC",
        },
        {
          src: "/kera/film-moisturiser.mp4",
          poster: "/kera/film-moisturiser-poster.webp",
          label: "Moisturiser · Dark studio",
        },
        {
          src: "/kera/film-spf.mp4",
          poster: "/kera/film-spf-poster.webp",
          label: "SPF · Bright light",
        },
      ],
    },
    {
      type: "text",
      eyebrow: "Tools & process",
      heading: "One brand across the whole set",
      body: [
        "Built through Higgsfield. GPT Image 2 for anything with text, Nano Banana for product renders and image-to-image consistency, Marketing Studio for the UGC spot, and Hyper Motion for the product films. References carried forward at every step so the bottles, the kit and the marks stayed identical across the set.",
        "Lock each asset before moving on, keep the palette tight, and a warm poster and a dark studio film still read as one brand.",
      ],
    },
    {
      type: "quote",
      text: "Kera. Built solo, end to end, with AI.",
    },
  ],
};

const forma: StudioProject = {
  slug: "forma",
  name: "FORMA",
  oneLine: "Quiet-luxury minimal sneakers, built end to end with AI.",
  discipline: "Brand identity · Art direction · Packaging · Film",
  year: "2026",
  thumbnail: "/forma/poster.webp",
  film: { src: "/forma/film-hyper.mp4", poster: "/forma/poster.webp" },
  hero: {
    title: "FORMA",
    tagline: "Form. Nothing else.",
    image: "/forma/poster.webp",
  },
  intro:
    "A self-directed quiet-luxury sneaker brand, built from a blank page to a full campaign. One operator, the whole pipeline: naming and positioning, verbal and visual identity, the product, the packaging, and the films.",
  meta: {
    description:
      "FORMA. A self-directed quiet-luxury minimal sneaker brand built end to end with AI. Naming, positioning, a monochrome identity, a leather high-top, rigid-box packaging, campaign, and films.",
    ogImage: `${SITE}/forma/og-poster.jpg`,
    ogHeight: 679,
  },
  blocks: [
    {
      type: "text",
      eyebrow: "Overview",
      heading: "One operator, start to finish",
      body: [
        "FORMA is a self-directed brand project: a quiet-luxury minimal sneaker house built from a blank page to a full campaign. I ran the whole pipeline, naming and positioning first, then verbal and visual identity, then the product, the packaging, and the films.",
      ],
    },
    {
      type: "text",
      eyebrow: "The idea",
      heading: "Form over noise",
      body: [
        "Most sneaker branding shouts, with logos, hype and colour. FORMA does the opposite. The name is Italian for form, and the whole brand is built on one belief: clarity is the luxury. Strip away everything that isn't the shape, and what's left is the statement.",
        "It is made for people who already own good things and don't need them to announce it, design-conscious creatives, architects, quiet-money minimalists.",
      ],
    },
    {
      type: "quote",
      text: "Form. Nothing else.",
      attribution: "FORMA",
    },
    {
      type: "text",
      eyebrow: "Positioning",
      heading: "Attainable premium, quietly",
      body: [
        "FORMA sits in attainable premium, the register of considered design rather than logo-driven hype. Calm, confident, precise, understated and timeless.",
        "The manifesto says it plainly: we believe in clarity, in purpose, in the strength of simplicity. Every stitch, every line, every detail, designed to be worn and built to last.",
      ],
    },
    {
      type: "palette",
      eyebrow: "Visual identity",
      heading: "Monochrome, on purpose",
      body: [
        "Two values, nothing more: ink black and a warm off-white, used straight or reversed. The hero mark is a sharp, angular geometric F emblem, paired with a clean geometric FORMA wordmark set in wide letter-spacing. The restraint is the brand.",
      ],
      swatches: [
        { name: "Ink", hex: "#0B0B0B" },
        { name: "Off-White", hex: "#EDE9E3" },
      ],
    },
    {
      type: "image",
      full: true,
      image: {
        src: "/forma/logo.webp",
        alt: "FORMA logo system, the angular F emblem with the wide-tracked FORMA wordmark in black and reversed white.",
        caption:
          "The mark system: an angular F emblem and a geometric wordmark, in black-on-white and reversed.",
      },
    },
    {
      type: "text",
      eyebrow: "The product",
      heading: "One silhouette, done right",
      body: [
        "A single hero: a clean white leather high-top with a padded collar, a rounded toe and a white rubber cupsole. A single bold black F emblem sits on the lateral side panel; everything else is left quiet.",
        "One silhouette is harder to get right than a range, and it forces the idea to land. Future colourways stay just as restrained, graphite and black.",
      ],
    },
    {
      type: "imagePair",
      items: [
        {
          src: "/forma/product.webp",
          alt: "The FORMA high-top, white leather with a single black F emblem on the side panel.",
        },
        {
          src: "/forma/product-sheet.webp",
          alt: "FORMA high-top multi-angle sheet, the silhouette shown from every side.",
        },
      ],
    },
    {
      type: "text",
      eyebrow: "Packaging",
      heading: "The unboxing is the brand",
      body: [
        "A heavyweight rigid box with a magnetic flip lid, matte black and soft-touch, with a blind-debossed F emblem and the white FORMA wordmark. Inside: tonal-F tissue, a custom insert, an off-white cotton dust bag, and the manifesto printed on the flap.",
        "The reveal experience was studied from the best presentation boxes, then stripped of the chrome and sport, keeping only the calm.",
      ],
    },
    {
      type: "imagePair",
      items: [
        {
          src: "/forma/box-closed.webp",
          alt: "The FORMA box closed, matte black with a blind-debossed F emblem and white wordmark.",
        },
        {
          src: "/forma/box-open.webp",
          alt: "The FORMA box open, the pair seated in tonal-F tissue with the dust bag.",
        },
      ],
    },
    {
      type: "text",
      eyebrow: "The campaign",
      heading: "Form in the world",
      body: [
        "The campaign keeps the same restraint: the F emblem top-left, a model with a matte-black car and FORMA signage, and one line of copy, FORM. NOTHING ELSE. Quiet confidence, not a hard sell.",
      ],
    },
    {
      type: "image",
      image: {
        src: "/forma/location.webp",
        alt: "FORMA brand environment, a sunlit concrete lot, calm and architectural.",
        caption:
          "The world FORMA lives in: sunlit concrete, still and architectural.",
        w: 1400,
        h: 1867,
      },
    },
    {
      type: "video",
      eyebrow: "The films",
      heading: "The hero spin",
      src: "/forma/film-hyper.mp4",
      poster: "/forma/film-hyper-poster.webp",
      mode: "ambient",
      label: "Hypermotion · Studio void",
      body: [
        "A slow Hypermotion turn on a pedestal in a studio void, the shoe alone, lit to read every line. Pure product, no noise.",
      ],
    },
    {
      type: "videoRow",
      heading: "Social cuts",
      body: [
        "The vertical, social-native register: a UGC unboxing that walks through the box and the build, a styling cut, and a fast kinetic vertical. Same brand, made for the feed.",
      ],
      items: [
        {
          src: "/forma/film-ugc-unboxing.mp4",
          poster: "/forma/film-ugc-unboxing-poster.webp",
          label: "UGC · Unboxing",
        },
        {
          src: "/forma/film-ugc-styling.mp4",
          poster: "/forma/film-ugc-styling-poster.webp",
          label: "UGC · Styling",
        },
        {
          src: "/forma/film-kinetic-vertical.mp4",
          poster: "/forma/film-kinetic-vertical-poster.webp",
          label: "Kinetic · Vertical",
        },
      ],
    },
    {
      type: "video",
      heading: "Kinetic counterpoint",
      src: "/forma/film-kinetic.mp4",
      poster: "/forma/film-kinetic-poster.webp",
      mode: "ambient",
      label: "Kinetic cut",
      body: [
        "A fast, hard-cut counterpoint to the slow hero spin, the same monochrome world with more energy.",
      ],
    },
    {
      type: "text",
      eyebrow: "Tools & process",
      heading: "One brand across the whole set",
      body: [
        "Built through Higgsfield. GPT Image 2 and Nano Banana Pro for the shoe, the logo, the packaging and the posters, with references carried forward at every step so the silhouette, the F emblem and the monochrome palette stayed identical across the set. Marketing Studio for the UGC, and image-to-video (Seedance and Kling) for the Hypermotion and kinetic films.",
        "Lock each asset before moving on, keep the palette to two values, and the whole stack reads as one brand.",
      ],
    },
    {
      type: "quote",
      text: "FORMA. Built solo, end to end, with AI.",
    },
  ],
};

const pepsi: StudioProject = {
  slug: "pepsi",
  name: "Pepsi",
  oneLine: "A neon anime spec commercial for Pepsi, art-directed and built with AI.",
  discipline: "Art direction · Storyboarding · AI film",
  year: "2026",
  thumbnail: "/pepsi/poster.webp",
  film: { src: "/pepsi/film-main.mp4", poster: "/pepsi/poster.webp" },
  hero: {
    title: "PEPSI",
    tagline: "Thirsty for more.",
    image: "/pepsi/poster.webp",
  },
  intro:
    "A self-directed spec commercial: an anime club spot for Pepsi's Thirsty For More, taken from a hand-drawn nine-panel storyboard to a finished fifteen-second film. No brand to build here, this one is pure art direction and AI filmmaking, the same pipeline pointed at a completely different visual language.",
  meta: {
    description:
      "Pepsi, Thirsty For More. A self-directed anime spec commercial built with AI. A hand-drawn storyboard, character and product references, and a fifteen-second cel-shaded film in a neon club world.",
    ogImage: `${SITE}/pepsi/og-poster.jpg`,
    ogHeight: 675,
  },
  blocks: [
    {
      type: "text",
      eyebrow: "Overview",
      heading: "A spec film, built solo with AI",
      body: [
        "Pepsi, Thirsty For More is a self-directed spec commercial, an anime club spot for an existing brand rather than a brand I built from scratch. It's a deliberate departure from the photoreal work: no naming, no packaging, no product to design. Just art direction and filmmaking, taking a hand-drawn storyboard all the way to a finished fifteen-second cut.",
        "The point was range. Same pipeline, pointed at a completely different visual language, to prove it holds outside the polished-product world.",
      ],
    },
    {
      type: "text",
      eyebrow: "The idea",
      heading: "Thirsty For More",
      body: [
        "A neon-soaked anime club, cut to a bass drop. Energy, movement, refresh, the can as the hero of a world that feels like a music video rather than a soda ad.",
        "The whole thing lives in a bold 2D cel-shade style, a hard left turn from the realism, chosen precisely because it's the harder thing to keep consistent across a moving shot.",
      ],
    },
    {
      type: "quote",
      text: "Thirsty for more.",
      attribution: "Pepsi",
    },
    {
      type: "video",
      eyebrow: "The film",
      heading: "Fifteen seconds, eight beats",
      src: "/pepsi/film-main.mp4",
      poster: "/pepsi/film-poster.webp",
      mode: "cinematic",
      label: "Spec spot · 15s · anime cel-shade",
      body: [
        "The globe logo rockets through a neon light tunnel and bursts into the club; a crash-zoom carries through the crowd to the hero; he cracks the can with the spray catching the light; hard cut to the cap girl drinking, head back; a b-boy freezes mid-air as the dance-off trades moves; the hero turns the can straight to the lens with a grin; snap to the end-card.",
        "Painterly cinematic wides alternate with crisp cel close-ups, the hybrid the brief was after. Play it with sound.",
      ],
    },
    {
      type: "text",
      eyebrow: "Art direction",
      heading: "The look",
      body: [
        "One style lock, carried into every frame: bold clean lineart, cel shading with hard neon rim light, deep navy-black club darkness cut by electric pink, cyan and Pepsi-blue beams, and high-contrast speed lines on every move.",
        "Reference-driven, so the look never drifts from shot to shot.",
      ],
    },
    {
      type: "palette",
      eyebrow: "Art direction",
      heading: "Neon club",
      body: [
        "The whole film lives in four or five values, navy-black darkness, Pepsi blue, and two hits of electric neon. Restraint in the palette is what lets the speed lines and the rim light read as energy instead of noise.",
      ],
      swatches: [
        { name: "Club Black", hex: "#0A0E1A" },
        { name: "Pepsi Blue", hex: "#0A4EA2" },
        { name: "Cobalt", hex: "#2A57D6" },
        { name: "Cyan", hex: "#21E6FF" },
        { name: "Electric Pink", hex: "#FF2E97" },
      ],
    },
    {
      type: "text",
      eyebrow: "From storyboard",
      heading: "Nine panels, hand-drawn",
      body: [
        "It started as a nine-panel anime storyboard: the logo through a tunnel, the title over the crowd, the hero with the can, the b-boy freeze, the cap girl drinking, the dance-off, the can to camera, the end-card.",
        "That sheet was the style anchor and the shot list in one, the single thing every later asset was measured against.",
      ],
    },
    {
      type: "image",
      image: {
        src: "/pepsi/storyboard.webp",
        alt: "The original hand-drawn nine-panel anime storyboard for the Pepsi spot, neon club scenes in a vertical grid.",
        caption: "The original nine-panel storyboard, style anchor and shot list in one.",
        w: 352,
        h: 545,
      },
    },
    {
      type: "text",
      eyebrow: "Reference pipeline",
      heading: "How it stayed one film",
      body: [
        "Everything ran reference-first. A hero character sheet and a dancer-girl sheet locked identity across every beat; a twelve-view can turnaround kept the product on-model; then a single five-beat reference board, can, bottle, both characters, the club and the style in one frame, drove the video generation.",
        "The branding travels through the references, never the prompts. In text the product is only ever \"a navy-blue cola can with a red-white-and-blue sphere emblem\", which keeps the generator's IP filter happy while the real brand stays exact in the image.",
      ],
    },
    {
      type: "imagePair",
      items: [
        {
          src: "/pepsi/char-hero.webp",
          alt: "Hero character sheet, an anime young man in a navy bomber jacket, turnaround with expression grid and detail crops.",
          w: 2400,
          h: 1792,
        },
        {
          src: "/pepsi/char-dancer.webp",
          alt: "Dancer-girl character sheet, navy hoodie and cap, turnaround with expression grid and detail crops.",
          w: 2400,
          h: 1792,
        },
      ],
    },
    {
      type: "image",
      full: true,
      image: {
        src: "/pepsi/reference-board.webp",
        alt: "The five-beat master reference board, globe burst, club wide, girl drinking, hero with the can, and the can-and-bottle end lockup.",
        caption:
          "The five-beat master reference, one frame carrying can, bottle, both characters, the club and the style. This is the single image that drove the film.",
        w: 2400,
        h: 1792,
      },
    },
    {
      type: "image",
      full: true,
      image: {
        src: "/pepsi/can-neon.webp",
        alt: "The Pepsi can in a neon light burst with a liquid orbit swirling around it.",
        caption: "The can, styled into the world.",
        w: 2400,
        h: 1792,
      },
    },
    {
      type: "text",
      eyebrow: "Key frames",
      heading: "The moments it turns on",
      body: ["The best beats, pulled from the cut as stills."],
    },
    {
      type: "imagePair",
      items: [
        {
          src: "/pepsi/frame-tunnel.webp",
          alt: "The hero as a small silhouette at the end of a graffiti-lined neon light tunnel, motion blur streaking past.",
          w: 1920,
          h: 1080,
        },
        {
          src: "/pepsi/frame-dance.webp",
          alt: "A b-boy breaking in the centre of the circle, crowd around, Pepsi screens glowing on the club wall.",
          w: 1920,
          h: 1080,
        },
      ],
    },
    {
      type: "imagePair",
      items: [
        {
          src: "/pepsi/frame-drink.webp",
          alt: "The cap girl tilting a Pepsi bottle to drink under crossing pink and cyan laser beams.",
          w: 1920,
          h: 1080,
        },
        {
          src: "/pepsi/frame-endcard.webp",
          alt: "The end-card, a condensation-beaded Pepsi can framed by glowing neon diamonds.",
          w: 1920,
          h: 1080,
        },
      ],
    },
    {
      type: "text",
      eyebrow: "Tools & process",
      heading: "Storyboard to screen",
      body: [
        "Built through Higgsfield. GPT Image 2 and Nano Banana Pro for the character sheets, the can turnaround and the reference board, all style-locked to the storyboard so identity and branding held. Seedance 2.0 for the video, which takes one reference image per call, so the five-beat board did the heavy lifting.",
        "Fast, cheap probes first to validate the beats and catch drift, an early cut let a character's outfit shapeshift between shots, fixed by locking the wardrobe in the prompt, then a standard-quality master once the read was clean.",
      ],
    },
    {
      type: "text",
      eyebrow: "What's next",
      heading: "The remaining mile",
      body: [
        "This is the picture-locked master. The remaining polish is post: the THIRSTY FOR MORE title and end-card lockup as graphic overlays, and a licensed club track under the sound design. The world and the cut are done; the finish is the last mile, same as the rest of the studio.",
      ],
    },
    {
      type: "quote",
      text: "Pepsi, Thirsty For More. A spec film, built solo with AI.",
    },
  ],
};

const magnum: StudioProject = {
  slug: "magnum",
  name: "Magnum",
  oneLine: "A dark, cinematic spec film for Magnum, built with AI.",
  discipline: "Art direction · Product film · AI film",
  year: "2026",
  thumbnail: "/magnum/poster.webp",
  film: { src: "/magnum/film-main.mp4", poster: "/magnum/poster.webp" },
  hero: {
    title: "MAGNUM",
    tagline: "True to pleasure.",
    image: "/magnum/poster.webp",
  },
  intro:
    "A self-directed spec commercial: a product-only cinematic film for Magnum, built on the brand's one true moment, the crack of the chocolate shell. From a single hero keyframe to a finished fifteen-second cut. No brand to build here, just art direction and AI filmmaking, the same pipeline pointed at dark, macro indulgence.",
  meta: {
    description:
      "Magnum, The Crack. A self-directed, product-only spec film built with AI. A single hero keyframe drives a fifteen-second cinematic of a chocolate shell fracturing, caramel pulling, and the bar reforming over a molten pool.",
    ogImage: `${SITE}/magnum/og-poster.jpg`,
    ogHeight: 670,
  },
  blocks: [
    {
      type: "text",
      eyebrow: "Overview",
      heading: "A spec film, built solo with AI",
      body: [
        "Magnum, The Crack is a self-directed spec commercial, a product-only cinematic for an existing brand rather than a brand I built from the ground up. Like the Pepsi spot, it's art direction and filmmaking rather than a full brand build, this time in a completely different register: dark, macro, photoreal indulgence.",
        "Magnum's whole brand rests on one sensory moment, so I built the entire film on it.",
      ],
    },
    {
      type: "text",
      eyebrow: "The idea",
      heading: "The Crack",
      body: [
        "Magnum is one sound: the crack of a thick chocolate shell breaking under the first bite. That is the brand. So the film has exactly one job, make you feel that crack in fifteen seconds.",
        "In a black void, a slab of chocolate fractures in ultra-slow motion, reveals molten caramel and velvet ice cream, then reassembles and settles over a mirror pool of molten chocolate.",
      ],
    },
    {
      type: "quote",
      text: "True to pleasure.",
      attribution: "Magnum",
    },
    {
      type: "video",
      eyebrow: "The film",
      heading: "Fifteen seconds, one crack",
      src: "/magnum/film-main.mp4",
      poster: "/magnum/film-poster.webp",
      mode: "cinematic",
      label: "Spec spot · 15s · product film",
      body: [
        "A hairline fracture races across the shell, lit from within. Then the signature crack, and molten caramel stretches between the drifting shards. The camera orbits through weightless chocolate and arcing caramel, past velvet vanilla ice cream, before the shards reverse-assemble into the whole bar and it settles over a mirror pool of molten chocolate, one gold light blade raking across it.",
        "No music, the crack is the whole soundtrack. Play it with sound.",
      ],
    },
    {
      type: "text",
      eyebrow: "Art direction",
      heading: "Dark indulgence",
      body: [
        "Dark indulgence, shot like a jewel. Molten chocolate, warm gold, velvet texture, frost breathing off the shell, deep black all around it. Everything slow, everything macro, so the material does the talking.",
        "It's the inverse of the neon Pepsi world, and that was the point: run the same pipeline into a completely opposite look and see it hold.",
      ],
    },
    {
      type: "palette",
      eyebrow: "Art direction",
      heading: "Molten",
      body: [
        "The whole film lives in warm darks: near-black, dark chocolate, and molten caramel gold, with one clean note of velvet cream from the ice cream. No cool tones, nothing bright, the restraint is what makes it read as premium.",
      ],
      swatches: [
        { name: "Void Black", hex: "#0B0805" },
        { name: "Dark Chocolate", hex: "#4A2A18" },
        { name: "Molten Caramel", hex: "#B9701C" },
        { name: "Warm Gold", hex: "#E3AC52" },
        { name: "Velvet Cream", hex: "#F0E7D6" },
      ],
    },
    {
      type: "text",
      eyebrow: "The product",
      heading: "One bar, deconstructed",
      body: [
        "Product-only, no actors, no set. The hero is the bar itself: the chocolate shell, the caramel core, the vanilla centre. I started from a clean multi-angle product sheet, the bar on white with the cross-section, so the anatomy was locked before anything moved.",
      ],
    },
    {
      type: "image",
      full: true,
      image: {
        src: "/magnum/product-sheet.webp",
        alt: "Magnum product sheet: two whole chocolate-coated bars with drizzle and one cross-section showing vanilla ice cream and a caramel core, on white.",
        caption:
          "The clean product sheet: the bar from every angle, and the cross-section, vanilla ice cream and a caramel core.",
        w: 2400,
        h: 1792,
      },
    },
    {
      type: "text",
      eyebrow: "Reference pipeline",
      heading: "A single frame, then motion",
      body: [
        "The whole film grew from one still. I generated a single hero keyframe, the fracture you see as the film's poster above, at its peak, and fed that one image to the video model as the only reference. The black-void world and the molten pool were set as a text descriptor and a lighting plate.",
        "The branding stays IP-safe the same way as the Pepsi spot: it travels through the keyframe image, never the prompt, where the product is only ever \"a chocolate-coated ice cream bar\". The Magnum logo and the True to Pleasure line are a post overlay.",
      ],
    },
    {
      type: "image",
      full: true,
      image: {
        src: "/magnum/env-plate.webp",
        alt: "The environment plate: a black void with two gold light shafts raking down through drifting dust onto a mirror pool of molten chocolate.",
        caption:
          "The world the film lives in: a black void, two gold light shafts, and a mirror pool of molten chocolate.",
        w: 2752,
        h: 1536,
      },
    },
    {
      type: "text",
      eyebrow: "Key frames",
      heading: "The moments it turns on",
      body: ["Pulled from the cut as stills."],
    },
    {
      type: "imagePair",
      items: [
        {
          src: "/magnum/frame-fracture.webp",
          alt: "A hairline fracture racing across the dark chocolate shell, lit from within by warm gold, frost breathing off it.",
          w: 1920,
          h: 1080,
        },
        {
          src: "/magnum/frame-crack.webp",
          alt: "The shell separated along the crack, molten caramel stretching in glowing strands between the chocolate shards.",
          w: 1920,
          h: 1080,
        },
      ],
    },
    {
      type: "imagePair",
      items: [
        {
          src: "/magnum/frame-caramel.webp",
          alt: "Macro of caramel pulling into a glowing golden web as the chocolate shards drift apart.",
          w: 1920,
          h: 1080,
        },
        {
          src: "/magnum/frame-icecream.webp",
          alt: "The reveal: velvet vanilla ice cream with a caramel ribbon, close on the lens.",
          w: 1920,
          h: 1080,
        },
      ],
    },
    {
      type: "text",
      eyebrow: "Tools & process",
      heading: "Keyframe to screen",
      body: [
        "Built through Higgsfield. Nano Banana Pro for the product sheet and the keyframes, the fracture, the environment plate and the end-card, all in the same dark-indulgence look. Seedance 2.0 for the video, one image per call, so that single fracture keyframe carried the whole generation.",
        "A fast, cheap probe first to check the motion read, then a standard-quality master. Product-only meant no character sheets to wrangle, so the discipline was all in the lighting and the timing of the crack.",
      ],
    },
    {
      type: "text",
      eyebrow: "What's next",
      heading: "The remaining mile",
      body: [
        "This is the picture-locked master. The finish is post: the Magnum logo and the True to Pleasure end-card as overlays, and the sound design, the creak, the crack, the caramel pull, the final echo, mixed with no music, because the crack is the music. The film is done; the polish is the last mile, same as the rest of the studio.",
      ],
    },
    {
      type: "quote",
      text: "Magnum, True to Pleasure. A spec film, built solo with AI.",
    },
  ],
};

export const studioProjects: StudioProject[] = [sillage, biom, kera, forma, pepsi, magnum];

export function getProject(slug: string): StudioProject | undefined {
  return studioProjects.find((p) => p.slug === slug);
}
