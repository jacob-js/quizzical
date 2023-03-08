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
        },
        light: '#F5F7FB',
        'light-blue': '#D6DBF5',
        success: '#94D7A2'
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
