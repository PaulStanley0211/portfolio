import Reveal from "./Reveal";

const GROUPS: { title: string; items: { name: string; meta?: string }[] }[] = [
  {
    title: "Generative · Image",
    items: [
      { name: "Nano Banana Pro", meta: "reference stills" },
      { name: "GPT Image 2", meta: "text-in-image" },
      { name: "Midjourney", meta: "concepting" },
      { name: "Google Omni Flash", meta: "fast iterations" },
      { name: "Magnific", meta: "upscale & detail" },
      { name: "Weave", meta: "creative canvas" },
    ],
  },
  {
    title: "Generative · Film",
    items: [
      { name: "Seedance 2.0", meta: "image-to-video" },
      { name: "Kling", meta: "image-to-video" },
      { name: "Google Veo 3", meta: "text-to-video" },
      { name: "Soul Cinema", meta: "cinematic shots" },
      { name: "Higgsfield", meta: "Hyper Motion" },
      { name: "Suno", meta: "music & score" },
      { name: "DaVinci Resolve", meta: "edit & color" },
    ],
  },
  {
    title: "Agent Frameworks",
    items: [
      { name: "LangChain", meta: "tool calling, chains" },
      { name: "LangGraph", meta: "stateful multi-agent" },
      { name: "Claude Code", meta: "agentic dev loop" },
      { name: "MCP", meta: "model context protocol" },
    ],
  },
  {
    title: "Retrieval & RAG",
    items: [
      { name: "ChromaDB", meta: "vector store" },
      { name: "Qdrant", meta: "production vector DB" },
      { name: "Hybrid Search", meta: "BM25 + dense + RRF" },
      { name: "Reranking", meta: "cross-encoders" },
    ],
  },
  {
    title: "Backend & Infra",
    items: [
      { name: "Python", meta: "primary" },
      { name: "FastAPI", meta: "async APIs" },
      { name: "Docker", meta: "containerization" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { name: "Mech. Engineering", meta: "M.Sc., RTU" },
      { name: "Markets", meta: "risk under uncertainty" },
      { name: "Classical ML / NLP", meta: "fundamentals" },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-eyebrow">05 · Stack</span>
            <div className="h-px flex-1 bg-[var(--color-ink)]/10 max-w-[120px]" />
          </div>
          <h2 className="section-title text-[clamp(2rem,5vw,3.75rem)] max-w-4xl text-[var(--color-ink)]">
            My <span className="text-accent">Stack</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-ink)]/10 rounded-3xl overflow-hidden border border-[var(--color-border)] shadow-[0_18px_50px_-30px_rgba(27,24,21,0.4)]">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="bg-[var(--color-surface)] p-7 h-full flex flex-col gap-5 hover:bg-[var(--color-bg)] transition-colors">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-mono uppercase tracking-[0.16em] text-[var(--color-ink)]">
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
                      className="group flex items-baseline justify-between gap-3 border-b border-[var(--color-border)] pb-2.5 last:border-0 last:pb-0"
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
              "Vista Equity: AI in Action",
              "Datacom: Co-pilot to Autonomous Agent",
              "BCG: GenAI Job Simulation",
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
