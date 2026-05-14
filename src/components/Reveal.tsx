"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add("in");
    };

    // If already in viewport at mount, reveal on next frame.
    const rect = el.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
    if (inView) {
      requestAnimationFrame(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);

    // Safety: if for any reason the observer never fires within 2s
    // (some headless browsers, pre-rendering, etc.), reveal anyway.
    const safety = window.setTimeout(reveal, 2000);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [delay]);

  const Tag = as;
  return (
    // @ts-expect-error polymorphic ref typing is fine at runtime
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
