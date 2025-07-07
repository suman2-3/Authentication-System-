const flowbite = require('flowbite/plugin');
const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {},
  },
  plugins: ['flowbite/plugin', flowbiteReact],
}