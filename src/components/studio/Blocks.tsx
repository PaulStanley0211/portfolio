import Image from "next/image";
import Reveal from "@/components/Reveal";
import VideoBlock from "@/components/studio/VideoBlock";
import VideoRow from "@/components/studio/VideoRow";
import type { Block, ImageRef } from "@/data/studio";

// Fallback intrinsic size (Sillage stills are 2000 × 1131). Per-image w/h in the
// data override this so brands with mixed aspect ratios stay undistorted.
const IMG_W = 2000;
const IMG_H = 1131;

// The cs-* hook classes below are inert by default (Sillage uses the Tailwind
// utilities as-is). A brand theme can restyle them, see the [data-theme="biom"]
// "technical" treatment in globals.css.

function TextHead({ eyebrow, heading }: { eyebrow?: string; heading?: string }) {
  if (!eyebrow && !heading) return null;
  return (
    <div className="mb-5">
      {eyebrow && <p className="cs-eyebrow">{eyebrow}</p>}
      {heading && (
        <h2 className="cs-display cs-heading mt-3 text-[clamp(1.6rem,4vw,2.6rem)] text-[var(--color-ink)]">
          {heading}
        </h2>
      )}
    </div>
  );
}

function Paragraphs({ body }: { body: string[] }) {
  return (
    <div className="space-y-4">
      {body.map((p, i) => (
        <p key={i} className="cs-body text-[1.02rem] sm:text-[1.08rem]">
          {p}
        </p>
      ))}
    </div>
  );
}

function Figure({
  image,
  sizes,
  captionClass = "mt-3",
}: {
  image: ImageRef;
  sizes: string;
  captionClass?: string;
}) {
  return (
    <figure>
      <div className="cs-figure overflow-hidden rounded-sm border border-[var(--color-border)] shadow-[0_30px_70px_-40px_rgba(26,23,20,0.5)]">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.w ?? IMG_W}
          height={image.h ?? IMG_H}
          sizes={sizes}
          className="h-auto w-full"
        />
      </div>
      {image.caption && (
        <figcaption
          className={`cs-caption ${captionClass} font-[var(--font-body)] text-[0.82rem] italic text-[var(--color-text-muted)]`}
        >
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function Blocks({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <Reveal className="cs-block cs-block--text cs-narrow mx-auto w-full max-w-2xl px-6">
          <TextHead eyebrow={block.eyebrow} heading={block.heading} />
          <Paragraphs body={block.body} />
        </Reveal>
      );

    case "quote":
      return (
        <Reveal className="cs-block cs-block--quote cs-narrow mx-auto w-full max-w-3xl px-6 text-center">
          <div className="cs-rule mx-auto mb-10 w-24" />
          <blockquote className="cs-display cs-quote-text text-[clamp(1.5rem,4.2vw,2.4rem)] italic leading-snug text-[var(--color-ink)]">
            “{block.text}”
          </blockquote>
          {block.attribution && (
            <p className="cs-quote-attr mt-6 font-[var(--font-body)] text-[0.72rem] uppercase tracking-[0.34em] text-[var(--color-accent)]">
              {block.attribution}
            </p>
          )}
          <div className="cs-rule mx-auto mt-10 w-24" />
        </Reveal>
      );

    case "palette":
      return (
        <Reveal className="cs-block cs-block--palette cs-narrow mx-auto w-full max-w-3xl px-6">
          <TextHead eyebrow={block.eyebrow} heading={block.heading} />
          {block.body && <Paragraphs body={block.body} />}
          <div
            className={`cs-palette-grid mt-8 grid grid-cols-2 gap-4 sm:gap-3 ${
              block.swatches.length <= 4 ? "sm:grid-cols-4" : "sm:grid-cols-5"
            }`}
          >
            {block.swatches.map((s) => (
              <div key={s.hex} className="cs-swatch">
                <div
                  className="cs-swatch-chip h-20 w-full rounded-sm border border-[var(--color-border-strong)]"
                  style={{ background: s.hex }}
                />
                <p className="cs-swatch-name mt-2 font-[var(--font-body)] text-[0.78rem] font-medium text-[var(--color-ink)]">
                  {s.name}
                </p>
                <p className="cs-swatch-hex font-[var(--font-body)] text-[0.7rem] tracking-wide text-[var(--color-text-muted)]">
                  {s.hex}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      );

    case "image":
      return (
        <Reveal
          className={`cs-block cs-block--image mx-auto w-full px-6 ${block.full ? "max-w-5xl" : "max-w-3xl"}`}
        >
          <Figure
            image={block.image}
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </Reveal>
      );

    case "imagePair":
      return (
        <Reveal className="cs-block cs-block--pair mx-auto w-full max-w-5xl px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {block.items.map((img) => (
              <Figure
                key={img.src}
                image={img}
                sizes="(max-width: 640px) 100vw, 50vw"
                captionClass="mt-2"
              />
            ))}
          </div>
        </Reveal>
      );

    case "video":
      return (
        <Reveal className="cs-block cs-block--video w-full">
          {(block.eyebrow || block.heading || block.body) && (
            <div className="cs-narrow mx-auto mb-6 w-full max-w-2xl px-6">
              <TextHead eyebrow={block.eyebrow} heading={block.heading} />
              {block.body && <Paragraphs body={block.body} />}
            </div>
          )}
          <VideoBlock
            src={block.src}
            poster={block.poster}
            mode={block.mode}
            label={block.label}
            aspect={block.aspect}
          />
        </Reveal>
      );

    case "videoRow":
      return (
        <Reveal className="cs-block cs-block--video w-full">
          {(block.eyebrow || block.heading || block.body) && (
            <div className="cs-narrow mx-auto mb-8 w-full max-w-2xl px-6">
              <TextHead eyebrow={block.eyebrow} heading={block.heading} />
              {block.body && <Paragraphs body={block.body} />}
            </div>
          )}
          <VideoRow items={block.items} />
        </Reveal>
      );

    default:
      return null;
  }
}
