/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translate(-50px)' },
          '100%': { opacity: 1, transform: 'translate(0)' },
        },
      },
      fontFamily: {
        rouge: ['Rouge Script']
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'fadeInLeft': 'fadeInLeft  2.5s ease-in-out forwards',
        'fade': 'fadein 2.5s ease-out forwards'
      }
    },
  },
  plugins: [],
}
