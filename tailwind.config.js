/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        15: "3.75rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        graphik: ["Graphik", "sans-serif"],
      },
      container: {
        center: true,
      },
      colors: {
        "primary-blue": "#1F78FF",
        "primary-yellow": "#CDFD34",
        "primary-black": "#1E1E1E",
      },
    },
  },
  plugins: [],
};
