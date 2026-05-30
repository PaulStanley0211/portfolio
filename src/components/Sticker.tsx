/**
 * Rotated handwritten oval "sticker" badge from the reference
 * (the "Free Consultation" tag). Defaults map to Paul's positioning.
 */
export default function Sticker({
  script = "Paul Stanley",
  label = "Available for hire",
  rotate = -8,
  className = "",
}: {
  script?: string;
  label?: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      className={`sticker ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span className="sticker-script text-2xl sm:text-3xl">{script}</span>
      <span className="mt-0.5 font-semibold text-[0.7rem] uppercase tracking-[0.12em] text-[var(--color-ink)]">
        {label}
      </span>
    </div>
  );
}
