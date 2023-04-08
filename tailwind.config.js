/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      primary: '#155F2F',
      surface: '#B1CABA',
      hover: '#0A2F17',
    },
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
