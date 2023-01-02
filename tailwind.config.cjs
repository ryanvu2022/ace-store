/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkgreen: "#019267",
        lightgreen: "#BAFFB4",
        hovergreen: "#01A567",
        darkred: "#FF1E1E",
        baseColor: "#F7F7F7",
      },
      gridTemplateColumns: {
        "cartgrid": "auto 1fr auto",
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