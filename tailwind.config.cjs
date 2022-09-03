/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      animation: {
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },

  plugins: [],
};
