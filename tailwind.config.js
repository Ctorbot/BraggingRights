/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,tx,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#F1F7ED',
        secondary: "#F55D3E",
        black: "#071013",
        razmicberry: "#8A4F7D",
        pacificblue: "#08A4BD"
      },
    },
  },
  plugins: [],
}