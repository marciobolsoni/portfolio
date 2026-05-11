import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { ArrowRight, Award, MapPin, Github, Download, ExternalLink } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <HeroBackground />
        <div className="relative max-w-6xl mx-auto px-5 pt-20 pb-24 md:pt-28 md:pb-32">
          <p className="text-sm tracking-widest uppercase text-accent1 mb-4 flex items-center gap-2">
            <MapPin size={14} /> Based in Ireland · open to remote &amp; on-site
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="bg-name-gradient bg-clip-text text-transparent">
              Marcio Bolsoni
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-2xl text-ink/85 leading-snug">
            AWS-certified Cloud Engineer building{" "}
            <span className="text-accent1">scalable</span>,{" "}
            <span className="text-accent2">cost-aware</span> infrastructure with
            Terraform, Kubernetes and serverless on AWS.
          </p>
          <p className="mt-4 max-w-2xl text-muted">
            Solutions Architect Associate · Cloud Practitioner. Hands-on with
            production AWS workloads, IaC and CI/CD. Available for full-time
            roles in Ireland, the UK or remote across the EU.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-name-gradient text-bg font-semibold hover:brightness-110"
            >
              See case studies <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-white/5"
            >
              Let&apos;s talk
            </Link>
            <a
              href="https://github.com/marciobolsoni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-white/5"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1CmxlQNuq6yhPFAu-y9DGBmAdMu7JqVZR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-white/5"
            >
              <Download size={16} /> Download my CV
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted">
            <a
              href="https://cp.certmetrics.com/amazon/en/public/verify/credential/7PJFFX9K0M1Q1DS6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-ink transition group"
              title="Verify on cp.certmetrics.com · code 7PJFFX9K0M1Q1DS6"
            >
              <Award size={14} className="text-accent2" />
              AWS Certified Solutions Architect — Associate
              <ExternalLink size={11} className="opacity-60 group-hover:opacity-100" />
            </a>
            <a
              href="https://cp.certmetrics.com/amazon/en/public/verify/credential/71EZGCBCXNF4Q39M"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-ink transition group"
              title="Verify on cp.certmetrics.com · code 71EZGCBCXNF4Q39M"
            >
              <Award size={14} className="text-accent2" />
              AWS Certified Cloud Practitioner
              <ExternalLink size={11} className="opacity-60 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-accent1">
              Featured work
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              Real builds, not template cards
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-1.5 text-sm text-accent1 hover:text-accent2"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-6xl mx-auto px-5 py-12">
        <div className="rounded-2xl glass p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">
              Hiring an AWS / DevOps engineer?
            </h3>
            <p className="text-muted mt-2 max-w-xl">
              I&apos;m looking for full-time Cloud Engineer or DevOps roles in
              Ireland, the UK, or remote in the EU. Happy to discuss specific
              technical challenges before we get to a CV.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-name-gradient text-bg font-semibold hover:brightness-110"
          >
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
