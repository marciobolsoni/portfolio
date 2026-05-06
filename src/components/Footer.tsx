import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold">
            Marcio<span className="text-accent1"> Bolsoni</span>
          </p>
          <p className="text-sm text-muted">
            AWS Cloud Engineer · Based in Ireland · Open to remote &amp; on-site
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            aria-label="GitHub"
            href="https://github.com/marciobolsoni"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-white/5 text-muted hover:text-ink"
          >
            <Github size={18} />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/marciobolsoni"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-white/5 text-muted hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
          <Link
            aria-label="Contact"
            href="/contact"
            className="p-2 rounded-md hover:bg-white/5 text-muted hover:text-ink"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
      <div className="border-t border-line text-center text-xs text-muted py-4">
        © {new Date().getFullYear()} Marcio Bolsoni. Built with Next.js. Deployed on GitHub Pages.
      </div>
    </footer>
  );
}
