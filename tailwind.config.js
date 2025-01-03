/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1a1a1a',
        'primary': '#ff9500', // The orange color from your design
      },
      backgroundColor: {
        'dark': '#1a1a1a',
      }
    },
  },
  plugins: [],
}

