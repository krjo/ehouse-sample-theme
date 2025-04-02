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
        'black': '#202020',
        'white': '#fff',
        'gray': '#868686',
        'red': '#868686',
        'blue': '#779FFF',
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