/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'microsoft-blue': '#0078D4',
        'microsoft-dark': '#1F1F1F',
        'microsoft-light': '#F3F3F3',
      },
      animation: {
        'tile-pop': 'tilePop 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        tilePop: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}