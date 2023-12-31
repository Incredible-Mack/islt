/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Cormorant','Garamond'],
      'text':['Poiret One', 'cursive']
    },
    
  },
  plugins: [require('flowbite/plugin')],
    // other settings
  "tailwindCSS.includeLanguages": {
      "javascript": "javascript",
      "html": "HTML"
  },
  "editor.quickSuggestions": {
      "strings": true
  }
}

