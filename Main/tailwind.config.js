// In order to continue using the default of tailwind, i will have to create a const, such as this "const colors = require('tailwindcss/colors')" as well as changing out the names of the color its self to standard tailwind names.

module.exports = {

  darkMode: 'class',

  content: ["./main/src/**/*.{html,js}"],

    theme: {

      colors: {

        // if i decide to use this then, i can no longer use the colors that come with tailwindcss, and can only use the colors that are part of this module.

        // // To have a palette of multiple shades of the same color then, i will need to group them together, for example 'tahiti': { 100: '#cffafe', 200: '#a5f3fc' },

        // This example above would give me multiple shade of the same color, aka tahiti would have multiple shades here.

        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'darkmode': '#222222',
        'black': '#000000',
        'grey': '#808080',
        'dark-grey': '#424242',
        'light-grey': '#C4C2C4',
        'Night': '#0C090A',
        'Charcoal': '#34282C',	
        'Oil': '#3B3131',	
        'Dark-Gray': '#3A3B3C',	
        'Light-Black': '#454545',	
        'Black-Cat': '#413839',	
        'Iridium': '#3D3C3A',
        'Black-Eel': '#463E3F',	
        'Black-Cow': '#4C4646',	
        'Gray-Wolf': '#504A4B',	
        'Vampire-Gray': '#565051',
        'Iron-Gray': '#52595D',	
        'Gray-Dolphin': '#5C5858',	
        'Carbon-Gray': '#625D5D',	
        'Ash-Gray': '#666362',
        'DimGrey': '#696969',	
        'Nardo-Gray': '#686A6C',	
        'Cloudy-Gray': '#6D6968',	
        'Smokey-Gray': '#726E6D',	
        'Alien-Gray': '#736F6E',
        'Sonic-Silver': '#757575',
        'Platinum-Gray': '#797979',	
        'Granite': '#837E7C',
        'Battleship-Gray': '#848482',	
        'Gunmetal-Gray': '#8D918D',	
        'DarkGrey': '#A9A9A9',
        'Gray-Cloud': '#B6B6B4',	
        'Silver': '#C0C0C0',	
        'Pale-Silver': '#C9C0BB',	
        'Gray-Goose': '#D1D0CE',
        'Platinum-Silver': '#CECECE',	
      },

      fontFamily: {

        sans: ['Outfit', 'sans-serif'],

      },

      container: {

        center:true,
        padding: "2em"

      },
  
      extend: {},
    },

  plugins: [],

}
