/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'BgFound': '#F2F4F7',
        'btn-Enter': '#42B72A',
        'colorLink': '#0866FF',
        'btnCancel' : '#FF4B42',
        'bgRecuperationUser' : '#323543',
        'bgGrayCustom' : '#E9EBEE'
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #00b09b, #96c93d)'
      }
    },
  },
  plugins: [],
}

