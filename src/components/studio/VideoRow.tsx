"use client";

import { useEffect, useRef } from "react";

type Item = { src: string; poster: string; label?: string };

/**
 * A responsive row of portrait (9:16) films — social / Hyper Motion verticals.
 * Each plays as a muted ambient loop (no controls), one per column on desktop.
 */
export default function VideoRow({ items }: { items: Item[] }) {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  // Muting via attribute alone is unreliable for autoplay; set it imperatively.
  useEffect(() => {
    refs.current.forEach((v) => {
      if (v) v.muted = true;
    });
  }, []);

  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <div className="mx-auto grid max-w-xs grid-cols-1 gap-5 sm:max-w-none sm:grid-cols-3">
        {items.map((item, i) => (
          <figure key={item.src}>
            <div className="cs-figure relative aspect-[9/16] overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-[0_30px_70px_-40px_rgba(26,23,20,0.5)]">
              <video
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className="absolute inset-0 h-full w-full object-cover"
                src={item.src}
                poster={item.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            {item.label && (
              <figcaption className="cs-caption mt-3 text-center font-[var(--font-body)] text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-text-dim)]">
                {item.label}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
