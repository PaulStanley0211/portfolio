import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-eyebrow">07 · Contact</span>
            <div className="h-px flex-1 bg-[var(--color-ink)]/10 max-w-[120px]" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-7">
            <h2 className="section-title text-[clamp(2.75rem,9vw,6.5rem)] text-[var(--color-ink)]">
              <span className="block">
                Let&apos;s <span className="text-accent">Build</span>
              </span>
              <span className="block text-right">Something</span>
            </h2>
            <a
              href="mailto:paulstanleyganganapalli@gmail.com"
              className="mt-8 inline-block text-lg sm:text-2xl font-semibold tracking-tight text-[var(--color-text)] underline decoration-[var(--color-border-strong)] underline-offset-[6px] transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
            >
              paulstanleyganganapalli@gmail.com
            </a>
            <p className="mt-6 text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed">
              I&apos;m available for generative AI creative and AI video roles,
              full-time or freelance, remote or on-site. The fastest way to
              reach me is email.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:paulstanleyganganapalli@gmail.com"
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
            <div className="glass relative overflow-hidden rounded-3xl p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-[var(--color-accent)]/25 via-transparent to-transparent blur-2xl"
              />
              <div className="relative space-y-5">
                <ContactRow
                  label="Email"
                  value="paulstanleyganganapalli@gmail.com"
                  href="mailto:paulstanleyganganapalli@gmail.com"
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
    <div className="flex items-center justify-between gap-4 py-3 border-b border-[var(--color-border)] last:border-0">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
        {label}
      </span>
      <span className="text-sm text-[var(--color-ink)] inline-flex items-center gap-2 text-right">
        {badge && <span className="dot-pulse" />}
        <span className="break-all">{value}</span>
      </span>
    </div>
  );
  if (href)
    return (
      <a href={href} className="block hover:bg-[var(--color-ink)]/[0.03] rounded-lg -mx-2 px-2">
        {content}
      </a>
    );
  return content;
}
