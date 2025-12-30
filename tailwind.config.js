/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SpaceGrotesk-Medium', 'sans-serif'], // use as default sans
      },
    },
  },
  plugins: [],
}
