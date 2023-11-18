/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#6AA438",
        secondary: "#83c24d",
        accent: "#7238A4",
        neutral: "#090909",
        "base-100": "#E5F5E1",
        info: "#386AA4",
        success: "#38A43C",
        warning: "#d96600",
        error: "#A43C38",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
