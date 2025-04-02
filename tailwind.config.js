/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.liquid",
    "./templates/*.json"
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'causten': ["'Causten'", 'Helvetica', 'Arial', 'sans-serif'],
        // 'alias': ["'Alias'", 'Helvetica', 'Arial', 'sans-serif'],
        // 'alias-bold': ["'Alias Bold'", 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        'black': '#141414',
        'white': '#fff',
        'gray': '#A3A3A3',
        'red': '#FF2500',
        'blue': '#005BC4',
        'light-gray': '#F7F8F8',
        'dark-gray': '#4A4A4A',
        'medium-gray': '#D8D8D8'
      },
      screens: {
        'xxl': {'min': '1536px'},
        'xxl-max': {'max': '1535px'},
        'xl-max': {'max': '1279px'},
        'lg-max': {'max': '1023px'},
        'md-max': {'max': '767px'},
        'sm-max': {'max': '639px'}
      }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('active', '&.active');
      addVariant('active-parent', '.active &');
      addVariant('open', '&[open]');
      addVariant('open-parent', '[open] &');
    }
  ]
}