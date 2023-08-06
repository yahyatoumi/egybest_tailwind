/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      width: {
        'vw-16': 'calc(100vw - 81px)',
      },
    },
  },
  plugins: [],
}
