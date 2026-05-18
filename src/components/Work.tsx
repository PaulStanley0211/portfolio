import Reveal from "./Reveal";

type Project = {
  name: string;
  tagline: string;
  body: string;
  stack: string[];
  status: "Shipped" | "In progress" | "Coming soon";
  accent?: "violet" | "fuchsia" | "lime" | "amber";
  repo: string;
};

const PROJECTS: Project[] = [
  {
    name: "FinAlly — AI Trading Workstation",
    tagline: "Live markets. Streamed insight. Natural-language trades.",
    body: "Multi-user trading workstation with real-time Finnhub WebSocket data, simulated $10k portfolios, and a token-streaming Claude assistant that analyzes positions and executes trades from chat.",
    stack: ["FastAPI", "Next.js", "Claude (Anthropic)", "Finnhub WebSocket", "SQLite", "Docker"],
    status: "Shipped",
    accent: "lime",
    repo: "https://github.com/PaulStanley0211/Fin-Alliance",
  },
  {
    name: "Predictive Maintenance Multi-Agent System",
    tagline: "Four agents. Zero humans in the loop.",
    body: "LangGraph pipeline of Monitor → Diagnostics → Recommendation → Workflow agents that watches industrial pumps, RAGs maintenance manuals via Claude, and files tickets. Deployed on Azure with three MCP servers.",
    stack: ["LangGraph", "Claude API", "MCP Servers", "Azure App Service", "PostgreSQL", "Langfuse"],
    status: "Shipped",
    accent: "violet",
    repo: "https://github.com/PaulStanley0211/Predictive_maintaince_agent",
  },
  {
    name: "QuantFlow — DAX 40 Trading Workflow",
    tagline: "Eight agents for one trading day.",
    body: "Pre-market briefing, setup scanner, risk monitor, plain-English strategy builder with backtests across 54 instruments, security guardrails, journal, and coaching — all orchestrated through Claude, Yahoo Finance, and email.",
    stack: ["Python", "Claude Sonnet 4", "FastAPI", "React", "Yahoo Finance"],
    status: "Shipped",
    accent: "amber",
    repo: "https://github.com/PaulStanley0211/Quantflow",
  },
  {
    name: "Knowledge Management RAG Agent",
    tagline: "Hybrid agentic RAG, bilingual EN/DE.",
    body: "LangGraph state machine (plan → search → reflect → answer) over a hybrid vector + BM25 index for German automotive and machinery companies. Five search tools the agent can pick from based on query type.",
    stack: ["LangGraph", "ChromaDB", "Claude", "Hybrid Search (BM25 + Vector)", "Streamlit"],
    status: "Shipped",
    accent: "fuchsia",
    repo: "https://github.com/PaulStanley0211/KnowledgeBaseRAGAgent",
  },
  {
    name: "Customer Complaints AI Agent",
    tagline: "From inbox to drafted reply in under 10 seconds.",
    body: "Classifies sentiment and urgency, routes complaints across 7 departments, and generates context-aware bilingual replies. Live Gmail IMAP fetch, SQLite history, and auto-escalation for critical cases.",
    stack: ["Claude API", "Streamlit", "SQLAlchemy", "Gmail IMAP", "Python"],
    status: "Shipped",
    accent: "violet",
    repo: "https://github.com/PaulStanley0211/CustomerComplaintsAgent",
  },
  {
    name: "Production RAG System",
    tagline: "CRAG self-correction. Hybrid retrieval. Measured.",
    body: "Production-grade RAG with hybrid dense (BGE) + sparse (BM25) retrieval, RRF, and cross-encoder reranking. Adds an agentic CRAG loop that grades retrieval and decomposes weak queries, three-layer security (prompt-injection guard, content filter, PII redaction), and a reproducible eval harness — Hit Rate@5 0.96, Faithfulness 0.944.",
    stack: ["FastAPI", "Qdrant", "Redis", "BGE + BM25", "Cross-encoder Rerank", "Claude Sonnet 4.6 + Haiku 4.5", "React"],
    status: "Shipped",
    accent: "amber",
    repo: "https://github.com/PaulStanley0211/Production_RAG_System",
  },
  {
    name: "Prelegal — AI Legal Drafting",
    tagline: "Chat your way through 11 Common Paper contracts.",
    body: "Conversational drafting tool where Claude asks the next required question, normalizes free-text answers into structured state via Anthropic tool use, and produces branded PDFs with a legal-review disclaimer. Real bcrypt auth, constant-time verify to defeat enumeration, per-user 'My documents' library, and 142 tests across backend and frontend.",
    stack: ["FastAPI", "Next.js 16", "React 19", "Claude Opus 4.7 (LiteLLM)", "Anthropic Tool Use", "Tailwind v4", "@react-pdf/renderer"],
    status: "Shipped",
    accent: "lime",
    repo: "https://github.com/PaulStanley0211/prelegal",
  },
];

const ACCENT_BG: Record<NonNullable<Project["accent"]>, string> = {
  violet: "from-violet-500/30 via-violet-500/0 to-transparent",
  fuchsia: "from-fuchsia-500/30 via-fuchsia-500/0 to-transparent",
  lime: "from-lime-400/25 via-lime-400/0 to-transparent",
  amber: "from-amber-500/25 via-amber-500/0 to-transparent",
};

const STATUS_STYLES: Record<Project["status"], string> = {
  Shipped: "bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/30",
  "In progress": "bg-violet-500/15 text-violet-300 border-violet-500/30",
  "Coming soon": "bg-white/5 text-[var(--color-text-dim)] border-white/10",
};

export default function Work() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-eyebrow">04 · Selected Work</span>
            <div className="h-px flex-1 bg-white/10 max-w-[120px]" />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <h2 className="section-title text-[clamp(2rem,5vw,3.75rem)] max-w-3xl">
              Systems, not <span className="italic text-gradient">demos</span>.
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
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 80}>
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} — view on GitHub`}
                className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.005] p-7 transition-all duration-300 hover:border-white/20 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/60"
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${
                    ACCENT_BG[p.accent ?? "violet"]
                  } blur-2xl opacity-70 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] ${
                        STATUS_STYLES[p.status]
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {p.status}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--color-text-dim)]">
                      ./{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-2xl text-white tracking-tight">
                    {p.name}
                  </h3>
                  <div className="mt-1 text-sm text-[var(--color-accent)]/90 italic">
                    {p.tagline}
                  </div>

                  <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
                    {p.body}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono text-[var(--color-text-dim)] group-hover:text-[var(--color-accent)] transition-colors">
                    View on GitHub
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
