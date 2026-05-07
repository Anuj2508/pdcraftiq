export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // primary: "#567270",  Teal Green (logo main)
        primary: "#CD9D55", // Teal Green (logo main)
        success: "#026b29", // kept existing
        orange: "#CC542F", // Rust / Orange from logo

        // light_primary: "#6F8F8D", lighter teal
        light_primary: "#C6B69E", // lighter teal
        light_success: "#16a34a", // kept existing
        light_orange: "#E07A5F", // softer rust

        secondary: "#CD9D55", // Golden Mustard (logo accent)
        secondary2: "#C6B69E", // soft beige gold

        light: "#EBECEC", // logo background
        dark: "#333333", // kept existing
        dark2: "#8A8E89", // logo grey
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out",
        fadeIn: "fadeIn 0.4s ease-in",
      },
    },
  },
  plugins: [],
};
