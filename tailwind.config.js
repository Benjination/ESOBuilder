/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eso: {
          gold: '#D4AF37',
          dark: '#1a1a1a',
          darker: '#0d0d0d',
          blue: '#4A90E2',
          green: '#7ED321',
          red: '#D0021B',
          purple: '#9013FE',
        }
      },
      fontFamily: {
        'eso': ['Cinzel', 'serif'],
      }
    },
  },
  plugins: [],
}
