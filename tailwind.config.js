module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'my-yellow':'#FFC931',
        'my-l-gray':'#8B8B8B'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
