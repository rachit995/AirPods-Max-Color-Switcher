const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        primary: '#0071e3',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
