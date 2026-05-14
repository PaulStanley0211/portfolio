const ITEMS = [
  "LangChain",
  "LangGraph",
  "OpenAI SDK",
  "CrewAI",
  "RAG",
  "Pinecone",
  "ChromaDB",
  "FastAPI",
  "Streamlit",
  "Python",
  "Docker",
  "Claude Code",
  "MCP",
  "Pydantic",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-black/30">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10"
      />
      <div
        className="flex gap-12 py-5 whitespace-nowrap"
        style={{ animation: "marquee 40s linear infinite", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-serif italic text-2xl sm:text-3xl text-[var(--color-text-muted)]">
              {item}
            </span>
            <span className="text-[var(--color-accent)]/70 text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
