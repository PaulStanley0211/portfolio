"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Project = {
  name: string;
  tagline: string;
  body: string;
  stack: string[];
  status: "Shipped" | "In progress" | "Coming soon";
  category: "AI Agents & RAG" | "Trading Systems";
  repo: string;
  liveUrl?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Visual Quality Control Agent",
    tagline: "Detect the defect. Diagnose the cause. Make the call.",
    body: "A single-station industrial QC agent that pairs a PatchCore vision detector (0.999 image AUROC on MVTec AD, CPU-only) with a LangGraph plan → act → observe loop. It reads machine, batch, and operator history from a SQLite MES to judge whether a fault is random or systematic, decides pass/rework/reject as a deterministic, auditable function, and escalates low-confidence cases to a human. A drift monitor (OOD gate + PSI) guards the pass path against camera and lighting shift. The LLM only writes the narrative; 88 tests cover the rest.",
    stack: ["PatchCore (anomalib)", "LangGraph", "Claude", "FastAPI", "SQLite MES", "Docker", "Streamlit"],
    status: "Shipped",
    category: "AI Agents & RAG",
    repo: "https://github.com/PaulStanley0211/visual-quality-control-agent",
  },
  {
    name: "Predictive Maintenance Multi-Agent System",
    tagline: "Four agents. Zero humans in the loop.",
    body: "A LangGraph pipeline of four agents — Monitor → Diagnostics → Recommendation → Workflow — that watches industrial pumps, flags anomalies with ISO 10816 vibration zones and z-score analysis, and separates the three fault modes that matter: bearing wear, cavitation, and misalignment. Diagnostics RAGs the maintenance manuals through Claude; the workflow agent files the ticket. Three MCP servers expose sensor data, knowledge-base search, and ticket management as tools, deployed on Azure App Service with managed Redis and PostgreSQL. [METRIC?: detection accuracy or test count]",
    stack: ["LangGraph", "Claude API", "MCP Servers", "Azure App Service", "PostgreSQL", "Langfuse"],
    status: "Shipped",
    category: "AI Agents & RAG",
    repo: "https://github.com/PaulStanley0211/Predictive_maintenance_agent",
  },
  {
    name: "Customer Complaints AI Agent",
    tagline: "From inbox to drafted reply in under 10 seconds.",
    body: "Triages inbound complaints end to end: classifies 10 complaint types, reads five sentiment levels from calm to furious, and routes across 7 departments with an urgency tier that auto-escalates critical cases. Replies come back context-aware and bilingual (English and German) in under 10 seconds, against a 15–30-minute manual baseline. Live Gmail IMAP intake, SQLite history, powered by Claude.",
    stack: ["Claude API", "Streamlit", "SQLAlchemy", "Gmail IMAP", "Python"],
    status: "Shipped",
    category: "AI Agents & RAG",
    repo: "https://github.com/PaulStanley0211/CustomerComplaintsAgent",
  },
  {
    name: "Prelegal: AI Legal Drafting",
    tagline: "Chat your way through 11 Common Paper contracts.",
    body: "Conversational drafting tool where Claude asks the next required question, normalizes free-text answers into structured state via Anthropic tool use, and produces branded PDFs with a legal-review disclaimer. Real bcrypt auth, constant-time verify to defeat enumeration, per-user 'My documents' library, and 142 tests across backend and frontend.",
    stack: ["FastAPI", "Next.js 16", "React 19", "Claude Opus 4.7 (LiteLLM)", "Anthropic Tool Use", "Tailwind v4", "@react-pdf/renderer"],
    status: "Shipped",
    category: "AI Agents & RAG",
    repo: "https://github.com/PaulStanley0211/prelegal",
    liveUrl: "[DEMO_URL]",
  },
  {
    name: "Knowledge Management RAG Agent",
    tagline: "Hybrid agentic RAG, bilingual EN/DE.",
    body: "A LangGraph state machine — plan → search → reflect → answer — over a hybrid ChromaDB + BM25 index for German automotive and machinery documentation. The agent chooses from five search tools (hybrid 60/40, pure vector, keyword, and metadata-filtered Excel and PDF lookups) and re-searches up to three times when the reflect node judges results weak. Local all-MiniLM-L6-v2 embeddings, Claude for synthesis; it turns a 30–60-minute manual lookup into an answer in under 10 seconds. [METRIC?: retrieval hit rate / faithfulness]",
    stack: ["LangGraph", "ChromaDB", "Claude", "Hybrid Search (BM25 + Vector)", "Streamlit"],
    status: "Shipped",
    category: "AI Agents & RAG",
    repo: "https://github.com/PaulStanley0211/KnowledgeBaseRAGAgent",
  },
  {
    name: "Production RAG System",
    tagline: "CRAG self-correction. Hybrid retrieval. Measured.",
    body: "Production-grade RAG with hybrid dense (BGE) and sparse (BM25) retrieval, RRF, and cross-encoder reranking. It adds an agentic CRAG loop that grades retrieval and decomposes weak queries, three-layer security (prompt-injection guard, content filter, PII redaction), and a reproducible eval harness. The numbers it lands: Hit Rate@5 of 0.96 and Faithfulness of 0.944.",
    stack: ["FastAPI", "Qdrant", "Redis", "BGE + BM25", "Cross-encoder Rerank", "Claude Sonnet 4.6 + Haiku 4.5", "React"],
    status: "Shipped",
    category: "AI Agents & RAG",
    repo: "https://github.com/PaulStanley0211/Production_RAG_System",
  },
  {
    name: "FinAlly: AI Trading Workstation",
    tagline: "Live markets. Streamed insight. Natural-language trades.",
    body: "Multi-user trading workstation with real-time Finnhub WebSocket data, simulated $10k portfolios, and a token-streaming Claude assistant that analyzes positions and executes trades from chat.",
    stack: ["FastAPI", "Next.js", "Claude (Anthropic)", "Finnhub WebSocket", "SQLite", "Docker"],
    status: "Shipped",
    category: "Trading Systems",
    repo: "https://github.com/PaulStanley0211/Fin-Alliance",
    liveUrl: "[DEMO_URL]",
  },
  {
    name: "QuantFlow: DAX 40 Trading Workflow",
    tagline: "Eight agents for one trading day.",
    body: "Pre-market briefing, setup scanner, risk monitor, a plain-English strategy builder with backtests across 54 instruments, security guardrails, a trade journal, and coaching. All of it is orchestrated through Claude, Yahoo Finance, and email.",
    stack: ["Python", "Claude Sonnet 4", "FastAPI", "React", "Yahoo Finance"],
    status: "Shipped",
    category: "Trading Systems",
    repo: "https://github.com/PaulStanley0211/Quantflow",
  },
];

