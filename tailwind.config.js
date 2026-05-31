/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#285091",
        secondary: "#EEF4FF",
        background: "#F7FAFF",
        darkBlue: "#1E3A5F",
        lightBlue: "#EAF3FF",
        dimBlue: "#F7FAFF",
        overlayBg: "rgba(0, 0, 0, 0.3)",
      }
    }
  },
  plugins: [],
}

