export default function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase bg-white/5 border border-line text-muted">
      {children}
    </span>
  );
}
