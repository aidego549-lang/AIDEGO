import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D7DD2",
          light: "#EBF4FF",
        },
        surface: "#F5F8FC",
        text: {
          DEFAULT: "#1A1A2E",
          muted: "#718096",
        },
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
