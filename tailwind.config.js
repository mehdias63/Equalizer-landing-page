/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ibm: ["IBM Plex Sans"],
    },
    extend: {
      colors: {
        "black": "#191826",
        "orange": "#FA7453",
        "gray": "#6E8098",
        "white":"#FCFAF9",
        "light-green":"#66E2DC",
        "yellow":"#FFB964",
        
      },
    },
  },
  plugins: [],
};
