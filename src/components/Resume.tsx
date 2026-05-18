import Reveal from "./Reveal";

export default function Resume() {
  return (
    <section id="resume" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-eyebrow">05 · Resume</span>
            <div className="h-px flex-1 bg-white/10 max-w-[120px]" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-7">
            <h2 className="section-title text-[clamp(2rem,5vw,3.75rem)] max-w-3xl">
              The whole story{" "}
              <span className="italic text-gradient">on one page</span>.
            </h2>
            <p className="mt-6 text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed">
              Full timeline, roles, technical skills, education, and
              certifications. Updated and ready to share.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Resume
                <span aria-hidden>↗</span>
              </a>
              <a href="/resume.pdf" download className="btn-ghost">
                Download PDF
                <span aria-hidden>↓</span>
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-[var(--color-accent)]/30 via-transparent to-transparent blur-2xl"
              />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)] text-black font-mono text-[11px] font-bold">
                    PDF
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-white tracking-tight truncate">
                      Paul Stanley Ganganapalli
                    </div>
                    <div className="text-xs text-[var(--color-text-dim)] font-mono">
                      resume.pdf
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <div className="section-eyebrow mb-3">Inside</div>
                  <ul className="space-y-2.5 text-sm text-[var(--color-text-muted)]">
                    <li className="flex items-center gap-2.5">
                      <span className="text-[var(--color-accent)] leading-none">→</span>
                      Full project breakdowns
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-[var(--color-accent)] leading-none">→</span>
                      Skills, frameworks, and tools
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-[var(--color-accent)] leading-none">→</span>
                      Education and certifications
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-[var(--color-accent)] leading-none">→</span>
                      Languages (English C1 · German B1)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
