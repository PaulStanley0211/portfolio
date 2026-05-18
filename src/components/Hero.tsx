"use client";

import { useEffect, useState } from "react";

const ROTATING_WORDS = [
  "production-grade",
  "autonomous",
  "multi-agent",
  "RAG-native",
  "tool-using",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [display, setDisplay] = useState(ROTATING_WORDS[0]);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "pausing"
  );

  useEffect(() => {
    const word = ROTATING_WORDS[idx];
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (display.length < word.length) {
        timer = setTimeout(
          () => setDisplay(word.slice(0, display.length + 1)),
          55
        );
      } else {
        timer = setTimeout(() => setPhase("pausing"), 1400);
      }
    } else if (phase === "pausing") {
      timer = setTimeout(() => setPhase("deleting"), 800);
    } else {
      if (display.length > 0) {
        timer = setTimeout(
          () => setDisplay(word.slice(0, display.length - 1)),
          30
        );
      } else {
        timer = setTimeout(() => {
          setIdx((i) => (i + 1) % ROTATING_WORDS.length);
          setPhase("typing");
        }, 0);
      }
    }
    return () => clearTimeout(timer);
  }, [display, phase, idx]);

  return (
    <section
      id="top"
      className="relative flex items-center pt-32 pb-24"
      style={{ minHeight: "min(100svh, 980px)" }}
    >
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="dot-pulse" />
          <span className="font-mono text-xs tracking-[0.18em] uppercase text-[var(--color-text-muted)]">
            Available · Full-time & Freelance
          </span>
        </div>

        <h1 className="section-title text-[clamp(2.75rem,8vw,7rem)] tracking-tight">
          <span className="block text-white">Paul Stanley</span>
          <span className="block">
            <span className="italic text-gradient">Ganganapalli</span>
          </span>
        </h1>

        <div className="mt-10 max-w-3xl">
          <p className="text-lg sm:text-2xl text-[var(--color-text-muted)] leading-snug">
            I build{" "}
            <span className="inline-flex font-mono text-[var(--color-accent)] min-w-0">
              <span className="whitespace-nowrap">{display}</span>
              <span className="caret" />
            </span>
            <br />
            AI agent systems — not demos.
          </p>
          <p className="mt-6 text-base sm:text-lg text-[var(--color-text-dim)] leading-relaxed max-w-2xl">
            Mechanical engineer by training. Trader by detour. Now an AI Agent
            Developer shipping LangChain · LangGraph · RAG · FastAPI systems
            that solve real problems.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#work" className="btn-primary">
            See my work
            <span aria-hidden>→</span>
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
          <a
            href="https://github.com/PaulStanley0211"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.4 1 .01 2 .14 2.93.4 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.68.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/paul-stanley-ganganapalli-218002195"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.36-1.86 3.59 0 4.25 2.36 4.25 5.43v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10 max-w-3xl">
          {[
            { k: "8+", v: "AI agent systems shipped" },
            { k: "M.Sc", v: "Mech. Engineering · 2021" },
            { k: "3y+", v: "Markets · risk · uncertainty" },
            { k: "EU", v: "Based in Germany" },
          ].map((s) => (
            <div
              key={s.v}
              className="bg-[var(--color-bg)] px-5 py-5 hover:bg-white/[0.02] transition-colors"
            >
              <div className="font-serif text-3xl text-white tracking-tight">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-[var(--color-text-dim)]">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[var(--color-text-dim)]">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
