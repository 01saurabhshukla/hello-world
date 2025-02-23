/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#2E3A47",
        whitee: "white",
        primary: "#F4A100",
        secondary: "#FFFFFF",
        gray: "",
        lightGray: "#F8F9FA",
      },
    },
  },
  plugins: [],
};
