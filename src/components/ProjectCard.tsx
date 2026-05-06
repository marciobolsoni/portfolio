import Link from "next/link";
import TechBadge from "./TechBadge";
import CardArt from "./CardArt";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group relative rounded-2xl glass overflow-hidden flex flex-col">
      <div className="aspect-[16/9] relative bg-gradient-to-br from-bg2 to-bg overflow-hidden">
        <CardArt category={p.category} />
        {/* Soft bottom gradient so the title stays legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg2/95 via-bg2/30 to-transparent" />
        <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase text-accent1 bg-accent1/10 border border-accent1/20 rounded-full px-2 py-1 backdrop-blur-sm">
          {p.category}
        </span>
        <p className="absolute bottom-5 left-5 right-5 text-2xl md:text-3xl font-semibold leading-tight text-ink/95">
          {p.shortTitle ?? p.title}
        </p>
      </div>
      <div className="p-5 flex-1 flex flex-col gap-4">
        <p className="text-sm text-muted leading-relaxed">{p.tagline}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tech.slice(0, 5).map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>
        <div className="mt-auto pt-2 flex items-center justify-between">
          <Link
            href={`/projects/${p.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent1 hover:text-accent2"
          >
            Case study <ArrowUpRight size={14} />
          </Link>
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="text-muted hover:text-ink"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
