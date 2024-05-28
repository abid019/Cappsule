/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        "dark-blue": "#2a527a",
        darkslategray: "rgba(17, 45, 49, 0.2)",
        silver: "#bbb",
        accent: "#112d31",
        lightgray: "#cdcdcd",
        "font-3": "#555",
        "tab-green": "#89bdbb",
        steelblue: "#204772",
        darkgray: "#ababab",
        "btton-green": "#d4e7e6",
        "font-2": "#222",
        powderblue: "#a7d5d4",
        gainsboro: "#d4e7e6",
        "font-2": "#222",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        lato: "Lato",
        lobster: "Lobster",
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "6xl": "25px",
        "16xl": "35px",
        mini: "15px",
        "8xs": "5px",
      },
    },
    fontSize: {
      smi: "13px",
      sm: "14px",
      base: "16px",
      "2xs": "11px",
      "4xl": "23px",
      xl: "20px",
      mini: "15px",
      "9xl": "28px",
      "smi-9": "12.9px",
      "base-5": "16.5px",
      xs: "12px",
      inherit: "inherit",

    },
  },
  screens: {
    sm: {
      max: "420px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
