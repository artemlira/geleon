/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        zona: ['Zona Pro', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        darkBlue: '#050038',
        lightBlue: '#38C6F4',
        darkGray: '#404040',
        yellow: '#F9C000',
        white: '#ffffff',
      },
      boxShadow: {
        'round': '13px 16px 8px rgba(0, 0, 0, 0.01), 7px 9px 7px rgba(0, 0, 0, 0.05), 3px 4px 5px rgba(0, 0, 0, 0.09), 1px 1px 3px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
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
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: '0.2s fade-in ease-in-out',
      },
    },
  },
  plugins: [],
};
