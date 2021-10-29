module.exports = {
  mode: 'jit',

  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {
      colors:{
        social:"#696969"
       },
       fontFamily: {
        'inter': ["Montserrat"],
       
       },
       boxShadow:{
       myCard:"0px 4px 24px rgb(0 0 0 / 10%)"
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
