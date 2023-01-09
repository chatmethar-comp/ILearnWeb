/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary": "#EFA3C8",
        "lighter-1" : "#FAD3E7",
        "lighter-2" : "#F4D9E7",
        "secondary" :"#0081B4",
      }
    },
  },
  plugins: [],
}
