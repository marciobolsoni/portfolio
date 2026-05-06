"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

// IMPORTANT: replace with your real Formspree (or similar) endpoint before deploying.
// Sign up at https://formspree.io, create a form, and paste the action URL here.
// Until you replace this, the fallback is to open the user's mail client.
const FORM_ENDPOINT = "https://formspree.io/f/mqenlaer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (FORM_ENDPOINT.includes("REPLACE_WITH_YOUR_ID")) {
      // No endpoint configured — fall back to mailto.
      const params = new URLSearchParams({
        subject: `Portfolio enquiry from ${data.get("name") || "visitor"}`,
        body: String(data.get("message") || ""),
      });
      window.location.href = `mailto:marciobolsoni28@gmail.com?${params}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <p className="text-xs tracking-widest uppercase text-accent1">Contact</p>
      <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">
        Let&apos;s talk about cloud roles.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Recruiters and hiring managers — drop me a message about Cloud
        Engineer, DevOps Engineer, Site Reliability or Platform roles in
        Ireland, the UK, or remote across the EU. I usually reply within a
        working day.
      </p>

      <div className="mt-12 grid md:grid-cols-5 gap-6">
        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="md:col-span-3 rounded-2xl glass p-6 space-y-4"
        >
          <div>
            <label className="text-xs uppercase tracking-widest text-muted">
              Your name
            </label>
            <input
              required
              name="name"
              type="text"
              className="mt-1 w-full bg-bg2 border border-line rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-accent1"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted">
              Email
            </label>
            <input
              required
              name="email"
              type="email"
              className="mt-1 w-full bg-bg2 border border-line rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-accent1"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted">
              Company (optional)
            </label>
            <input
              name="company"
              type="text"
              className="mt-1 w-full bg-bg2 border border-line rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-accent1"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted">
              What&apos;s the role / project?
            </label>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-1 w-full bg-bg2 border border-line rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-accent1"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-name-gradient text-bg font-semibold hover:brightness-110 disabled:opacity-60"
          >
            <Send size={14} />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "ok" && (
            <p className="text-sm text-accent2">
              Thanks — I&apos;ll get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Please email me directly at
              marciobolsoni28@gmail.com.
            </p>
          )}
        </form>

        {/* Direct channels */}
        <aside className="md:col-span-2 space-y-4">
          <a
            href="mailto:marciobolsoni28@gmail.com"
            className="flex items-center gap-3 rounded-2xl glass p-5 hover:bg-white/5"
          >
            <Mail size={18} className="text-accent1" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Email
              </p>
              <p className="text-sm">marciobolsoni28@gmail.com</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/marciobolsoni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl glass p-5 hover:bg-white/5"
          >
            <Linkedin size={18} className="text-accent1" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                LinkedIn
              </p>
              <p className="text-sm">linkedin.com/in/marciobolsoni</p>
            </div>
          </a>
          <a
            href="https://github.com/marciobolsoni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl glass p-5 hover:bg-white/5"
          >
            <Github size={18} className="text-accent1" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                GitHub
              </p>
              <p className="text-sm">github.com/marciobolsoni</p>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-2xl glass p-5">
            <MapPin size={18} className="text-accent1" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Location
              </p>
              <p className="text-sm">Ireland — open to UK &amp; EU remote</p>
            </div>
          </div>
          <p className="text-xs text-muted px-1">
            Phone available on request via email — kept off the public page to
            avoid scrapers.
          </p>
        </aside>
      </div>
    </div>
  );
}
