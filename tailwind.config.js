/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'fade': 'fadein 2.5s ease-out forwards'
      }
    },
  },
  plugins: [],
}
