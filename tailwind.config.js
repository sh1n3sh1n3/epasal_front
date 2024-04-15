/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anta: ['Anta', 'sans-serif'],
        VT323: ['VT323', 'sans-serif'],
        'kode-mono': ['Kode Mono', 'monospace'],
        'Sixtyfour':['Sixtyfour','sans-serif'],
        'Oleo-Script':['Oleo Script','system-ui'],
        'Mansalva':['Mansalva','sans-serif'],
        'Genos':['Genos','sans-serif'],
        'Orbitron':['Orbitron','sans-serif'],
      },
    },
  },
  plugins: [],
};
