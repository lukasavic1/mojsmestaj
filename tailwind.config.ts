import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
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
        // Brand colors of the platforms we reference as a visual shorthand.
        // Booking.com and Airbnb are trademarks of their respective owners;
        // SvojSmeštaj is not affiliated with either.
        booking: "#003580",
        airbnb: "#FF5A5F",
        facebook: "#1877F2",
        meta: "#0866FF",
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
  plugins: [
    // Follows Računar / Tablet / Telefon in the preview frame, not browser width.
    plugin(({ addVariant }) => {
      addVariant("vp-d", ".tpl-vp-desktop &");
      addVariant("vp-t", ".tpl-vp-tablet &");
      addVariant("vp-m", ".tpl-vp-mobile &");
      addVariant("vp-dt", [".tpl-vp-desktop &", ".tpl-vp-tablet &"]);
    }),
  ],
};

export default config;
