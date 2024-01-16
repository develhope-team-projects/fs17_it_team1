/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'iphone': '414px',
        // => @media (min-width: 640px) { ... }

        'tablet': '800px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
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
