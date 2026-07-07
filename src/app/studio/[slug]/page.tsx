import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Blocks from "@/components/studio/Blocks";
import Reveal from "@/components/Reveal";
import { getProject, studioProjects } from "@/data/studio";

export function generateStaticParams() {
  return studioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Studio. Not found" };
  return {
    title: `${project.name}. ${project.oneLine} | Studio`,
    description: project.meta.description,
    openGraph: {
      title: `${project.name} · Studio`,
      description: project.meta.description,
      images: [
        {
          url: project.meta.ogImage,
          width: 1200,
          height: project.meta.ogHeight,
          alt: `${project.name}, campaign key visual`,
        },
      ],
    },
    // Mirror the per-brand Open Graph tags. Without this, Twitter cards fall
    // back to the root layout's twitter block (homepage title + Sillage image).
    twitter: {
      card: "summary_large_image",
      title: `${project.name} · Studio`,
      description: project.meta.description,
      images: [
        {
          url: project.meta.ogImage,
          alt: `${project.name}, campaign key visual`,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main
      data-theme={project.slug}
      className="cs-page min-h-screen bg-[var(--color-bg)] font-[var(--font-body)] text-[var(--color-text)]"
    >
      {/* Slim immersive header, replaces the global nav for full immersion */}
      <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/#studio"
            className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            ← Studio
          </Link>
          <span className="cs-wordmark text-sm text-[var(--color-ink)]">
            {project.name}
          </span>
          <Link
            href="/"
            className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            Paul Stanley
          </Link>
        </div>
      </header>

      {/* Hero, campaign key visual with the wordmark masthead */}
      <section className="cs-hero relative h-[82vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src={project.hero.image}
          alt={`${project.name} campaign key visual`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,23,20,0.3)] via-[rgba(26,23,20,0.08)] to-[rgba(26,23,20,0.7)]" />
        <div className="cs-hero-inner absolute inset-0 flex flex-col items-center justify-end px-6 pb-16 text-center sm:pb-20">
          <h1 className="cs-wordmark text-[clamp(2rem,9vw,6rem)] text-[var(--color-ondark)]">
            {project.hero.title}
          </h1>
          <p className="mt-4 font-[var(--font-display)] text-[clamp(1rem,3vw,1.6rem)] italic text-[var(--color-ondark)]/90">
            {project.hero.tagline}
          </p>
          <p className="cs-hero-meta mt-6 text-[0.68rem] uppercase tracking-[0.3em] text-[var(--color-ondark)]/70">
            {project.discipline} · {project.year}
          </p>
        </div>
      </section>

      {/* Intro lede */}
      <section className="cs-intro cs-narrow mx-auto max-w-2xl px-6 pb-4 pt-20 text-center">
        <Reveal>
          <p className="cs-display text-[clamp(1.15rem,2.8vw,1.65rem)] leading-relaxed text-[var(--color-ink)]">
            {project.intro}
          </p>
        </Reveal>
      </section>

      {/* Content blocks */}
      <div className="cs-blocks space-y-20 py-16 sm:space-y-28 sm:py-20">
        {project.blocks.map((block, i) => (
          <Blocks key={i} block={block} />
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-14 text-center">
          <span className="cs-wordmark text-lg text-[var(--color-ink)]">
            {project.name}
          </span>
          <p className="text-[0.74rem] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
            Built solo, end to end, with AI
          </p>
          {project.disclaimer && (
            <p className="max-w-xl text-[0.68rem] leading-relaxed text-[var(--color-text-dim)]">
              {project.disclaimer}
            </p>
          )}
          <div className="mt-2 flex items-center gap-6">
            <Link
              href="/#studio"
              className="text-[0.78rem] uppercase tracking-[0.2em] text-[var(--color-accent)] hover:underline"
            >
              ← All studio work
            </Link>
            <Link
              href="/"
              className="text-[0.78rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
