/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "col-1": "calc(100% / 1.5)",
        "col-2": "calc(100% / 2)",
        "col-3": "calc(100% / 2.5)",
        "col-4": "calc(100% / 3)",
      },
      screens: {
        sm: { min: "640px" },
        md: { min: "768px" },
        lg: { min: "1024px" },
        xl: { min: "1280px" },
      },
      colors: {
        // Black
        richBlack: "#160D0B",
        primaryBlack: "#201A19",
        tintOneBlack: "#756C6A",
        tintTwoBlack: "#BDB6B4",
        tintThreeBlack: "#EEEAE9",

        // Gold
        tintGold: "#FFF7E7",
      },
      fontFamily: {
        grtskexa: ["var(--font-grtskexa)"],
        grtskpeta: ["var(--font-grtskpeta)"],
        plantin: ["var(--font-plantin)"],
      },
    },
  },
  plugins: [],
};
