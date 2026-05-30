const ITEMS = [
  "LangChain",
  "LangGraph",
  "Claude",
  "Claude Code",
  "RAG",
  "MCP",
  "Python",
  "FastAPI",
  "Next.js",
  "Docker",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-bg)]">
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
            <span className="font-extrabold uppercase tracking-tight text-2xl sm:text-3xl text-[var(--color-ink)]/65">
              {item}
            </span>
            <span className="text-[var(--color-accent)] text-2xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
