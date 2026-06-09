"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Section links are absolute (`/#id`) so they also work from /studio routes:
// from the homepage they scroll in-page, from elsewhere they route home first.
// "Studio" is a real route rather than a section.
const links = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/#journey", label: "Journey", id: "journey" },
  { href: "/#stack", label: "Stack", id: "stack" },
  { href: "/#work", label: "Work", id: "work" },
  { href: "/studio", label: "Studio", id: "studio" },
  { href: "/#resume", label: "Resume", id: "resume" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const isLinkActive = (id: string) =>
    id === "studio"
      ? pathname.startsWith("/studio")
      : pathname === "/" && active === id;

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
          className={`grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full px-5 py-2.5 transition-all duration-300 ${
            scrolled
              ? "bg-[var(--color-cream)]/80 backdrop-blur-xl border border-[var(--color-border)] shadow-lg shadow-[rgba(27,24,21,0.08)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          <a href="/" className="flex items-center gap-2.5 group">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-accent)] text-[#0a0a0a] font-bold text-[13px] transition-transform group-hover:rotate-[-6deg]">
              P
            </span>
            <span className="font-bold text-lg sm:text-xl text-[var(--color-ink)] tracking-tight">
              Paul Stanley
            </span>
          </a>

          <nav className="hidden md:flex items-center justify-center gap-1">
            {links.map((l) => {
              const isActive = isLinkActive(l.id);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative px-3.5 py-1.5 text-sm transition-colors rounded-full ${
                    isActive
                      ? "text-[var(--color-ink)] bg-[var(--color-ink)]/[0.06]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-ink)]/[0.04]"
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

          <div className="flex items-center justify-end gap-2">
            <a
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-white/[0.05] px-4 py-1.5 text-sm font-medium text-[var(--color-ink)] hover:bg-white/[0.1] hover:border-[var(--color-accent)] transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white/[0.05]"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1">
                <span
                  className={`block h-0.5 w-4 bg-[var(--color-ink)] transition-transform ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-4 bg-[var(--color-ink)] transition-transform ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)]/95 backdrop-blur-xl p-2 shadow-lg shadow-[rgba(27,24,21,0.1)]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-ink)]/[0.04] rounded-xl"
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
