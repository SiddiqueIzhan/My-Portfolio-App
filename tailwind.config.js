import lineClamp from "@tailwindcss/line-clamp";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#1b1613",
        surface: "#29211d",
        "surface-2": "#3a302a",
        cream: "#f7efe5",
        muted: "#b9ada2",
        accent: "#d9a15c",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "warm-gradient": "linear-gradient(135deg, #d9a15c 0%, #b4632b 100%)",
      },
      boxShadow: {
        canvas: "0 0 0 1px rgba(247, 239, 229, 0.05)",
      },
    },
  },
  plugins: [lineClamp],
};
