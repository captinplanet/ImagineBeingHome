/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand-bg': '#F7F3EE',
        'white': '#FFFFFF',
        'warm-gray': '#4A4A4A',
        'light-gray': '#D9D6D2',
        'deep-teal': '#1F7A7A',
        'seafoam': '#AEE6DF',
        'light-seafoam': '#D9F3F0',
        'coral-accent': '#FF6F61',
        'warm-yellow': '#F5C84C',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem', // 16px - covering the 14-18px request
      }
    },
  },
  plugins: [],
}
