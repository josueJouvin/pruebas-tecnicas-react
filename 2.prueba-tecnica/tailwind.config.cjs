/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './public/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'responsive': 'repeat(auto-fit, minmax(300px, 1fr))'
      }
    }
  },
  plugins: []
}
