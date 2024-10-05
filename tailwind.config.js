/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'text': '#040316',
          'background': '#fbfbfe',
          'primary': '#78dc50',
          'secondary': '#948fff',
          'accent': '#1a0057',
        },
      },
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
  }
