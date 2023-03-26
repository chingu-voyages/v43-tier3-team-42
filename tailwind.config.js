/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` diectory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-50": "#fef8e2",
        "brand-100": "#feecb5",
        "brand-200": "#fde185",
        "brand-300": "#fdd654",
        "brand-400": "#fdcb30",
        "brand-500": "#fcc21a",
        "brand-600": "#fcb514",
        "brand-700": "#f59e0b",
        "brand-800": "#fc910f",
        "brand-900": "#fb730b",
        "navy-50": "#e5e8ed",
        "navy-100": "#bdc6d4",
        "navy-200": "#94a1b6",
        "navy-300": "#6d7d99",
        "navy-400": "#4e6386",
        "navy-500": "#2f4a75",
        "navy-600": "#29436d",
        "navy-700": "#213a62",
        "navy-800": "#1c3155",
        "navy-900": "#14213d",
        "spring-green-100": "#bafed8",
        "spring-green-300": "#11fca2",
        "spring-green-600": "#00df69",
      },
    },
  },
  plugins: [],
};
