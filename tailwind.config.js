/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        background: '#1a2e4a', // Custom Navy Background
        foreground: '#ffffff', // Custom White Foreground
      },
      fontFamily: {
        serif: ['Instrument Serif', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths to your project structure
    './public/index.html',
  ],
};
