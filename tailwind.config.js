module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
  
    }),
    extend: {
      colors: {
        primary: "#151F56",
        "primary-dark": "#050B29",
        "primary-light": "#F9FAFF",
        secondary: "#FC8E0E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
