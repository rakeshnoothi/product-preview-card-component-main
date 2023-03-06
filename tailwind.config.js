/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontWeight: {
      regular: "500",
      bold: "700",
    },
    extend: {
      colors: {
        primaryDarkCyan: "hsl(158, 36%, 37%)",
        primaryCream: "hsl(30, 38%, 92%)",
        neutralVeryDarkBlue: "hsl(212, 21%, 14%)",
        neutralDarkGrayishBlue: "hsl(228, 12%, 48%)",
        neutralWhite: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
