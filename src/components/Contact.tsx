import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-eyebrow">05 · Contact</span>
            <div className="h-px flex-1 bg-white/10 max-w-[120px]" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-7">
            <h2 className="section-title text-[clamp(2.25rem,6vw,5rem)]">
              Let&apos;s build something{" "}
              <span className="italic text-gradient">that ships</span>.
            </h2>
            <p className="mt-6 text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed">
              I&apos;m available for full-time AI Agent Developer roles —
              remote or on-site, anywhere — and selective freelance
              engagements. The fastest way to reach me is email.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:Paulstanleyganganapalli@gmail.com"
                className="btn-primary"
              >
                Email me
                <span aria-hidden>→</span>
              </a>
              <a
                href="https://www.linkedin.com/in/paul-stanley-ganganapalli-218002195"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn
                <span aria-hidden>↗</span>
              </a>
              <a
                href="https://github.com/PaulStanley0211"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                GitHub
                <span aria-hidden>↗</span>
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-[var(--color-accent)]/30 via-transparent to-transparent blur-2xl"
              />
              <div className="relative space-y-5">
                <ContactRow
                  label="Email"
                  value="Paulstanleyganganapalli@gmail.com"
                  href="mailto:Paulstanleyganganapalli@gmail.com"
                />
                <ContactRow
                  label="Phone"
                  value="+49 162 7220780"
                  href="tel:+491627220780"
                />
                <ContactRow
                  label="Location"
                  value="Leinfelden-Echterdingen, DE"
                />
                <ContactRow
                  label="Status"
                  value="Open to opportunities"
                  badge
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  badge,
}: {
  label: string;
  value: string;
  href?: string;
  badge?: boolean;
}) {
  const content = (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-white/5 last:border-0">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
        {label}
      </span>
      <span className="text-sm text-white inline-flex items-center gap-2 text-right">
        {badge && <span className="dot-pulse" />}
        <span className="break-all">{value}</span>
      </span>
    </div>
  );
  if (href)
    return (
      <a href={href} className="block hover:bg-white/[0.02] rounded-lg -mx-2 px-2">
        {content}
      </a>
    );
  return content;
}
