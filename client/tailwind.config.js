/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Exo 2',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1440px',
    },
    extend: {
      colors: {
        body: '#EDEDF4',
        primary: '#000F08',
        accent: {
          DEFAULT: '#67E0A3',
          hover: '#317B22',
        },
      },
      backgroundImage: {
        mainSlider: "url('img/img2.png')",
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0,0 )' },
          '20%, 80%': { transform: 'translate3d(2px, 0,0 )' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0,0 )' },
          '40%, 60%': { transform: 'translate3d(4px, 0,0 )' },
        },
      },
      animation: {
        shake: 'shake 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
