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
        "grey": "#BFC0C0"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
