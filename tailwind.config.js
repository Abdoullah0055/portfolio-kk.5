/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf6f1',
          100: '#f3e9d8',
          200: '#e6d2b5',
          300: '#d4b68a',
          400: '#c29a62',
          500: '#b08b54',
          600: '#a67c4d',
          700: '#8c6542',
          800: '#705238',
          900: '#5d4432',
          950: '#321f12',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f5edd6',
          300: '#ebe0b3',
          400: '#e0cf8a',
          500: '#d5c067',
          600: '#c9ae54',
          700: '#ada343',
          800: '#8f8237',
          900: '#756830',
          950: '#524422',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}