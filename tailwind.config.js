/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // we start to customize colors and fonts
  theme: {
    extend: {
      height: {
        header:'560px',
        rate: '400px',
      },
      fontSize: {
        h1: '2.6rem',
      },
      screens: {
        xs: '475px',
      },
      colors:{
        main:'#000',
        subMain:'#F20000',
        dry:'#000',
        promo:'#141414',
        star: '#FFB000',
        text: '#C0C0C0',
        border:'#4b5563',
        dryGray: '#E0D5D5',
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}