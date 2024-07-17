/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#7fff00',
        secondary: '#8b5cf6'

      },
      fontFamily: {
        'display': ['Roboto Flex' ]
      }
    },
  },
  plugins: [],
}

