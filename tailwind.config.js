/* eslint-disable no-undef */
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary and Secondary colors
        primary: {
          DEFAULT: "#000000", // Black
        },
        secondary: {
          DEFAULT: "#db1215", // Red
        },

        // Success (Green)
        success: {
          DEFAULT: "#28a745", // Bootstrap's success green
          100: "#d4edda", // Light success
          200: "#c3e6cb",
          500: "#28a745", // Default success
          700: "#218838", // Dark success
        },

        // Warning (Yellow/Orange)
        warning: {
          DEFAULT: "#ffc107", // Bootstrap's warning yellow
          100: "#fff3cd", // Light warning
          200: "#ffeeba",
          500: "#ffc107", // Default warning
          700: "#e0a800", // Dark warning
        },

        // Error (Red)
        error: {
          DEFAULT: "#dc3545", // Bootstrap's error red
          100: "#f8d7da", // Light error
          200: "#f5c6cb",
          500: "#dc3545", // Default error
          700: "#c82333", // Dark error
        },

        // Info (Blue)
        info: {
          DEFAULT: "#17a2b8", // Bootstrap's info blue
          100: "#d1ecf1", // Light info
          200: "#bee5eb",
          500: "#17a2b8", // Default info
          700: "#117a8b", // Dark info
        },

        // Neutral (Gray)
        neutral: {
          DEFAULT: "#6c757d", // Bootstrap's gray
          100: "#f8f9fa", // Light gray
          200: "#e9ecef",
          500: "#6c757d", // Default gray
          700: "#495057", // Dark gray
          900: "#212529", // Very dark gray
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
