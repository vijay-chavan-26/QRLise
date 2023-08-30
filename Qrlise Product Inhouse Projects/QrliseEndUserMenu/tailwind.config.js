/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: '#FFA235', // Example custom color
        themeBg: '#F3F3F3', // Example custom color
      },
      screens: {
        'mobile': '500px',
      },
    },
  },
  plugins: [],
}