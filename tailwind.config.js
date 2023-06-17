/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        zona: ['Zona Pro', 'sans-serif'],
      },
      backgroundImage: {
        heroBG: "url('./public/assets/heroBG.jpg') no-repeat center /cover",
      },
      colors: {
        black: '#000000',
        darkBlue: '#050038',
        lightBlue: '#38C6F4',
        darkGray: '#404040',
        yellow: '#F9C000',
        white: '#ffffff',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1536px',
        '4xl': '1664px',
      },
    },
  },
  plugins: [],
};
