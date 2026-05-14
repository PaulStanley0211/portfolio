export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 mt-12">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-[var(--color-text-dim)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-accent)] text-black font-mono text-[11px] font-bold">
              PS
            </span>
            <span className="font-mono text-xs">
              © {year} Paul Stanley Ganganapalli
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-[var(--color-text-dim)] font-mono">
            <a
              href="mailto:Paulstanleyganganapalli@gmail.com"
              className="hover:text-white transition-colors"
            >
              email
            </a>
            <span className="opacity-30">·</span>
            <a
              href="https://github.com/PaulStanley0211"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              github
            </a>
            <span className="opacity-30">·</span>
            <a
              href="https://www.linkedin.com/in/paul-stanley-ganganapalli-218002195"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
