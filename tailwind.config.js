/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "our-black": "#212024",
        "oro-chiaro": "#e9a42e",
        "oro-scuro": "#be7f39",
        "light-bg": "#fcf7eb",
        "dark-bg": "#212024",
        "dark-white": "#e4ddcd",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
