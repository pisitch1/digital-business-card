/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          "fill-hover": withOpacity("--color-fill-hover"),
          "accent": withOpacity("--color-accent"),
          "accent-hover": withOpacity("--color-accent-hover"),
          "muted": withOpacity("--color-muted"),
        },
      },
      fontFamily: {
        // sans: ["Montserrat", "sans-serif"],
        sans: ["HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", "Helvetica, Arial", "sans-serif"],
        // sans: [ "Inter", "sans-serif", ],
      },
    },
  },
  plugins: [],
};
