/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sundial-yellow': '#FACC15', // Example warm yellow
        'sundial-orange': '#FB923C', // Example warm orange
      }
    },
  },
  plugins: [],
}
