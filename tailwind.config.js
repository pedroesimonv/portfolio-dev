/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./script.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#8a2ce2",
        "background-light": "#f7f6f8",
        "background-dark": "#10101A",
        "navy-deep": "#000080",
        "slate-deep": "#2D3250",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "code": ["Fira Code", "monospace"]
      }
    },
  },
  plugins: [],
}