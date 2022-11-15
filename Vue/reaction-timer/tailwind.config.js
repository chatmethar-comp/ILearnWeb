/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#59C1BD",
        secondary: "#A0E4CB",
        bluePrimary: "#0D4C92",
      }
    },
  },
  plugins: [],
}
