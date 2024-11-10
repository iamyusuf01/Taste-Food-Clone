/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
         
        'sm': '640',
        'md': '768',
        'lg': '1024',
        'xl': '1536',

    },
    extend: {
      colors: {
        primary: '#F72D57',
        secondary: '#F2BC57',
        gray: '#EDEDED',
        gray2:'#3F3F3F'
      }
    },
  },
  plugins: [],
}