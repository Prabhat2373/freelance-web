/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF4C4A",
        grayblue: "#DDE1F3",
        blue: "#4260DA",
        black: "#2A1E17",
        white: "#ffffff",
        "off-white": "F7F7F5",
        gray: "#808080e2",
      },
    },
  },
  plugins: [],
};
