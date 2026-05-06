import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0f1f",
        bg2: "#0d1428",
        ink: "#e6edf3",
        muted: "#94a3b8",
        accent1: "#7dd3fc",
        accent2: "#86efac",
        accent3: "#a78bfa",
        line: "rgba(148,163,184,0.12)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(1200px 600px at 50% -10%, rgba(125,211,252,0.18), transparent 60%), radial-gradient(800px 400px at 20% 100%, rgba(167,139,250,0.10), transparent 60%)",
        "name-gradient":
          "linear-gradient(90deg, #7dd3fc 0%, #a5f3fc 35%, #86efac 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
