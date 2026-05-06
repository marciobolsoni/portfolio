import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <p className="text-xs tracking-widest uppercase text-accent1">Portfolio</p>
      <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">
        Four projects, four corners of cloud engineering.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Each case study is a real GitHub repository. Click through for the
        problem statement, architecture, AWS services I used and why, and what
        I&apos;d do differently next time.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  );
}
