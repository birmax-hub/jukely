import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        primary: {
          DEFAULT: "#E08A2E",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          foreground: "#ededed",
        },
        destructive: {
          DEFAULT: "#FF4646",
          foreground: "#ffffff",
        },
        success: {
          DEFAULT: "#00E676",
          foreground: "#0D0D0D",
        },
        muted: {
          DEFAULT: "#262626",
          foreground: "#a3a3a3",
        },
        accent: {
          DEFAULT: "#E08A2E",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#1A1A1A",
          foreground: "#ededed",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          foreground: "#ededed",
        },
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
      boxShadow: {
        neon: "0 0 3.5px #E08A2E, 0 0 7px #E08A2E, 0 0 10.5px #E08A2E",
        "neon-sm": "0 0 2.1px #E08A2E, 0 0 4.2px #E08A2E",
        "neon-lg": "0 0 7px #E08A2E, 0 0 14px #E08A2E, 0 0 21px #E08A2E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
