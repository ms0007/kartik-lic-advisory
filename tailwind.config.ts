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
        lic: {
          dark: "#08162d",
          900: "#0b2046",
          800: "#112d61",
          700: "#173e83",
          600: "#1d53aa",
          500: "#2563eb",
          100: "#dbeafe",
          50: "#f0f6ff",
        },
        gold: {
          700: "#92680f",
          600: "#b38318",
          500: "#d49e24",
          400: "#e8b438",
          100: "#fef3c7",
          50: "#fffbeb",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
