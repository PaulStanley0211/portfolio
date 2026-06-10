import Image from "next/image";
import Reveal from "@/components/Reveal";
import VideoBlock from "@/components/studio/VideoBlock";
import type { Block } from "@/data/studio";

// Sillage stills are optimized WebP at 2000 × 1131 (same 16:9-ish ratio as the
// originals). Passing the intrinsic size keeps the layout stable while
// next/image serves a responsive version.
const IMG_W = 2000;
const IMG_H = 1131;

function TextHead({ eyebrow, heading }: { eyebrow?: string; heading?: string }) {
  if (!eyebrow && !heading) return null;
  return (
    <div className="mb-5">
      {eyebrow && <p className="sillage-eyebrow">{eyebrow}</p>}
      {heading && (
        <h2 className="sillage-display mt-3 text-[clamp(1.6rem,4vw,2.6rem)] text-[var(--color-ink)]">
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
        <p key={i} className="sillage-body text-[1.02rem] sm:text-[1.08rem]">
          {p}
        </p>
      ))}
    </div>
  );
}

export default function Blocks({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <Reveal className="mx-auto w-full max-w-2xl px-6">
          <TextHead eyebrow={block.eyebrow} heading={block.heading} />
          <Paragraphs body={block.body} />
        </Reveal>
      );

    case "quote":
      return (
        <Reveal className="mx-auto w-full max-w-3xl px-6 text-center">
          <div className="sillage-rule mx-auto mb-10 w-24" />
          <blockquote className="sillage-display text-[clamp(1.5rem,4.2vw,2.4rem)] italic leading-snug text-[var(--color-ink)]">
            “{block.text}”
          </blockquote>
          {block.attribution && (
            <p className="mt-6 font-[var(--font-montserrat)] text-[0.72rem] uppercase tracking-[0.34em] text-[var(--color-accent)]">
              {block.attribution}
            </p>
          )}
          <div className="sillage-rule mx-auto mt-10 w-24" />
        </Reveal>
      );

    case "palette":
      return (
        <Reveal className="mx-auto w-full max-w-3xl px-6">
          <TextHead eyebrow={block.eyebrow} heading={block.heading} />
          {block.body && <Paragraphs body={block.body} />}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-3">
            {block.swatches.map((s) => (
              <div key={s.hex}>
                <div
                  className="h-20 w-full rounded-sm border border-[var(--color-border-strong)]"
                  style={{ background: s.hex }}
                />
                <p className="mt-2 font-[var(--font-montserrat)] text-[0.78rem] font-medium text-[var(--color-ink)]">
                  {s.name}
                </p>
                <p className="font-[var(--font-montserrat)] text-[0.7rem] tracking-wide text-[var(--color-text-muted)]">
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
          className={`mx-auto w-full px-6 ${block.full ? "max-w-5xl" : "max-w-3xl"}`}
        >
          <figure>
            <div className="overflow-hidden rounded-sm border border-[var(--color-border)] shadow-[0_30px_70px_-40px_rgba(26,23,20,0.55)]">
              <Image
                src={block.image.src}
                alt={block.image.alt}
                width={IMG_W}
                height={IMG_H}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="h-auto w-full"
              />
            </div>
            {block.image.caption && (
              <figcaption className="mt-3 font-[var(--font-montserrat)] text-[0.82rem] italic text-[var(--color-text-muted)]">
                {block.image.caption}
              </figcaption>
            )}
          </figure>
        </Reveal>
      );

    case "imagePair":
      return (
        <Reveal className="mx-auto w-full max-w-5xl px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {block.items.map((img) => (
              <figure key={img.src}>
                <div className="overflow-hidden rounded-sm border border-[var(--color-border)] shadow-[0_30px_70px_-40px_rgba(26,23,20,0.5)]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={IMG_W}
                    height={IMG_H}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
                {img.caption && (
                  <figcaption className="mt-2 font-[var(--font-montserrat)] text-[0.8rem] italic text-[var(--color-text-muted)]">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </Reveal>
      );

    case "video":
      return (
        <Reveal className="w-full">
          {(block.eyebrow || block.heading || block.body) && (
            <div className="mx-auto mb-6 w-full max-w-2xl px-6">
              <TextHead eyebrow={block.eyebrow} heading={block.heading} />
              {block.body && <Paragraphs body={block.body} />}
            </div>
          )}
          <VideoBlock
            src={block.src}
            poster={block.poster}
            mode={block.mode}
            label={block.label}
          />
        </Reveal>
      );

    default:
      return null;
  }
}
