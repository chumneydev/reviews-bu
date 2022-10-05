/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  
    extend: {
        colors: {
            'dev': {
                'green': '#004643',
                'teal': '#abd1c6',
                'salmon': '#e16162',
                'yellow': '#f9bc60',
                'grey': '#e8e4e6',
                'dark': '#001e1d',
            }
        },        
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
