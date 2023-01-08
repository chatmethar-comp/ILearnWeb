/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "background" : "#FFFBEB",
        "backgrounddk" : "#EFDBCB",
        "primary" : "#251749",
        "secondary" : "#263159",
        "lighterSec" : "#495579",
        "green" : "#50FF50",
      }
    },
  },
  plugins: [],
}
