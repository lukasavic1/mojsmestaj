import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Narrow phones can't fit the brand wordmark alongside the language
        // switcher and the nav CTA, so the wordmark appears from here up.
        xs: "440px",
      },
      colors: {
        sea: "#1B3A4B",
        "sea-light": "#2C5064",
        sand: "#F2E8D5",
        "sand-deep": "#E7D8B8",
        roof: "#B5552A",
        "roof-dark": "#953F1B",
        olive: "#6B7A4F",
        paper: "#FCFAF5",
        ink: "#22303A",
        "ink-soft": "#4A5A64",
        sun: "#E3A17C",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl2: "22px",
      },
    },
  },
  plugins: [],
};

export default config;
