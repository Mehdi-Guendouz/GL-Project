/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'serif'],
      },
    },
    colors: {
      'secondary': '#FCBB14',
      'white': '#FFFFFF',
      'dark': '#2E2E2E',
      'darkgray1': '#575757',
      'darkgray2': '#808080',
      'darkgray3': '#9A9A9A',
      'gray1': '#DEDEDE',
      'gray2': '#E9E9E9',
      'gray3': '#F5F5F5',
      'blue': '#0075FF',
    },
  },
  plugins: [],
}
