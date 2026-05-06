export default function HeroBackground() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 500"
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#86efac" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Cloud platform */}
      <ellipse cx="600" cy="120" rx="320" ry="60" fill="url(#g1)" />
      {/* Server stacks */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={460 + i * 60}
          y={70}
          width="40"
          height="100"
          rx="4"
          fill="rgba(125,211,252,0.18)"
          stroke="rgba(125,211,252,0.5)"
        />
      ))}
      {/* Down lines */}
      <path
        d="M600 180 L600 240 L460 240 L460 320 M600 240 L740 240 L740 320 M600 240 L600 320"
        stroke="url(#g2)"
        strokeWidth="2"
        fill="none"
      />
      {/* Edge nodes */}
      {[
        [380, 340],
        [600, 340],
        [820, 340],
      ].map(([x, y], i) => (
        <rect
          key={i}
          x={x - 60}
          y={y}
          width="120"
          height="60"
          rx="8"
          fill="rgba(167,139,250,0.12)"
          stroke="rgba(167,139,250,0.45)"
        />
      ))}
    </svg>
  );
}
