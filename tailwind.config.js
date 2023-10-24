/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      "pt-serif": ["PT Serif", "serif"],
      montserrat: ["Commissioner", "sans-serif"],
    },
    backgroundImage: {
      "cover-contactus": "url('/src/app/assets/images/ContactusCover.png')",
      "cover-survey": "url('/src/app/assets/images/SurveyBg.png')",
      feedback: "url('/src/app/assets/images/FeedbackBg.png')",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "100%": "100%",
    },
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.2s ease-out",
      },
      colors: {
        "primary-accent": "#1376BC",
        "secondary-accent": "#8EC641",
      },
    },
  },
  variants: {
    display: ["responsive", "hover", "focus", "group-hover"],
    extend: {},
  },
  plugins: [],
};
