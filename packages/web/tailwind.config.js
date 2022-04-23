/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Recursive", "sans-serif"],
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
  presets: [require("windy-radix-palette")],
};