import { roles, certifications } from "@/data/experience";
import TechBadge from "@/components/TechBadge";
import { Award, MapPin, ExternalLink } from "lucide-react";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <p className="text-xs tracking-widest uppercase text-accent1">Timeline</p>
      <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">
        Professional evolution
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        A track record of designing, supporting, and optimising AWS
        infrastructure — including the honest gap I took for family and a
        small business.
      </p>

      <div className="mt-12 relative pl-6 md:pl-10 border-l border-line">
        {roles.map((r, idx) => (
          <div key={idx} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[7px] md:-left-[11px] top-1 w-3 h-3 md:w-5 md:h-5 rounded-full bg-bg border-2 border-accent1" />
            <div className="rounded-2xl glass p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm tracking-widest uppercase text-accent1">
                  {r.start} — {r.end}
                </p>
                <p className="text-sm text-muted inline-flex items-center gap-1">
                  <MapPin size={12} /> {r.location}
                </p>
              </div>
              <h2 className="mt-2 text-2xl font-semibold">{r.company}</h2>
              <p className="text-muted">{r.title}</p>
              <p className="mt-3 text-ink/90 leading-relaxed">{r.summary}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink/85">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent2">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {r.tech.map((t) => (
                  <TechBadge key={t}>{t}</TechBadge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16">
        <p className="text-xs tracking-widest uppercase text-accent1">
          Active certifications
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
          AWS credentials
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {certifications.map((c) => (
            <a
              key={c.code}
              href={c.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl glass p-5 hover:bg-white/5 transition group"
            >
              <div className="flex items-start gap-3">
                <Award size={18} className="text-accent2 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium">{c.name}</p>
                  <p className="text-xs text-muted mt-1">
                    Validation number:{" "}
                    <span className="font-mono">{c.code}</span>
                  </p>
                  <p className="mt-2 text-xs text-accent1 inline-flex items-center gap-1 group-hover:text-accent2 transition">
                    Verify on cp.certmetrics.com{" "}
                    <ExternalLink size={11} />
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
