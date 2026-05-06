import type { Project } from "@/data/projects";

/**
 * Per-category abstract SVG art that fills the top of a project card.
 * No stock photos — each category gets its own illustration so cards never
 * look duplicated.
 */
export default function CardArt({ category }: { category: Project["category"] }) {
  switch (category) {
    case "Serverless":
      return <ServerlessArt />;
    case "Infrastructure as Code":
      return <IacArt />;
    case "Containers":
      return <ContainersArt />;
    case "CI/CD":
      return <CICDArt />;
    default:
      return <FallbackArt />;
  }
}

function ServerlessArt() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <radialGradient id="sg1" cx="30%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#ed7100" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#0a0f1f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sg2" cx="80%" cy="70%" r="70%">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0a0f1f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#sg1)" />
      <rect width="400" height="200" fill="url(#sg2)" />
      {/* lambda lightning bolts scattered */}
      <g opacity="0.8">
        {[
          [70, 60, 1],
          [180, 100, 1.4],
          [290, 60, 1.1],
          [330, 130, 0.8],
          [120, 140, 0.9],
          [240, 40, 0.7],
        ].map(([x, y, s], i) => (
          <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
            <path
              d="M0 0 L14 0 L8 12 L20 12 L4 32 L10 18 L-2 18 Z"
              fill="#ed7100"
              fillOpacity="0.65"
              stroke="#ed7100"
              strokeOpacity="0.9"
            />
          </g>
        ))}
      </g>
      {/* particle dots */}
      <g fill="#fff" opacity="0.4">
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={i}
            cx={(i * 41) % 400}
            cy={((i * 71) % 180) + 10}
            r={i % 3 === 0 ? 1.6 : 1}
          />
        ))}
      </g>
    </svg>
  );
}

function IacArt() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <radialGradient id="ig1" cx="50%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0a0f1f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ig2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#ig1)" />
      {/* stacked isometric cubes */}
      <g transform="translate(200 110)" opacity="0.85">
        {[
          [0, 0, "#a78bfa"],
          [-40, -22, "#7dd3fc"],
          [40, -22, "#86efac"],
          [-80, -44, "#a78bfa"],
          [0, -44, "#7dd3fc"],
          [80, -44, "#a78bfa"],
          [-40, -66, "#86efac"],
          [40, -66, "#7dd3fc"],
          [0, -88, "#a78bfa"],
        ].map(([x, y, c], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <path
              d="M0 0 L24 -14 L48 0 L24 14 Z"
              fill={c as string}
              fillOpacity="0.18"
              stroke={c as string}
              strokeOpacity="0.8"
            />
            <path d="M0 0 L0 18 L24 32 L24 14 Z" fill={c as string} fillOpacity="0.08" stroke={c as string} strokeOpacity="0.55" />
            <path d="M48 0 L48 18 L24 32 L24 14 Z" fill={c as string} fillOpacity="0.04" stroke={c as string} strokeOpacity="0.55" />
          </g>
        ))}
      </g>
      {/* code-like lines on the side */}
      <g stroke="#7dd3fc" strokeOpacity="0.4" strokeLinecap="round">
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1="20" y1={28 + i * 14} x2={50 + (i % 3) * 25} y2={28 + i * 14} strokeWidth="2" />
        ))}
      </g>
    </svg>
  );
}

function ContainersArt() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <radialGradient id="cg1" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#86efac" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0a0f1f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#cg1)" />
      {/* Hexagonal cluster representing pods */}
      <g transform="translate(200 100)" opacity="0.85">
        {/* Center hex */}
        {[
          [0, 0, 1.4],
          [-58, -34, 1],
          [58, -34, 1],
          [-58, 34, 1],
          [58, 34, 1],
          [-116, 0, 0.8],
          [116, 0, 0.8],
        ].map(([x, y, s], i) => (
          <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
            <polygon
              points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15"
              fill="none"
              stroke="#86efac"
              strokeOpacity={i === 0 ? 0.95 : 0.55}
              strokeWidth={i === 0 ? 2 : 1.4}
            />
            {i === 0 && (
              <text
                x="0"
                y="6"
                textAnchor="middle"
                fontFamily="ui-monospace, monospace"
                fontSize="14"
                fill="#86efac"
                fillOpacity="0.85"
              >
                k8s
              </text>
            )}
          </g>
        ))}
      </g>
      {/* Connection lines between hexes */}
      <g stroke="#86efac" strokeOpacity="0.25" strokeWidth="1">
        <line x1="200" y1="100" x2="142" y2="66" />
        <line x1="200" y1="100" x2="258" y2="66" />
        <line x1="200" y1="100" x2="142" y2="134" />
        <line x1="200" y1="100" x2="258" y2="134" />
      </g>
    </svg>
  );
}

function CICDArt() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <linearGradient id="pg1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#86efac" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#pg1)" opacity="0.18" />
      {/* Pipeline stages */}
      <g transform="translate(0 100)">
        {[
          { x: 40, label: "src", color: "#7dd3fc" },
          { x: 130, label: "build", color: "#a78bfa" },
          { x: 220, label: "test", color: "#a78bfa" },
          { x: 310, label: "deploy", color: "#86efac" },
        ].map((stage, i) => (
          <g key={i} transform={`translate(${stage.x} 0)`}>
            <circle cx="0" cy="0" r="22" fill="none" stroke={stage.color} strokeOpacity="0.85" strokeWidth="2" />
            <circle cx="0" cy="0" r="8" fill={stage.color} fillOpacity="0.4" />
            <text x="0" y="44" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" letterSpacing="2" fill={stage.color} fillOpacity="0.9">
              {stage.label.toUpperCase()}
            </text>
          </g>
        ))}
        {/* Connecting line */}
        <path
          d="M62 0 L108 0 M152 0 L198 0 M242 0 L288 0"
          stroke="url(#pg1)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {/* Arrow flowing along path */}
        <g opacity="0.85">
          <path d="M325 -6 L335 0 L325 6 Z" fill="#86efac" />
        </g>
      </g>
      {/* Top-left ticks suggesting commit history */}
      <g stroke="#7dd3fc" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round">
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={i} x1={20 + i * 14} y1={28} x2={20 + i * 14} y2={28 + (i % 2 === 0 ? 14 : 8)} />
        ))}
      </g>
    </svg>
  );
}

function FallbackArt() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <radialGradient id="fg1" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0a0f1f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#fg1)" />
    </svg>
  );
}
