/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        zona: "'Zona Pro', sans-serif",
      },
      colors: {
        black: '#000000',
        darkBlue: '#050038',
        lightBlue: '#38C6F4',
        darkGray: '#404040',
        yellow: '#F9C000',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
