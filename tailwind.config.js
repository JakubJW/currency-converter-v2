/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/components/Form.js', './src/components/Selector.js', './src/App.js'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'custom-green': '#68E8D1',
      'custom-blue': '#2E4BAF'
    },

    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans]
    },

    extend: { 
      fontFamily: { 
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    require("daisyui")
  ],

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: '#68E8D1',
          "primary-focus": "#68E8D1",
          secondary: '#2E4BAF'
        }
      }
    ]
  }
}
