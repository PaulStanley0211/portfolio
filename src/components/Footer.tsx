export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[var(--color-border)] mt-12">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-text-dim)]">
            © {year} Paul Stanley Ganganapalli
          </span>
          <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
            <a
              href="https://github.com/PaulStanley0211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors"
            >
              GitHub <span aria-hidden>↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/paul-stanley-ganganapalli-218002195"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors"
            >
              LinkedIn <span aria-hidden>↗</span>
            </a>
            <a
              href="mailto:Paulstanleyganganapalli@gmail.com"
              className="inline-flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors"
            >
              Email <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
