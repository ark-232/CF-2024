/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          500: '#FFD700', // Gold color
          600: '#E6C200', // Darker gold for hover states
        },
      },
    },
  },
  plugins: [],
};