/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        customs: "repeat(auto-fit, minmax(250px, 1fr))",
        customs1: "repeat(auto-fit, minmax(250px, 1fr))"
      }
    },
  },
  plugins: [],
};
