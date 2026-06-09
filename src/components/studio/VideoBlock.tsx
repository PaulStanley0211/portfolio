"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  mode: "ambient" | "cinematic";
  label?: string;
};

/**
 * Two play models:
 *  - ambient   → autoplay, muted, looped; pure product energy, no chrome.
 *  - cinematic → poster until tapped, then plays with sound + native controls.
 * Both preload only metadata so the page stays fast.
 */
export default function VideoBlock({ src, poster, mode, label }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Set muted imperatively too — the React `muted` attribute alone is
  // unreliable for autoplay across browsers.
  useEffect(() => {
    if (mode === "ambient" && videoRef.current) {
      videoRef.current.muted = true;
    }
  }, [mode]);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    void v.play();
    setPlaying(true);
  };

  return (
    <figure className="mx-auto w-full max-w-4xl px-6">
      <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-[0_30px_70px_-40px_rgba(26,23,20,0.55)]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          preload="metadata"
          playsInline
          loop={mode === "ambient"}
          autoPlay={mode === "ambient"}
          muted={mode === "ambient"}
          controls={mode === "cinematic" && playing}
          onPlay={() => setPlaying(true)}
        />

        {mode === "cinematic" && !playing && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Play film"
            className="group absolute inset-0 grid place-items-center bg-[rgba(26,23,20,0.28)] transition-colors hover:bg-[rgba(26,23,20,0.16)]"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full border border-[#f0e9dd]/70 bg-[rgba(26,23,20,0.35)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#f0e9dd"
                aria-hidden="true"
                className="ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      {label && (
        <figcaption className="mt-3 text-center font-[var(--font-montserrat)] text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-text-dim)]">
          {label}
        </figcaption>
      )}
    </figure>
  );
}
