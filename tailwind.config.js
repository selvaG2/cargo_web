/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '2560px',
      },
      padding: {
        md: '2rem',
      },
    },
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
}

