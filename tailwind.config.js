/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'synthwave',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'pastel',
      'luxury',
      'dracula',
      'business',
      'night',
      'coffee',
    ],
  },
  plugins: [require('daisyui')],
}
