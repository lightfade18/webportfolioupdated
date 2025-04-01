const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "1px",
        // => @media (min-width: 1px) { ... }

        tablet: "641px",
        // => @media (min-width: 641px) { ... }

        desktop: "1008px",
        // => @media (min-width: 1008px) { ... }
      },
      fontFamily: {
        rubikpaint: ["Rubik Spray Paint", ...defaultTheme.fontFamily.sans],
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
        karla: ["KarlaRegular", ...defaultTheme.fontFamily.sans],
        prompt: ["PromptRegular", ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        "4/5": "80vh",
      },
      zIndex: {
        60: "60",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        lightGray: {
          DEFAULT: "#EFEFEF",
          100: "#FFFFFF",
          200: "#FDFDFD",
          300: "#F8F8F8",
          400: "#F6F6F6",
          500: "#EFEFEF",
          600: "#E7E7E7",
          700: "#E1E1E1",
          800: "#E0E0E0",
          900: "#D3D3D3",
        },
        darkGray: {
          DEFAULT: "#303030",
          100: "#DCDCDC",
          200: "#B3B3B3",
          300: "#9A9A9A",
          400: "#676767",
          500: "#303030",
          600: "#212121",
        },
      },
    },
  },
  plugins: [],
};
