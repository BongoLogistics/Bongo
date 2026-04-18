/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bongo: {
          orange: '#E36A41',
          black: '#000000',
          white: '#FFFFFF',
          lightGray: '#F3F3F3',
          darkGray: '#1A1A1A'
        },
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