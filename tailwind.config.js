module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#151F56",
        "primary-dark": "#050B29",
        "primary-light": "#F9FAFF",
        secondary: "#FC8E0E",
        gray: "#EFF0F8",
        "gray-dark": "#313650",
      },
      borderRadius: {
        large: "7rem",
      },
      minWidth: {
        6: "1.5rem",
      },
      minHeight: {
        6: "1.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
