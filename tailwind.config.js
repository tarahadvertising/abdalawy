export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "sans-serif"],
        serif: ["Zilla Slab", "serif"],
        mono: ["Courier New", "monospace"],
      },
      backgroundImage: (theme) => ({
        "gradient-gray": `linear-gradient(180deg, ${theme(
          "colors.gray.800",
        )} 0%, ${theme("colors.gray.50")} 100%)`,
      }),
      colors: {
        whatsapp: "#25D366",
        primary: {
          50: "#E0E9F2",
          100: "#B3CAE0",
          200: "#80A8CC",
          300: "#4E86B8",
          400: "#266BA3",
          500: "#0A4E8A",
          600: "#094678",
          700: "#083B64",
          800: "#072F4F",
          900: "#06253F",
        },
        secondary: {
          50: "#F9F2D9",
          100: "#F2E4B3",
          200: "#EAD78A",
          300: "#E0C956",
          400: "#D8C036",
          500: "#DCBA28",
          600: "#C4A522",
          700: "#A98B1D",
          800: "#8C7118",
          900: "#705814",
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-in-out forwards",
        MenuSlideDown: "MenuSlideDown 0.5s ease-in-out forwards",
      },
      fontSize: {
        "xs-custom": "10px",
      },
      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
