/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        clue: {
          night: '#21186b',
          panel: '#31399e',
          cyan: '#39bff4',
          pink: '#df158b',
          ink: '#11121d',
        },
      },
      fontFamily: {
        display: ['Bangers', 'Impact', 'sans-serif'],
        hand: ['Patrick Hand', 'Comic Sans MS', 'cursive'],
      },
    },
  },
  plugins: [],
};
