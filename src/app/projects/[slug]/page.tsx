import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import TechBadge from "@/components/TechBadge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProjectBySlug(params.slug);
  if (!p) return { title: "Project not found" };
  return { title: p.title, description: p.tagline };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = getProjectBySlug(params.slug);
  if (!p) return notFound();

  return (
    <article className="max-w-4xl mx-auto px-5 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
      >
        <ArrowLeft size={14} /> All projects
      </Link>

      <p className="mt-6 text-xs tracking-widest uppercase text-accent1">
        {p.category}
      </p>
      <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">
        {p.title}
      </h1>
      <p className="mt-4 text-lg text-ink/85 leading-relaxed">{p.tagline}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <TechBadge key={t}>{t}</TechBadge>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/5 text-sm"
          >
            <Github size={14} /> View repository
          </a>
        )}
        {p.liveDemo && (
          <a
            href={p.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/5 text-sm"
          >
            <ExternalLink size={14} /> Live demo
          </a>
        )}
      </div>

      {p.diagramUrl && (
        <figure className="mt-10 rounded-2xl glass overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.diagramUrl}
            alt={`Architecture diagram for ${p.title}`}
            className="w-full h-auto"
          />
          <figcaption className="px-5 py-3 text-xs text-muted border-t border-line">
            Architecture diagram — created in Lucidchart.
          </figcaption>
        </figure>
      )}

      <Section title="Problem">{p.problem}</Section>
      <Section title="Solution">{p.solution}</Section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Architecture</h2>
        <ul className="mt-3 space-y-2 text-ink/90">
          {p.architecture.map((a, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-accent1">▸</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Outcomes</h2>
        <ul className="mt-3 space-y-2 text-ink/90">
          {p.outcomes.map((o, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-accent2">✓</span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </section>

      <Section title="What I&apos;d do differently">{p.whatILearned}</Section>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="mt-3 text-ink/90 leading-relaxed">{children}</p>
    </section>
  );
}
