/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#0ea5a4',
        glass: 'rgba(255,255,255,0.08)'
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
