/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 3s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": { "background-size": "150% 150%" },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right bottom",
          },
          "100%": { "background-size": "150% 150%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
