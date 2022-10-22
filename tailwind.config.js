module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "nunito": ["Nunito", "sans-serif"]
      },
      colors: {
        "dark-blue": "#252734",
        "light-blue": "#2D3142",
        "grey": "#BFC0C0",
        "light-orange": "#EF8354"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
