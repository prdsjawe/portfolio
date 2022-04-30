const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "blue-left": "#045BA5",
        "blue-right": "#1BA7E9",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        3: "3px",
      },
      width: {
        3: "0.1875rem",
      },
    },
  },
};
