import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(135 100% 50% / 0.18), transparent 60%), linear-gradient(180deg, hsl(150 20% 5%) 0%, hsl(150 25% 3%) 100%)",
        "section-glow":
          "linear-gradient(135deg, hsl(135 80% 18% / 0.35) 0%, hsl(150 20% 6% / 0.2) 50%, hsl(140 100% 45% / 0.12) 100%)",
        "cta-glow":
          "linear-gradient(120deg, hsl(140 90% 12%) 0%, hsl(135 100% 28% / 0.55) 50%, hsl(150 20% 6%) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px hsl(135 100% 50% / 0.15)",
        "glow-sm": "0 0 20px hsl(135 100% 50% / 0.12)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
