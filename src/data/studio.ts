// Studio — creative / brand case studies.
// Single source of truth for both the /studio grid and the /studio/[slug]
// case-study pages. Adding a new brand is one new StudioProject entry below;
// no new components or routes required.

export type Swatch = { name: string; hex: string };

export type ImageRef = { src: string; alt: string; caption?: string };

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
    };

export type StudioProject = {
  slug: string;
  name: string;
  oneLine: string; // grid-card subtitle
  discipline: string; // e.g. "Brand identity · Art direction · Film"
  year: string;
  thumbnail: string; // grid-card image
  hero: { title: string; tagline: string; image: string };
  /** Short lede shown under the hero, before the blocks. */
  intro: string;
  /** Per-case-study SEO / social metadata. */
  meta: { description: string };
  blocks: Block[];
};

const sillage: StudioProject = {
  slug: "sillage",
  name: "Sillage",
  oneLine: "A luxury fragrance house, built end to end with AI.",
  discipline: "Brand identity · Art direction · Film",
  year: "2026",
  thumbnail: "/sillage/poster.png",
  hero: {
    title: "SILLAGE",
    tagline: "Essence invisible, ever remembered.",
    image: "/sillage/poster.png",
  },
  intro:
    "A complete luxury perfume house, built from a blank page to a finished campaign. Run the way an agency would — naming and positioning first, then verbal and visual identity, then the product, then the campaign and the films. One operator, full pipeline, start to finish.",
  meta: {
    description:
      "Sillage — a self-directed luxury fragrance house built end to end with AI. Naming, positioning, verbal and visual identity, product, campaign, and two films.",
  },
  blocks: [
    {
      type: "text",
      eyebrow: "Overview",
      heading: "One operator, full pipeline",
      body: [
        "Sillage is a self-directed brand project: a complete luxury perfume house built from a blank page to a finished campaign. I ran it the way an agency would — naming and positioning first, then verbal and visual identity, then the product, then the campaign and the films.",
        "Every decision is documented here so you can see the thinking, not just the output.",
      ],
    },
    {
      type: "text",
      eyebrow: "The idea",
      heading: "You are remembered by what you leave behind",
      body: [
        "The word sillage is a perfumery term. It means the trail of scent a person leaves behind them as they move through a room — the thing you notice a moment after they have gone.",
        "I built the whole brand on that single idea. Not the loudest scent in the room, the one that lingers after you. The name says what the product does without explaining anything, and it gave me a concept that runs through every asset: the trail.",
      ],
    },
    {
      type: "text",
      eyebrow: "Positioning",
      heading: "Quiet, on purpose",
      body: [
        "Sillage sits in modern niche luxury, the fastest-growing tier of the fragrance market — the same register as the houses people who care about scent already follow, but with its own philosophy.",
        "It is genderless on purpose. The idea of a trail and a memory belongs to no one gender.",
        "The tension it owns: almost all fragrance marketing shouts, with fame and seduction. Sillage does the opposite — restraint, after-image, quiet projection. The luxury of being remembered without trying.",
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
        "Descriptor — SILLAGE PARFUMS. Tagline — Essence invisible, ever remembered.",
        "Voice: quiet, precise, certain. Short lines. Nothing oversold.",
      ],
    },
    {
      type: "palette",
      eyebrow: "Visual identity",
      heading: "A three-part mark, one trail",
      body: [
        "A three-part mark system, tied together by the trail motif: a tall high-contrast serif wordmark, an abstract scent-trail symbol built from fine lines that fade into the air, and a single-S monogram inside a thin circle for caps, foils and avatars.",
        "Type is Playfair Display for display and Montserrat Light for body. The palette is roughly ninety percent neutral with two small warm accents — because restraint is the luxury.",
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
          src: "/sillage/logo-symbol.png",
          alt: "Sillage logo and scent-trail symbol — tall serif wordmark with the abstract trail mark.",
        },
        {
          src: "/sillage/brand-kit.png",
          alt: "Sillage brand kit — wordmark, monogram, palette and type system on one sheet.",
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
        src: "/sillage/product.png",
        alt: "The Sillage master bottle — smoked grey glass, amber extrait, brushed gunmetal cap engraved with an S.",
        caption: "The master bottle. Raw amber resin and smoked wood in frame, telling the scent story as objects.",
      },
    },
    {
      type: "text",
      eyebrow: "The campaign",
      heading: "A figure out of time",
      body: [
        "For the key visual I cast a figure out of time — a woman in a timeless gown, shot in painterly Old-Master light, dark and still. It reads as exactly what the brand is about: someone you remember long after they have gone.",
        "I pulled the styling into our palette rather than a literal period look, so the romance stays but the brand stays modern. The bottle sits in the warm light beside her, the wordmark runs as a masthead, the marks sit quiet in the corner.",
      ],
    },
    {
      type: "image",
      full: true,
      image: {
        src: "/sillage/location.png",
        alt: "Sillage campaign environment — warm, painterly light with the styling pulled into the brand palette.",
        caption: "The world, styled into the palette — romance kept, brand kept modern.",
      },
    },
    {
      type: "video",
      eyebrow: "The films",
      heading: "She walks into it",
      src: "/sillage/film-cinematic.mp4",
      poster: "/sillage/film-cinematic-poster.png",
      mode: "ambient",
      label: "Cinematic cut · 10s",
      body: [
        "I made two films, deliberately opposite, to show the brand holds across registers.",
        "The film is a slow, emotional cinematic cut in a bright sunlit studio — the inverse of the dark poster. She lifts the bottle, sprays once into the air, and steps into the cloud, letting the scent settle and rise into a golden trail that lingers where she stood. A woman walking into her own sillage.",
      ],
    },
    {
      type: "video",
      heading: "The kinetic cut",
      src: "/sillage/film-kinetic.mp4",
      poster: "/sillage/film-kinetic-poster.png",
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

export const studioProjects: StudioProject[] = [sillage];

export function getProject(slug: string): StudioProject | undefined {
  return studioProjects.find((p) => p.slug === slug);
}
