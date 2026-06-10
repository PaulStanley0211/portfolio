import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import SiteBackground from "@/components/SiteBackground";
import StudioCard from "@/components/studio/StudioCard";
import { studioProjects } from "@/data/studio";

export const metadata: Metadata = {
  title: "Studio — Brand & Creative | Paul Stanley Ganganapalli",
  description:
    "A creative studio: full brand worlds — identity, art direction and film — built end to end with AI.",
  openGraph: {
    title: "Studio — Brand & Creative",
    description:
      "Full brand worlds — identity, art direction and film — built end to end with AI.",
    type: "website",
    url: "https://www.paulstanley.dev/studio",
    images: [
      {
        url: "https://www.paulstanley.dev/sillage/og-poster.jpg",
        width: 1200,
        height: 679,
        alt: "Sillage — a luxury fragrance house built end to end with AI",
      },
    ],
  },
};

export default function StudioPage() {
  return (
    <main className="relative min-h-screen grain">
      <SiteBackground />
      <Nav />

      <section className="mx-auto max-w-6xl px-6 pb-28 pt-36 sm:pt-44">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="section-eyebrow">Studio</span>
            <div className="h-px max-w-[120px] flex-1 bg-[var(--color-border)]" />
          </div>
          <h1 className="section-title max-w-3xl text-[clamp(2.2rem,7vw,5rem)] text-[var(--color-ink)]">
            Brand <span className="text-accent">&amp;</span> Creative
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-[var(--color-text-muted)]">
            A separate room from the engineering work — full brand worlds built
            end to end with AI: naming, identity, product, campaign and film.
            Open one to step inside.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studioProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <StudioCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
