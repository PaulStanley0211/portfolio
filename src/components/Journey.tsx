import Reveal from "./Reveal";

type Stop = {
  period: string;
  title: string;
  org: string;
  location?: string;
  body: string;
  tags?: string[];
  highlight?: boolean;
};

const STOPS: Stop[] = [
  {
    period: "2024 — Present",
    title: "AI Agent Developer",
    org: "Self-directed · Building & Shipping",
    location: "Germany",
    body: "Self-taught from zero. Now shipping production-grade multi-agent systems: autonomous research pipelines, software-engineering agents, RAG benchmarks, and predictive-maintenance agents on real sensor data. Open to full-time and freelance.",
    tags: [
      "LangChain",
      "LangGraph",
      "OpenAI SDK",
      "CrewAI",
      "RAG",
      "Pinecone",
      "ChromaDB",
      "FastAPI",
      "Python",
      "Docker",
    ],
    highlight: true,
  },
  {
    period: "Jun 2022 — Sep 2025",
    title: "Equity, Derivative & Commodities Trader",
    org: "Freelance",
    location: "India",
    body: "Three years in live markets — equities, derivatives, commodities. Built strategies, hedged risk in real time, learned to make decisions when the signal is bad and the cost is real. The single best preparation for shipping AI agents in production.",
    tags: ["Risk Management", "Strategy", "Macro Analysis"],
  },
  {
    period: "Mar 2021 — Feb 2022",
    title: "Mechanical Design Engineer",
    org: "Balaji Transporters & Handlers",
    location: "Visakhapatnam, IN",
    body: "Designed mechanical components and full systems in CAD. Owned design reviews, optimized for manufacturability and cost, produced 3D models, drawings and assembly instructions for production.",
    tags: ["CAD", "DFM", "Cross-functional"],
  },
  {
    period: "2019 — 2021",
    title: "M.Sc. Mechanical Engineering",
    org: "Riga Technical University",
    location: "Latvia",
    body: "Master's in Mechanical Engineering — the rigor that still shows up in every system I design today.",
    tags: ["Master's"],
  },
  {
    period: "Jun — Jul 2016",
    title: "Internship · Light & Medium Merchant Mill",
    org: "Visakhapatnam Steel Plant",
    body: "Hands-on time on the plant floor. Where the engineering instinct first clicked.",
  },
  {
    period: "2014 — 2018",
    title: "B.Tech. Mechanical Engineering",
    org: "Karunya Institute of Technology and Sciences",
    body: "Where it all started.",
    tags: ["Bachelor's"],
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-eyebrow">02 · Career Journey</span>
            <div className="h-px flex-1 bg-white/10 max-w-[120px]" />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <h2 className="section-title text-[clamp(2rem,5vw,3.75rem)] max-w-3xl">
              From CAD drawings to{" "}
              <span className="italic text-gradient">agent graphs</span>.
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-md text-base leading-relaxed">
              Not a linear story — and that&apos;s the point. Each chapter
              taught a different muscle: precision, decision-making under
              uncertainty, and the discipline to ship.
            </p>
          </div>
        </Reveal>

        <ol className="relative">
          <div
            aria-hidden
            className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)]/60 via-white/15 to-transparent"
          />
          {STOPS.map((s, i) => (
            <Reveal as="li" key={i} delay={i * 60}>
              <div className="relative pl-12 sm:pl-16 pb-12 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute left-0 top-1.5 h-7 w-7 rounded-full border ${
                    s.highlight
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)] shadow-[0_0_24px_rgba(212,255,58,0.45)]"
                      : "border-white/20 bg-[var(--color-bg-elevated)]"
                  } flex items-center justify-center`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      s.highlight ? "bg-black" : "bg-white/40"
                    }`}
                  />
                </span>

                <div
                  className={`group relative rounded-2xl border bg-gradient-to-b from-white/[0.03] to-white/[0.005] p-6 sm:p-7 transition-colors ${
                    s.highlight
                      ? "border-[var(--color-accent)]/30 hover:border-[var(--color-accent)]/60"
                      : "border-white/8 hover:border-white/20"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-xs tracking-[0.12em] uppercase text-[var(--color-text-dim)]">
                      {s.period}
                    </span>
                    {s.location && (
                      <span className="font-mono text-xs text-[var(--color-text-dim)]/70">
                        · {s.location}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 text-xl sm:text-2xl text-white tracking-tight">
                    {s.title}
                  </h3>
                  <div className="text-[var(--color-text-muted)] text-sm sm:text-base">
                    {s.org}
                  </div>

                  <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
                    {s.body}
                  </p>

                  {s.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
