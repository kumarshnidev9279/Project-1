/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          navy: '#0f172a',
          slate: '#1e293b',
          border: '#e2e8f0',
          bg: '#f8fafc',
          accent: '#1e40af',
          gold: '#b45309'
        },
        pass: {
          bg: '#f0fdf4',
          text: '#166534',
          border: '#bbf7d0',
          solid: '#22c55e'
        },
        review: {
          bg: '#fffbeb',
          text: '#92400e',
          border: '#fde68a',
          solid: '#f59e0b'
        },
        fail: {
          bg: '#fef2f2',
          text: '#991b1b',
          border: '#fecaca',
          solid: '#ef4444'
        }
      }
    },
  },
  plugins: [],
}