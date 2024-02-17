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

        subMain:'#F20000',
        dry:'#000',
        promo:'#141414',
        star: '#FFB000',
        text: '#C0C0C0',
        border:'#4b5563',
        dryGray: '#E0D5D5',  
      },
      backaroundImage: {
        'gradient-to-b':
        'Linear-gradient(to bottom, rgba (20,20,20,0) 0, rgba (20,20,20,.15) 15%, rgba(20,20,20,.35) 29%,rgba(20,20,20,.58)44%,#141414 68%,#141414 100%);',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}