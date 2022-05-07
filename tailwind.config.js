module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#252734",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: "#FFFFFF",
              fontFamily: "Nunito",
            },
            h2: {
              color: "#FFFFFF",
              fontFamily: "Nunito",
            },
            p: {
              fontFfamily: "Poppins",
              color: "#BFC0C0"
            },
            img: {
              borderRadius: "5px",
              height: "auto",
              width: "100%",
            }
          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
