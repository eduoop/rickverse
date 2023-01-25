/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': ' #FF0B3B',
        'red-200': ' #AF0B42',
        'purple': '#110E2F'
      },
    },
  },
  plugins: [],
}