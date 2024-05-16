/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'texture': "url('./src/assets/form.svg')",
      },
      fontFamily: {
        'openSans': ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}