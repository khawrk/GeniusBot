/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'navy-bg': '#415B77',
      'cream-bg': '#F4F3EE',
      'light-gray': '#D9D9D9',
      'lighter-blue': '#778DA8',
      'white': '#FFF',
      'lightgray-text': '#B3B3B2'
    }
  },
  plugins: [],
}

