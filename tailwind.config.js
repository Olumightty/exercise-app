/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./app/**/*.{js,jsx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",
          ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary:"#EEEE82",
        secondary: "#fff",
        dimGray: "#C5C5C5",
        navy: "#05043C",

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jersey: ["Jersey 20", "sans-serif"],
      },
    },
    screens: {
      es: "280px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

