import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#f6f0e4",
        vellum: "#fffaf0",
        archive: "#12382f",
        cedar: "#285244",
        steppe: "#4f8fb3",
        ink: "#1f2925",
        muted: "#6f776f",
        gold: "#b99342"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mongolian: ["var(--font-mongolian)", "Noto Serif Mongolian", "serif"]
      },
      boxShadow: {
        archive: "0 18px 60px rgba(18, 56, 47, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
