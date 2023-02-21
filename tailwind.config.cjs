/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.tsx'],
  theme: {
    borderRadius: {
      '2/1': '50%',
      '1': '.25rem',
      '2': '.50rem',
      '3': '.75rem',
      '4': '1rem'
    },
    extend: {},
  },
  plugins: [],
}
