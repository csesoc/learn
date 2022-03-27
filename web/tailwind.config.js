/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { sans: ["Recursive", "sans-serif"] },
    extend: {},
  },
  plugins: [],
};
