/**
 * Hand-drawn black brush-stroke decorations from the reference layout:
 * a long curved "road" sweeping in from the bottom-left and a short
 * accent stroke in the top-right. Purely decorative.
 */
export default function BrushStrokes() {
  return (
    <>
      {/* Curved "road" — bottom-left */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-0 h-56 w-[42rem] max-w-[70%] text-[var(--color-ink)] opacity-90"
        viewBox="0 0 600 200"
        fill="none"
        preserveAspectRatio="xMinYMax meet"
      >
        <path
          d="M-20 188 C 120 150, 150 70, 300 70 C 430 70, 470 130, 600 96"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M40 196 C 160 168, 200 104, 320 104"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
      </svg>
    </>
  );
}
