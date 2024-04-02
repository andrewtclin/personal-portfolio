/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        baseColor: "#FFFFFF",
        variant: "rgb(243 244 246)",
        primaryColor: "rgb(107 114 128)",
        primaryVariantColor: "rgb(55 65 81)",
        primaryDarkColor: "#9A4E40",
        lightColor: "#000",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
