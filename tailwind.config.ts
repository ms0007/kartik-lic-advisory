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
          dark: "#050e1f",
          950: "#071329",
          900: "#0b2046",
          800: "#102c61",
          700: "#163c7e",
          600: "#1c4e9f",
          500: "#2563eb",
          100: "#dbeafe",
          50: "#f0f6ff",
        },
        gold: {
          900: "#634407",
          800: "#7c5509",
          700: "#9e6e0d",
          600: "#c48914",
          500: "#d4af37", // Metallic Champagne Gold
          400: "#e5c158",
          300: "#f0d584",
          200: "#fae9b5",
          100: "#fdf4d7",
          50: "#fffdf7",
        },
        emerald: {
          950: "#022c22",
          900: "#064e3b",
          800: "#065f46",
          700: "#047857",
          600: "#059669",
          500: "#10b981",
          100: "#d1fae5",
          50: "#ecfdf5",
        },
        pearl: {
          50: "#ffffff",
          100: "#fdfdfb",
          200: "#f8f9fa",
          300: "#f1f3f7",
          400: "#e8ecf2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 45px -5px rgba(212, 175, 55, 0.45)',
        'blue-glow': '0 0 35px -5px rgba(37, 99, 235, 0.35)',
        'card-elevated': '0 12px 36px -8px rgba(11, 32, 70, 0.08), 0 4px 12px -2px rgba(11, 32, 70, 0.04)',
        'card-hover': '0 20px 48px -12px rgba(11, 32, 70, 0.14), 0 8px 24px -4px rgba(11, 32, 70, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
