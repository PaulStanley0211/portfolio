import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-eyebrow">01 · About</span>
            <div className="h-px flex-1 bg-[var(--color-ink)]/10 max-w-[120px]" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-7" delay={50}>
            <h2 className="section-title text-[clamp(2.25rem,5.5vw,4.25rem)] text-[var(--color-ink)]">
              Get To Know <span className="text-accent">Me</span>
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--color-text-muted)]">
              <p>
                I build brand worlds with AI, naming, identity, product,
                campaign and film, taken from a blank page to a finished,
                consistent result.
              </p>
              <p>
                The reason it holds together is the background underneath it. I
                trained as a mechanical engineer, then spent three years trading
                equities, derivatives and commodities, where precision and
                decisions under uncertainty were the whole job. That discipline
                is why my creative work stays consistent and on-brief, and
                it&apos;s also why I can build the AI systems behind the scenes
                when a project needs them. I&apos;m a creative who understands
                what&apos;s under the hood.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={150}>
            <div className="glass rounded-3xl p-7 space-y-6">
              <DataRow label="Based" value="Leinfelden-Echterdingen, DE" />
              <DataRow label="Role" value="Generative AI Creative" />
              <DataRow label="Open to" value="Full-time · Freelance · Remote" />
              <DataRow label="Languages" value="English · German (B1)" />

              <div className="pt-4 mt-4 border-t border-[var(--color-border)]">
                <div className="section-eyebrow mb-3">Currently</div>
                <ul className="space-y-2.5 text-sm text-[var(--color-text-muted)]">
                  <li className="flex items-center gap-2.5">
                    <span className="text-[var(--color-accent)] leading-none">→</span>
                    Building brand worlds end to end with AI
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[var(--color-accent)] leading-none">→</span>
                    Cutting cinematic ads and brand films
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[var(--color-accent)] leading-none">→</span>
                    Open to generative AI creative and video work
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-[var(--color-border)]">
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-text-dim)]">
        {label}
      </span>
      <span className="text-sm text-[var(--color-ink)] text-right">{value}</span>
    </div>
  );
}
