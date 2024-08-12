/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1330px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#242a2b",
        seconodary: "#808080",
        accent: {
          DEFAULT: "#1cbccf",
          seconodary: "#18abbc",
          tertiary: "#90c6cd",
        },
        grey: "#e8f0f1",
      },
      boxShadow: {
        custom1: "0px 2px 40px 0px rgba(8, 70, 78, 0.08)",
        custom2: "0px 0px 30px 0px rgba(8, 70, 81, 0.06)",
      },
      backgroundImage: {
        services: "url(../src/assets/bg/services.jpg)",
        testi: "url(../src/assets/bg/testi.jpg)",
        quoteLeft: "url(../src/assets/bg/left.png)",
        quoteRight: "url(../src/assets/bg/right.png)",
        department: "url(../src/assets/bg/department.jpg)",
      },
    },
  },
  plugins: [],
};
