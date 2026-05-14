"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About", id: "about" },
  { href: "#journey", label: "Journey", id: "journey" },
  { href: "#stack", label: "Stack", id: "stack" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
            scrolled
              ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/40"
              : "bg-transparent border border-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-accent)] text-black font-mono text-[11px] font-bold transition-transform group-hover:rotate-[-6deg]">
              PS
            </span>
            <span className="hidden sm:inline text-sm text-white">Paul Stanley</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative px-3.5 py-1.5 text-sm transition-colors rounded-full ${
                    isActive
                      ? "text-white bg-white/8"
                      : "text-[var(--color-text-muted)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-px w-4 bg-[var(--color-accent)]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-1.5 text-sm font-medium hover:bg-[var(--color-accent)] transition-colors"
            >
              Get in touch
              <span aria-hidden>→</span>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1">
                <span
                  className={`block h-0.5 w-4 bg-white transition-transform ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-4 bg-white transition-transform ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 rounded-xl"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
