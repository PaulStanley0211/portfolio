"use client";

import { useEffect, useState } from "react";
import BrushStrokes from "./BrushStrokes";

const ROTATING_WORDS = [
  "production-grade",
  "autonomous",
  "multi-agent",
  "RAG-native",
  "tool-using",
];

const SKILLS = [
  "LangChain",
  "LangGraph",
  "Claude",
  "Python",
  "FastAPI",
  "RAG",
  "MCP",
  "Docker",
];

const STATS = [
  { k: "7+", v: "AI agent systems shipped" },
  { k: "M.Sc", v: "Mech. Engineering · 2021" },
  { k: "3y+", v: "Markets · risk · uncertainty" },
  { k: "EU", v: "Based in Germany" },
];

export default function Hero() {
  const [display, setDisplay] = useState(ROTATING_WORDS[0]);
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "pausing"
  );

  useEffect(() => {
    const word = ROTATING_WORDS[idx];
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (display.length < word.length) {
        timer = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 55);
      } else {
        timer = setTimeout(() => setPhase("pausing"), 1400);
      }
    } else if (phase === "pausing") {
      timer = setTimeout(() => setPhase("deleting"), 800);
    } else {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(word.slice(0, display.length - 1)), 30);
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
    <section id="top" className="relative px-3 sm:px-5 pt-20 pb-6">
      <div className="amber-panel relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] px-6 sm:px-10 lg:px-14 pt-24 sm:pt-28 pb-10">
        <BrushStrokes />

        <div className="relative">
          {/* pitch */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-2.5 mb-7">
              <span className="dot-pulse" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-[var(--color-ink)]/70">
                AI Agent Developer · Available
              </span>
            </div>

            <h1 className="section-title text-[var(--color-ink)] text-[clamp(2.75rem,8vw,6.25rem)]">
              <span className="block text-[0.3em] font-medium normal-case tracking-[0.02em] text-[var(--color-text-muted)]">
                I&apos;m an
              </span>
              <span className="block">
                <span className="text-accent">AI Agent</span> Developer
              </span>
              <span className="block text-[0.3em] font-medium normal-case tracking-[0.02em] text-[var(--color-text-muted)] mt-1">
                Who Ships
              </span>
              <span className="block text-accent">Production Systems</span>
            </h1>

            <p className="mt-7 max-w-xl text-base sm:text-lg text-[var(--color-ink)]/75 leading-relaxed">
              I build{" "}
              <span className="font-mono text-[var(--color-accent-soft)]">
                {display}
                <span className="caret" />
              </span>{" "}
              AI agent systems, not demos. I trained as a mechanical engineer,
              spent a few years trading, and now I build LangGraph, RAG, and
              FastAPI systems that solve real problems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-primary">
                See my work
                <span aria-hidden>→</span>
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </div>

            {/* Skills strip */}
            <div className="mt-10">
              <span className="section-eyebrow">Skills</span>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                {SKILLS.map((s, i) => (
                  <span key={s} className="flex items-center gap-3">
                    <span className="font-semibold text-base sm:text-lg text-[var(--color-text)]">
                      {s}
                    </span>
                    {i < SKILLS.length - 1 && (
                      <span aria-hidden className="text-[var(--color-accent)]">
                        •
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-ink)]/10 bg-[var(--color-ink)]/10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.v}
              className="bg-white/[0.03] px-5 py-5 backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
            >
              <div className="font-bold text-3xl text-[var(--color-ink)] tracking-tight">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-[var(--color-ink)]/65">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
