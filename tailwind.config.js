/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        lightText: 'rgba(255, 255, 255, 0.87)',
        darkBackground: '#242424',
        primary: '#646cff',
        primaryHover: '#535bf2',
        darkButton: '#1a1a1a',
        lightHover: '#747bff',
        lightBackground: '#ffffff',
      },
      lineHeight: {
        normal: '1.5',
        h1: '1.1',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
      },
    },
  },
  plugins: [],
}
