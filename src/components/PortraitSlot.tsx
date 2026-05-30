import Image from "next/image";

/**
 * The hero portrait. When `src` is provided (e.g. "/portrait.png" — ideally a
 * background-removed cut-out PNG dropped into /public), it renders that photo.
 * Until then it shows a styled placeholder so the layout is pixel-correct.
 */
export default function PortraitSlot({
  src,
  alt = "Paul Stanley Ganganapalli",
}: {
  src?: string;
  alt?: string;
}) {
  if (src) {
    return (
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 80vw, 40vw"
          className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(27,24,21,0.35)]"
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full items-end justify-center">
      <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm">
        {/* Soft silhouette */}
        <svg
          aria-hidden
          viewBox="0 0 200 260"
          className="absolute bottom-0 left-1/2 h-[88%] w-auto -translate-x-1/2 text-[var(--color-ink)]/15"
          fill="currentColor"
        >
          <circle cx="100" cy="74" r="46" />
          <path d="M18 260 C 18 178, 56 142, 100 142 C 144 142, 182 178, 182 260 Z" />
        </svg>
        <div className="absolute inset-x-0 top-8 flex flex-col items-center">
          <span className="font-extrabold text-6xl text-[var(--color-ink)]/70">PS</span>
        </div>
        <div className="absolute inset-x-0 bottom-5 text-center">
          <span className="rounded-full bg-[var(--color-ink)]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-cream)]">
            Your photo here
          </span>
        </div>
      </div>
    </div>
  );
}
