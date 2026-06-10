import Reveal from "./Reveal";
import StudioCard from "./studio/StudioCard";
import { studioProjects } from "@/data/studio";

// Studio lives inline in the homepage flow (between Work and Resume), so it is
// part of the natural scroll rather than a separate page you have to click into.
// Each card opens its own immersive /studio/[slug] case-study world.
export default function Studio() {
  return (
    <section id="studio" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-eyebrow">05 · Studio</span>
            <div className="h-px flex-1 bg-[var(--color-border)] max-w-[120px]" />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <h2 className="section-title text-[clamp(2rem,6vw,4.5rem)] max-w-3xl text-[var(--color-ink)]">
              Brand <span className="text-accent">&amp;</span> Creative
            </h2>
            <p className="max-w-sm leading-relaxed text-[var(--color-text-muted)]">
              Full brand worlds built end to end with AI: naming, identity,
              product, campaign and film. Open one to step inside.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studioProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <StudioCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
