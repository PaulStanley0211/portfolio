import Reveal from "./Reveal";

const GROUPS: { title: string; items: { name: string; meta?: string }[] }[] = [
  {
    title: "Agent Frameworks",
    items: [
      { name: "LangChain", meta: "tool calling, chains" },
      { name: "LangGraph", meta: "stateful multi-agent" },
      { name: "CrewAI", meta: "role-based crews" },
      { name: "OpenAI SDK", meta: "function calling" },
      { name: "Claude Code", meta: "agentic dev loop" },
    ],
  },
  {
    title: "Retrieval & RAG",
    items: [
      { name: "Pinecone", meta: "managed vector DB" },
      { name: "ChromaDB", meta: "local vector store" },
      { name: "Hybrid Search", meta: "BM25 + dense" },
      { name: "Reranking", meta: "cross-encoders" },
      { name: "Eval Harness", meta: "RAG benchmarks" },
    ],
  },
  {
    title: "Backend & Infra",
    items: [
      { name: "Python", meta: "primary" },
      { name: "FastAPI", meta: "async APIs" },
      { name: "Streamlit", meta: "rapid UIs" },
      { name: "Docker", meta: "containerization" },
      { name: "Pydantic", meta: "schemas" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { name: "Mech. Engineering", meta: "M.Sc., RTU" },
      { name: "CAD / DFM", meta: "design rigor" },
      { name: "Markets", meta: "risk under uncertainty" },
      { name: "ML / DL / NLP", meta: "bootcamp" },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-eyebrow">03 · Stack</span>
            <div className="h-px flex-1 bg-white/10 max-w-[120px]" />
          </div>
          <h2 className="section-title text-[clamp(2rem,5vw,3.75rem)] max-w-4xl">
            The toolbox behind the{" "}
            <span className="italic text-gradient">agents</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-3xl overflow-hidden border border-white/10">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="bg-[var(--color-bg)] p-7 h-full flex flex-col gap-5 hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-mono uppercase tracking-[0.16em] text-white">
                    {g.title}
                  </h3>
                  <span className="font-mono text-[10px] text-[var(--color-text-dim)]">
                    .{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="space-y-3 mt-1">
                  {g.items.map((it) => (
                    <li
                      key={it.name}
                      className="group flex items-baseline justify-between gap-3 border-b border-white/5 pb-2.5 last:border-0 last:pb-0"
                    >
                      <span className="text-[var(--color-text)] text-sm tracking-tight">
                        {it.name}
                      </span>
                      {it.meta && (
                        <span className="font-mono text-[10px] text-[var(--color-text-dim)] text-right">
                          {it.meta}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-2">
            <span className="section-eyebrow mr-2">Certifications</span>
            {[
              "Vista Equity — AI in Action",
              "Datacom — Co-pilot to Autonomous Agent",
              "BCG — GenAI Job Simulation",
              "AI Engineer Agentic Track · MCP",
              "DataScience: ML / DL / NLP Bootcamp",
            ].map((c) => (
              <span key={c} className="tag">
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
