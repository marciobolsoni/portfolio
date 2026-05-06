import { skillGroups } from "@/data/skills";
import { certifications } from "@/data/experience";
import { Award, Languages } from "lucide-react";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <p className="text-xs tracking-widest uppercase text-accent1">About</p>
      <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">
        Cloud engineer with a hands-on, cost-aware mindset.
      </h1>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-5 text-ink/90 leading-relaxed">
          <p>
            I&apos;m an AWS-certified Cloud Engineer with experience designing,
            building and supporting infrastructure for telecom and enterprise
            workloads. I started in technical support at Ericsson — which is
            where I learned how production systems actually break — and moved
            into infrastructure design at Halian in Luxembourg, where I worked
            across architecture and DevOps for client engagements.
          </p>
          <p>
            Between 2021 and 2023 I took an intentional break from full-time
            employment to run a small Amazon FBA business and to be present for
            the birth of my first daughter. It was the right call. I came back
            sharper on cost-vs-value trade-offs, with two AWS certifications
            earned during that time, and ready to commit fully to engineering
            again.
          </p>
          <p>
            Today I focus on AWS infrastructure: serverless, containers, and
            Infrastructure as Code with Terraform. I care about boring things —
            least-privilege IAM, observability, reproducible deployments — and
            I think those boring things are what actually keep production
            running.
          </p>
          <p>
            I&apos;m looking for a full-time Cloud Engineer or DevOps Engineer
            role in Ireland, the UK, or fully remote in the EU.
          </p>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl glass p-5">
            <p className="text-xs uppercase tracking-widest text-accent1">
              Quick facts
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink/90">
              <li>📍 Based in Ireland</li>
              <li>🛂 EU work eligibility</li>
              <li>💼 Open to full-time, remote or on-site</li>
              <li>🗣️ English (fluent), Portuguese (native)</li>
            </ul>
          </div>
          <div className="rounded-2xl glass p-5">
            <p className="text-xs uppercase tracking-widest text-accent1">
              Certifications
            </p>
            <ul className="mt-3 space-y-3">
              {certifications.map((c) => (
                <li key={c.code}>
                  <div className="flex items-start gap-2">
                    <Award size={14} className="text-accent2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">{c.name}</p>
                      <p className="text-xs text-muted">ID: {c.code}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Technical skills */}
      <section className="mt-16">
        <p className="text-xs tracking-widest uppercase text-accent1">
          Technical skills
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
          What I work with
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-2xl glass p-5">
              <p className="font-semibold">{g.title}</p>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {g.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
