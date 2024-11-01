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
        // Dark mode
        "black": "#040404",
        "thunder": "#303030",
        "parchment": "#f4ffac",
        "rangoon": "#1a1a1a",
        // Light mode
        "lightgray": "#ecf0f3",
        "geyser": "#d2dbe2",
        "frost": "#eef5cc",
        "cadet": "#a8b2c1"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(0deg)'},
          '25%': {transform: 'rotate(-25deg)'},
          '75%': {transform: 'rotate(25deg)'},
        }
      }, 
      animation: {
        wiggle: 'wiggle 1.5s ease-out forwards'
      },
      transitionDuration: {
        "375": "375ms"
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}

