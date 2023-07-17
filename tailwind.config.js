/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sl: '949px',
      },
      colors: {
        primary: "#0b0f17",
        secondary: "#1f283d",
        accent: "#ff6476",
        blue: "#84d7e9",
      },
      fontFamily: {
        Poppins: ["Poppins"],
        Anton: ["Anton"],
        Francois: ['Francois One'],
      },
      fontSize: {
        header_1: ['8.5rem'],
        header_2: ['7.5rem'],
        header_3: ['6.5rem'],
        header_4: ['3.5rem'],
        header_5: ['2.5rem'],
      },
      borderRadius: {
        xxl: '4rem',
      }
    },
  },
  plugins: [],
};
