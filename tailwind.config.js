/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
        Poppins: ["Poppins", "Open Sans", "sans-serif"],
      },
      keyframes: {
        blob: {
          "0%": {
            translate: "0 0",
            rotate: "0deg",
          },
          "30%": {
            rotate: "40deg",
          },
          "50%": {
            transform: "translate(300px, 390px) scale(1.1)",
          },
          "80%": {
            rotate: "90%",
          },
        },
        'gradient': {
          to: { 'background-position': '-200% center' },
        }
      },
      animation: {
        blob: "blob 8s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045)",
        "blob-reverse":
          "blob 10s infinite cubic-bezier(0.215, 0.61, 0.355, 1) reverse",
          'gradient': 'gradient 8s linear infinite',
      },    
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
  darkMode: "class",
};
