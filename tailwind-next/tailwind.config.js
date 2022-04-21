module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "trndy-primary": "#F9F1E6",
        "trndy-secondary": "#AE3929",
        "trndy-gray": "#6B6463",
        "trndy-brown": "#D87E24"
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}