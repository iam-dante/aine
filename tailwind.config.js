/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      work: ["Work Sans", "sans-serif"],
      cardo: ["Cardo", "serif"],
      leg: ["League Spartan", "sans-serif"],
    },
  },
  plugins: [],
};
