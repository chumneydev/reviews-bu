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
            'bay': {
                DEFAULT: '#3D5A80',
                '50': '#A2B7D3',
                '100': '#94ACCC',
                '200': '#7897BF',
                '300': '#5D82B2',
                '400': '#4A6D9C',
                '500': '#3D5A80',
                '600': '#2B3F5A',
                '700': '#192534',
                '800': '#070A0E',
                '900': '#000000'
            },           
            'sky': {
                DEFAULT: '#98C1D9',
                '50': '#FFFFFF',
                '100': '#FFFFFF',
                '200': '#F1F7FA',
                '300': '#D4E5EF',
                '400': '#B6D3E4',
                '500': '#98C1D9',
                '600': '#6FA8CA',
                '700': '#4690BB',
                '800': '#367093',
                '900': '#27516A'
            },
            'foam': {
                DEFAULT: '#E0FBFC',
                '50': '#FFFFFF',
                '100': '#FFFFFF',
                '200': '#FFFFFF',
                '300': '#FFFFFF',
                '400': '#FFFFFF',
                '500': '#E0FBFC',
                '600': '#ADF4F7',
                '700': '#7AEEF2',
                '800': '#47E7ED',
                '900': '#16DEE5'
            },
            'burnt': {
                DEFAULT: '#EE6C4D',
                '50': '#FEF6F5',
                '100': '#FCE7E2',
                '200': '#F9C8BD',
                '300': '#F5AA97',
                '400': '#F28B72',
                '500': '#EE6C4D',
                '600': '#E9421A',
                '700': '#B93212',
                '800': '#86240D',
                '900': '#531608'
            },
            'clay': {
                DEFAULT: '#293241',
                '50': '#788BAA',
                '100': '#6B80A2',
                '200': '#586C8C',
                '300': '#495873',
                '400': '#39455A',
                '500': '#293241',
                '600': '#13181F',
                '700': '#000000',
                '800': '#000000',
                '900': '#000000'
            },
        }, 
        gridTemplateColumns: {
            'admin': '300px minmax(0, 1fr)',
        }       
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
