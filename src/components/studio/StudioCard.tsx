import Image from "next/image";
import Link from "next/link";
import type { StudioProject } from "@/data/studio";

export default function StudioCard({ project }: { project: StudioProject }) {
  return (
    <Link href={`/studio/${project.slug}`} className="group block">
      <article className="feature-card overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative aspect-[16/10] overflow-hidden">
          {project.film ? (
            <video
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={project.film.src}
              poster={project.film.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <Image
              src={project.thumbnail}
              alt={`${project.name}, ${project.oneLine}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-xl font-bold tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
              {project.name}
            </h3>
            <span className="font-mono text-[11px] text-[var(--color-text-dim)]">
              {project.year}
            </span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {project.oneLine}
          </p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
            {project.discipline}
          </p>
        </div>
      </article>
    </Link>
  );
}
