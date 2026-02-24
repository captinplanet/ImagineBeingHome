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
        'deep-teal': '#1F7A7A',
        'seafoam': '#AEE6DF',
        'coral-accent': '#FF6F61',
        'light-gray': '#D9D6D2',
        'light-seafoam': '#D9F3F0',
        'warm-yellow': '#F5C84C',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      borderRadius: {
        'button': '16px',
        'image': '16px',
        'xl': '16px', // Overriding xl just in case
      },
    },
    // Override default shadows to be empty/none
    boxShadow: {
      'none': 'none',
      'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      'DEFAULT': 'none',
      'md': 'none',
      'lg': 'none',
      'xl': 'none',
      '2xl': 'none',
      'inner': 'none',
    }
  },
  plugins: [],
}
