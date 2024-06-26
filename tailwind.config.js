const { sign } = require('crypto')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},

   fontSize:{
    'sm': '10px',
    'x': '20px',

   },

   fontWeight:{
      'hairline': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900,
   },

   lineHeight: {
    '21': '21.68px',
  },


  },
  plugins: [],
}

