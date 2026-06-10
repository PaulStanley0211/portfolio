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
    period: "2025 to Present",
    title: "AI Agent Developer",
    org: "Self-directed · Building & Shipping",
    location: "Germany",
    body: "I moved into AI in 2025, teaching myself and building on top of a mechanical-engineering foundation. These days I ship production systems: multi-agent finance workstations, agentic RAG, predictive maintenance, and conversational drafting tools. Open to full-time and freelance work.",
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
    period: "Jun 2022 to Sep 2025",
    title: "Equity, Derivative & Commodities Trader",
    org: "Freelance",
    location: "India",
    body: "Three years in live markets across equities, derivatives, and commodities. I built strategies, hedged risk in real time, and learned to make decisions when the signal is bad and the cost is real. Honestly, it was the best preparation I could have had for shipping AI agents in production.",
    tags: ["Risk Management", "Strategy", "Macro Analysis"],
  },
  {
    period: "Mar 2021 to Feb 2022",
    title: "Mechanical Design Engineer",
    org: "Balaji Transporters & Handlers",
    location: "Visakhapatnam, IN",
    body: "Designed mechanical components and full systems in CAD. Owned design reviews, optimized for manufacturability and cost, produced 3D models, drawings and assembly instructions for production.",
    tags: ["CAD", "DFM", "Cross-functional"],
  },
  {
    period: "2019 to 2021",
    title: "M.Sc. Mechanical Engineering",
    org: "Riga Technical University",
    location: "Latvia",
    body: "Master's in Mechanical Engineering, and the rigor it drilled into me still shows up in every system I design today.",
    tags: ["Master's"],
  },
  {
    period: "Jun to Jul 2016",
    title: "Internship · Light & Medium Merchant Mill",
    org: "Visakhapatnam Steel Plant",
    body: "Hands-on time on the plant floor. Where the engineering instinct first clicked.",
  },
  {
    period: "2014 to 2018",
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
            <div className="h-px flex-1 bg-[var(--color-ink)]/10 max-w-[120px]" />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <h2 className="section-title text-[clamp(2rem,5vw,3.75rem)] max-w-3xl text-[var(--color-ink)]">
              From CAD Drawings To{" "}
              <span className="text-accent">Agent Graphs</span>
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-md text-base leading-relaxed">
              It&apos;s not a linear story, and that&apos;s kind of the point.
              Each chapter taught me something different: precision,
              making decisions under uncertainty, and the discipline to
              actually ship.
            </p>
          </div>
        </Reveal>

        <ol className="relative">
          <div
            aria-hidden
            className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)]/70 via-[var(--color-ink)]/15 to-transparent"
          />
          {STOPS.map((s, i) => (
            <Reveal as="li" key={i} delay={i * 60}>
              <div className="relative pl-12 sm:pl-16 pb-12 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute left-0 top-1.5 h-7 w-7 rounded-full border ${
                    s.highlight
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)] shadow-[0_0_24px_rgba(74,222,128,0.45)]"
                      : "border-[var(--color-ink)]/20 bg-[var(--color-surface)]"
                  } flex items-center justify-center`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      s.highlight ? "bg-[var(--color-ink)]" : "bg-[var(--color-ink)]/30"
                    }`}
                  />
                </span>

                <div
                  className={`group relative rounded-2xl border bg-[var(--color-surface)] p-6 sm:p-7 shadow-[0_1px_2px_rgba(27,24,21,0.04),0_18px_40px_-24px_rgba(27,24,21,0.25)] transition-colors ${
                    s.highlight
                      ? "border-[var(--color-accent)]/40 hover:border-[var(--color-accent)]"
                      : "border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
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

                  <h3 className="mt-2 font-bold text-xl sm:text-2xl text-[var(--color-ink)] tracking-tight">
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
