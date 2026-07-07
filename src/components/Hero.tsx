import Link from "next/link";
import BrushStrokes from "./BrushStrokes";

const STATS = [
  { k: "4", v: "Full brand worlds, built end to end" },
  { k: "Concept to film", v: "Identity, product, campaign, motion" },
  { k: "3y+", v: "Markets · risk · uncertainty" },
  { k: "EU", v: "Based in Germany" },
];

export default function Hero() {
  return (
    <section id="top" className="relative px-3 sm:px-5 pt-20 pb-6">
      <div className="amber-panel relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] px-6 sm:px-10 lg:px-14 pt-24 sm:pt-28 pb-10">
        <BrushStrokes />

        <div className="relative">
          {/* pitch */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-2.5 mb-7">
              <span className="dot-pulse" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-[var(--color-ink)]/70">
                Generative AI Creative · Available
              </span>
            </div>

            <h1
              aria-label="Generative AI Creative and Brand Filmmaker"
              className="section-title text-[var(--color-ink)] text-[clamp(2.5rem,7vw,5.5rem)]"
            >
              <span className="block">
                <span className="text-accent">Generative AI</span> Creative
              </span>
              <span className="block">&amp; Brand Filmmaker</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base sm:text-lg text-[var(--color-ink)]/75 leading-relaxed">
              I build full brand worlds and cinematic ads end to end with AI,
              from concept to finished film. I also build the agentic systems
              behind the scenes.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#studio" className="btn-primary">
                View the Studio
                <span aria-hidden>→</span>
              </a>
              <Link href="/studio/sillage" className="btn-ghost">
                Watch the films
                <span aria-hidden>→</span>
              </Link>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-ink)]/10 bg-[var(--color-ink)]/10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.v}
              className="bg-white/[0.03] px-5 py-5 backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
            >
              <div className="font-bold text-2xl sm:text-3xl text-[var(--color-ink)] tracking-tight">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-[var(--color-ink)]/65">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
