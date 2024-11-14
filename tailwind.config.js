/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "gradient-start": "#a08ced",
        "gradient-end": "#528bef",
      },
    },
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
      redHatText: ["Red Hat Text", "sans-serif"],
    },
  },
  plugins: [],
};
