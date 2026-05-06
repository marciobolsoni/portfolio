"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/60 border-b border-line">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-ink hover:opacity-90"
        >
          marcio<span className="text-accent1">.</span>cloud
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className={`transition-colors ${
                isActive(it.href)
                  ? "text-accent1"
                  : "text-muted hover:text-ink"
              }`}
            >
              {it.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md hover:bg-white/5"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-line bg-bg/95 px-5 py-3 flex flex-col gap-3 text-sm">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              onClick={() => setOpen(false)}
              className={`py-1 ${
                isActive(it.href) ? "text-accent1" : "text-muted"
              }`}
            >
              {it.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
