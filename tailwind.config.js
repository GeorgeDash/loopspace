/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "sm": "320px",
        "sm-m": "375px",
        "sm-l": "425px",
        "sm-xl": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1024px",
        "2xl": "1200px",
        "3xl": "1440px"
      },
      fontFamily: {
        "sans": ["'General Sans'", "sans-serif"]
      },
      colors: {
        "black": "#040404",
        "thunder": "#303030",
        "parchment": "#f4ffac",
        "rangoon": "#1a1a1a"
      },
      keyframes: {
        spin: {
          'to': {transform: 'rotate(360deg)'}
        },
        wiggle: {
          '0%, 100%': {transform: 'rotate(0deg)'},
          '25%': {transform: 'rotate(-25deg)'},
          '75%': {transform: 'rotate(25deg)'},
        }
      }, 
      animation: {
        spin: 'spin 1.5s ease-out 0.1s forwards',
        wiggle: 'wiggle 1.5s ease-out forwards'
      },
      transitionDuration: {
        "375": "375ms"
      },
    },
  },
  plugins: [],
}

