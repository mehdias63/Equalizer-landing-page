/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      man: ["Manrope"],
    },
    extend: {
      colors: {
        black: "#191826",
        orang: "#FA7453",
        gray: "#6E8098",
        "light-gray": "#9DAEC2",
      },
    },
  },
  plugins: [],
};
