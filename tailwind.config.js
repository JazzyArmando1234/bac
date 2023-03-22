/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('flowbite/plugin')],
}