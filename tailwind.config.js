/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'verdana' : 'Verdana'
      },
      colors: {
        'btnEnter' : '#42B72A',
        'colorLink' : '#555',
        'btncreate' : '#0866FF'
      },
      spacing: {
        '51px' : '51px',
        '550px' : '550px',
        '62px' : '62px',
        '400px' : '400px',
        '350px' : '350px'
      },
      screens: {
        'min-h-900': {'raw': '(min-height: 900px)'}
      }
    },
  },
  plugins: [],
}