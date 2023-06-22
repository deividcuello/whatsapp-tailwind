/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      black: '#000000',
      tealGreen: '#128C7E',
      lightGreen: '#25D366',
      white: '#FFFFFF',
      blue: '#34B7F1',
      darkGray: '#666666',
      gray: '#999999'
    },
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

