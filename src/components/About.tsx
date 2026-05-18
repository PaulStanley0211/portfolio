import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-eyebrow">01 · About</span>
            <div className="h-px flex-1 bg-white/10 max-w-[120px]" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-7" delay={50}>
            <h2 className="section-title text-[clamp(2rem,5vw,3.75rem)]">
              I build things that{" "}
              <span className="italic text-gradient">actually work</span>.
            </h2>

            <div className="mt-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
              <p>
                Most AI projects are demos. I&apos;m more interested in the
                unglamorous middle — the tool calls that have to retry, the
                retrieval that has to be evaluated, the agent graphs that have
                to fail gracefully. My path here wasn&apos;t a straight line:
                a Master&apos;s in Mechanical Engineering, a year of CAD
                work, three years trading equities, derivatives, and
                commodities. Then in 2025, the realization that what I
                actually wanted to build was AI. The previous chapters
                carried over more than I expected. Engineering taught
                precision. Trading taught that decisions made under
                uncertainty need rules, audit trails, and risk limits{" "}
                <em>built in</em> — not bolted on later. Both turned out to
                be exactly what production AI systems need. Now I ship
                agents that earn production through tests, not promises.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-white/10" delay={150}>
            <div className="space-y-6">
              <DataRow label="Based" value="Leinfelden-Echterdingen, DE" />
              <DataRow label="Role" value="AI Agent Developer" />
              <DataRow label="Open to" value="Full-time · Freelance · Remote" />
              <DataRow label="Languages" value="English · German (B1)" />

              <div className="pt-4 mt-4 border-t border-white/10">
                <div className="section-eyebrow mb-3">Currently</div>
                <ul className="space-y-2.5 text-sm text-[var(--color-text-muted)]">
                  <li className="flex items-center gap-2.5">
                    <span className="text-[var(--color-accent)] leading-none">→</span>
                    Building multi-agent systems with LangGraph
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[var(--color-accent)] leading-none">→</span>
                    Benchmarking RAG architectures end-to-end
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[var(--color-accent)] leading-none">→</span>
                    Open to interesting agent-engineering problems
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
    <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-white/5">
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-text-dim)]">
        {label}
      </span>
      <span className="text-sm text-white text-right">{value}</span>
    </div>
  );
}
