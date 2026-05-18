/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#ff6600',
        background: '#f4f4f0',
        accent: '#000000',
        secondary: '#2d2d2b',
        muted: '#e5989bff'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage: {
        grain: "radial-gradient(circle at top left, rgba(255,255,255,0.03), transparent 25%), radial-gradient(circle at bottom right, rgba(255,255,255,0.02), transparent 20%)"
      }
    }
  },
  plugins: []
}
