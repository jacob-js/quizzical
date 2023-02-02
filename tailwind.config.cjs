/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          800: '#4D5B9E',
          900: '#293264'
        }
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif']
      },
      spacing: {
        15: '3.75rem'
      }
    },
  },
  plugins: [],
}
