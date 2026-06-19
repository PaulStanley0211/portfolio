"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTED = [
  "What kind of creative work does Paul do?",
  "Walk me through a brand he built end to end.",
  "Which AI tools does he use for video?",
  "What's his edge as an AI creative?",
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
            ? "bg-[var(--color-surface)] border border-[var(--color-border-strong)] backdrop-blur-xl text-[var(--color-text)]"
            : "bg-[var(--color-accent)] text-[#0a0a0a] hover:shadow-[0_12px_40px_-8px_rgba(74,222,128,0.45)] hover:-translate-y-0.5"
        }`}
      >
        <span
          className={`relative flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold ${
            open ? "bg-[var(--color-accent)] text-[#0a0a0a]" : "bg-[#0a0a0a] text-[var(--color-accent)]"
          }`}
        >
          {open ? "×" : "PS"}
          {!open && (
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-[var(--color-bg)]" />
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
          <div className="rounded-t-3xl sm:rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/98 backdrop-blur-2xl shadow-[0_-12px_60px_-12px_rgba(27,24,21,0.4)] overflow-hidden flex flex-col h-[78vh] sm:h-[600px]">
            <header className="relative px-5 py-4 border-b border-[var(--color-border)] flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--color-amber-from)] to-[var(--color-amber-to)] flex items-center justify-center text-[#0a0a0a] font-mono text-[12px] font-bold">
                  PS
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-[var(--color-surface)]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-[var(--color-ink)] tracking-tight flex items-center gap-2">
                  Paul&apos;s AI twin
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
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
                  className="text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--color-text-dim)] hover:text-[var(--color-ink)] transition-colors px-2 py-1 rounded-md hover:bg-[var(--color-ink)]/5"
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
                      Hey, I&apos;m Paul&apos;s digital twin. He&apos;s a
                      generative AI creative who builds brand worlds and
                      cinematic ads end to end with AI, and he&apos;s open to
                      full-time and freelance creative work right now. Ask me
                      anything.
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
                          className="text-left text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-ink)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] bg-[var(--color-bg)] hover:bg-[var(--color-ink)]/[0.04] rounded-2xl px-3.5 py-2 transition-colors"
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
                <div className="text-xs text-rose-300 bg-rose-500/10 border border-rose-500/25 rounded-xl px-3 py-2">
                  {error}
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-[var(--color-border)] p-3 bg-[var(--color-bg)]"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] focus-within:border-[var(--color-ink)]/40 transition-colors px-3 py-2">
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
                  className="flex-1 bg-transparent resize-none outline-none text-[15px] text-[var(--color-ink)] placeholder:text-[var(--color-text-dim)] max-h-32 py-1.5 disabled:opacity-50"
                  style={{ minHeight: "28px" }}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || streaming}
                  className="flex items-center justify-center h-9 w-9 rounded-full bg-[var(--color-accent)] text-[#0a0a0a] disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                  aria-label="Send message"
                >
                  {streaming ? (
                    <span className="h-3 w-3 rounded-sm bg-[#0a0a0a] animate-pulse" />
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
            ? "bg-[var(--color-ink)] text-[var(--color-cream)] rounded-br-md"
            : "bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-ink)] rounded-bl-md"
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
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ink)]/45 animate-bounce [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ink)]/45 animate-bounce [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ink)]/45 animate-bounce" />
    </div>
  );
}
