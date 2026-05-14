"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTED = [
  "What kind of AI roles is Paul looking for?",
  "Walk me through his career pivot.",
  "Which projects show his agent engineering skills best?",
  "What's his stack and where does he excel?",
];

const STORAGE_KEY = "paul_twin_chat_v1";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Msg[];
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {}
    return [];
  });
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, open, streaming]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function send(text: string) {
    if (!text.trim() || streaming) return;
    setError(null);

    const userMsg: Msg = { role: "user", content: text.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setStreaming(true);

    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
        signal: ctrl.signal,
      });

      if (!resp.ok || !resp.body) {
        let msg = `Request failed (${resp.status}).`;
        try {
          const data = await resp.json();
          if (data?.error) msg = data.error;
        } catch {}
        throw new Error(msg);
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          setMessages((m) => {
            const copy = m.slice();
            const last = copy[copy.length - 1];
            copy[copy.length - 1] = {
              role: "assistant",
              content: (last?.content ?? "") + chunk,
            };
            return copy;
          });
        }
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      setError(msg);
      setMessages((m) => {
        const copy = m.slice();
        if (copy.length && copy[copy.length - 1].role === "assistant" && copy[copy.length - 1].content === "") {
          copy.pop();
        }
        return copy;
      });
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  function reset() {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
    sessionStorage.removeItem(STORAGE_KEY);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with Paul's AI twin"}
        className={`fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full pl-3 pr-4 py-2.5 transition-all duration-300 ${
          open
            ? "bg-white/10 border border-white/15 backdrop-blur-xl text-white"
            : "bg-[var(--color-accent)] text-black hover:shadow-[0_12px_40px_-8px_rgba(212,255,58,0.55)] hover:-translate-y-0.5"
        }`}
      >
        <span
          className={`relative flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold ${
            open ? "bg-[var(--color-accent)] text-black" : "bg-black text-[var(--color-accent)]"
          }`}
        >
          {open ? "×" : "PS"}
          {!open && (
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[var(--color-accent)]" />
          )}
        </span>
        <span className="text-sm font-medium tracking-tight">
          {open ? "Close" : "Chat with my AI twin"}
        </span>
      </button>

      <div
        className={`fixed inset-x-0 bottom-0 sm:inset-auto sm:bottom-20 sm:right-5 z-[55] transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-auto sm:mx-0 w-full sm:w-[420px] max-w-full">
          <div className="rounded-t-3xl sm:rounded-3xl border border-white/10 bg-[#0a0a0c]/95 backdrop-blur-2xl shadow-[0_-12px_60px_-12px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col h-[78vh] sm:h-[600px]">
            <header className="relative px-5 py-4 border-b border-white/8 flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-violet-500 flex items-center justify-center text-black font-mono text-[12px] font-bold">
                  PS
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#0a0a0c]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-white tracking-tight flex items-center gap-2">
                  Paul&apos;s AI twin
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]/80">
                    online
                  </span>
                </div>
                <div className="text-xs text-[var(--color-text-dim)]">
                  Ask anything about his career, stack, or projects
                </div>
              </div>
              {messages.length > 0 && (
                <button
                  onClick={reset}
                  className="text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--color-text-dim)] hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/5"
                  aria-label="Reset chat"
                >
                  Reset
                </button>
              )}
            </header>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-5 space-y-4"
            >
              {messages.length === 0 ? (
                <div className="space-y-4">
                  <Bubble role="assistant">
                    <p className="text-[15px] leading-relaxed">
                      Hi — I&apos;m Paul&apos;s digital twin. He&apos;s a
                      mechanical engineer turned AI Agent Developer, and
                      he&apos;s currently open to full-time and freelance work.
                      Ask me anything.
                    </p>
                  </Bubble>
                  <div className="pt-1">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-dim)] mb-2 px-1">
                      Try asking
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {SUGGESTED.map((q) => (
                        <button
                          key={q}
                          onClick={() => send(q)}
                          className="text-left text-[13px] text-[var(--color-text-muted)] hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl px-3.5 py-2 transition-colors"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                messages.map((m, i) => (
                  <Bubble key={i} role={m.role}>
                    {m.content === "" ? (
                      <TypingDots />
                    ) : (
                      <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
                        {m.content}
                      </p>
                    )}
                  </Bubble>
                ))
              )}
              {error && (
                <div className="text-xs text-rose-300/90 bg-rose-500/10 border border-rose-500/20 rounded-xl px-3 py-2">
                  {error}
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-white/8 p-3 bg-black/40"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.03] focus-within:border-white/25 transition-colors px-3 py-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  rows={1}
                  placeholder="Ask about Paul..."
                  disabled={streaming}
                  className="flex-1 bg-transparent resize-none outline-none text-[15px] text-white placeholder:text-[var(--color-text-dim)] max-h-32 py-1.5 disabled:opacity-50"
                  style={{ minHeight: "28px" }}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || streaming}
                  className="flex items-center justify-center h-9 w-9 rounded-full bg-[var(--color-accent)] text-black disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                  aria-label="Send message"
                >
                  {streaming ? (
                    <span className="h-3 w-3 rounded-sm bg-black animate-pulse" />
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="mt-2 px-1 flex items-center justify-between text-[10px] font-mono text-[var(--color-text-dim)]">
                <span>↵ to send · ⇧↵ for newline</span>
                <span>powered by Claude</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function Bubble({
  role,
  children,
}: {
  role: "user" | "assistant";
  children: React.ReactNode;
}) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
          isUser
            ? "bg-[var(--color-accent)] text-black rounded-br-md"
            : "bg-white/[0.04] border border-white/8 text-[var(--color-text)] rounded-bl-md"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 py-1">
      <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-bounce" />
    </div>
  );
}
