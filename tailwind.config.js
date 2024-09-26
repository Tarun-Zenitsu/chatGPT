/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Add custom font
      },
      colors: {
        background: "#0e0c16", // Custom background color
        text: "#ececec", // Custom text color
      },
    },
  },
  plugins: [],
};
