/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#083AA9",
        lightblue: "#8fc5e9",
        darkred: "#FF1E1E",
      },
      gridTemplateColumns: {
        "cartgrid": "auto 1fr auto"
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}