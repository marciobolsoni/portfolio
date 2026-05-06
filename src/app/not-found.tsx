import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-32 text-center">
      <p className="text-xs tracking-widest uppercase text-accent1">404</p>
      <h1 className="mt-3 text-4xl md:text-5xl font-semibold">
        Page not found.
      </h1>
      <p className="mt-4 text-muted">
        That URL doesn&apos;t exist on this site. Try one of these:
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
        <Link href="/" className="px-4 py-2 rounded-lg glass hover:bg-white/5">
          Home
        </Link>
        <Link href="/projects" className="px-4 py-2 rounded-lg glass hover:bg-white/5">
          Projects
        </Link>
        <Link href="/about" className="px-4 py-2 rounded-lg glass hover:bg-white/5">
          About
        </Link>
        <Link href="/contact" className="px-4 py-2 rounded-lg glass hover:bg-white/5">
          Contact
        </Link>
      </div>
    </div>
  );
}