const CATEGORIES = ["AI Agents & RAG", "Trading Systems"] as const;

const STATUS_STYLES: Record<Project["status"], string> = {
  Shipped: "bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/30",
  "In progress": "bg-white/10 text-[var(--color-text)] border-white/20",
  "Coming soon": "bg-white/5 text-[var(--color-text-dim)] border-[var(--color-border)]",
};

export default function Work() {
  // First project overall is expanded by default.
  const [openName, setOpenName] = useState<string | null>(PROJECTS[0].name);

  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-eyebrow">03 · Selected Work</span>
            <div className="h-px flex-1 bg-[var(--color-border)] max-w-[120px]" />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-5">
            <h2 className="section-title text-[clamp(2rem,6vw,4.5rem)] max-w-3xl text-[var(--color-ink)]">
              Check Out <span className="text-accent">My</span> Work
            </h2>
            <a
              href="https://github.com/PaulStanley0211"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              All on GitHub
              <span aria-hidden>↗</span>
            </a>
          </div>
          <p className="max-w-2xl mb-16 text-lg text-[var(--color-text-muted)] leading-relaxed">
            I also build the systems behind the work, production-grade agents,
            RAG, and automation.
          </p>
        </Reveal>

        <div className="space-y-16">
          {CATEGORIES.map((category) => {
            const items = PROJECTS.filter((p) => p.category === category);
            return (
              <Reveal key={category}>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="section-title text-[clamp(1.1rem,2.5vw,1.6rem)] text-[var(--color-ink)]">
                      {category}
                    </h3>
                    <div className="hairline flex-1" />
                  </div>
                  <ul>
                    {items.map((p, i) => (
                      <ProjectRow
                        key={p.name}
                        project={p}
                        index={i}
                        open={openName === p.name}
                        onToggle={() =>
                          setOpenName((cur) => (cur === p.name ? null : p.name))
                        }
                      />
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project: p,
  index,
  open,
  onToggle,
}: {
  project: Project;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `work-panel-${p.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

  return (
    <li className="border-b border-[var(--color-border)] first:border-t">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors"
      >
        <span
          className={`text-lg sm:text-2xl font-bold tracking-tight transition-colors ${
            open
              ? "text-[var(--color-accent)]"
              : "text-[var(--color-ink)] group-hover:text-[var(--color-accent)]"
          }`}
        >
          {p.name}
        </span>
        <span
          aria-hidden
          className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border border-[var(--color-border-strong)] text-xl leading-none transition-all duration-300 ${
            open
              ? "rotate-45 border-[var(--color-accent)] text-[var(--color-accent)]"
              : "text-[var(--color-text-muted)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]"
          }`}
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-8 pb-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left, copy */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] ${STATUS_STYLES[p.status]}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {p.status}
                </span>
                <span className="text-sm italic text-[var(--color-accent)]">
                  {p.tagline}
                </span>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {p.body}
              </p>

              <div className="mt-5 font-mono text-xs text-[var(--color-text-dim)]">
                {p.stack.join("  |  ")}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                    <span aria-hidden>↗</span>
                  </a>
                )}
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  View Code
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>

            {/* Right, preview tile */}
            <div
              aria-hidden
              className="relative hidden aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-emerald-400/15 via-[var(--color-surface)] to-[var(--color-surface)] lg:block"
            >
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-7xl font-extrabold tracking-tight text-[var(--color-accent)]/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 border-t border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-2.5 backdrop-blur-sm">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 text-sm font-bold text-[#0a0a0a]">
                  {p.name.charAt(0)}
                </span>
                <span className="truncate font-mono text-[11px] text-[var(--color-text-muted)]">
                  {p.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
