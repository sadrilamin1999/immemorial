/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#d53f41",
        "custom-dark": " #626262",
        "custom-darker": "#464646",
        "custom-light": "#dbd8d6",
        "custom-lighter": "#f5f0ec",
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
        baijamjuree: ["Bai Jamjuree", "sans"],
        syncopate: ["Syncopate", "sans"],
      },
    },
  },
  plugins: [],
};
