/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding:{
        DEFAULT: '15PX',

      }

    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
    },
    fontFamily:{
      primary: 'Khand',
      secondary: 'Oxygen'
    },
    backgroundImage:{
      bg: 'url(/assets/)',
    },

    extend: {
      colors: {
        primary: '#a0938c',
        secondary: '#9A8E87',
      },
       
      },
    },
  
  plugins: [],
}
