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
                A lot of AI projects stop at the demo. I care more about the
                part nobody shows off. The tool calls that need to retry, the
                retrieval you actually have to measure, the agent graphs that
                should fail gracefully instead of falling over. That&apos;s the
                work I enjoy.
              </p>
              <p>
                My route here wasn&apos;t a straight line. I did a
                Master&apos;s in Mechanical Engineering, spent a year on CAD
                work, then traded equities, derivatives, and commodities for
                three years. In 2025 it finally clicked that what I really
                wanted to build was AI.
              </p>
              <p>
                Those earlier chapters carried over more than I expected.
                Engineering taught me precision. Trading taught me that
                decisions made under uncertainty need rules, audit trails, and
                risk limits built in from the start, not bolted on later. Both
                turned out to be exactly what production AI systems need. So now
                I build agents that earn their way into production through
                tests, not promises.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={150}>
            <div className="glass rounded-3xl p-7 space-y-6">
              <DataRow label="Based" value="Leinfelden-Echterdingen, DE" />
              <DataRow label="Role" value="AI Agent Developer" />
              <DataRow label="Open to" value="Full-time · Freelance · Remote" />
              <DataRow label="Languages" value="English · German (B1)" />

              <div className="pt-4 mt-4 border-t border-[var(--color-border)]">
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
    <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-[var(--color-border)]">
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-text-dim)]">
        {label}
      </span>
      <span className="text-sm text-[var(--color-ink)] text-right">{value}</span>
    </div>
  );
}
