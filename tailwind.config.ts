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
          DEFAULT: "#E39A32",
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
          DEFAULT: "#E39A32",
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
        neon: "0 0 2.1px #E39A32, 0 0 4.2px #E39A32, 0 0 6.3px #E39A32",
        "neon-sm": "0 0 1.26px #E39A32, 0 0 2.52px #E39A32",
        "neon-lg": "0 0 4.2px #E39A32, 0 0 8.4px #E39A32, 0 0 12.6px #E39A32",
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
