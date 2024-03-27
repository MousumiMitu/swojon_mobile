/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#4e5059",
        secondColor: "#8A8A8A",
        activeColor: "#3b51a4",
        whiteColor: "#FFFFFF",
        orangeColor: "#FFBD89",
        blueColor: "#0077BA",
        darkPurple: "#2A0831",
      },
    },
  },
  plugins: [],
};
