/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        movyra: {
          dark: '#121212',
          blue: '#2563EB',
          peach: '#FF8A65',
          premium: '#4B5563',
          bg: '#FAFAFA'
        }
      }
    },
  },
  plugins: [],
}