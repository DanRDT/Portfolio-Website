const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        red: {
          rubine: '#D41D6C',
        },
        'rubine-red': '#D41D6C',
        blue: {
          slate: '#D1DEFF',
          cornflower: '#8FB3FF',
        },
        slate: '#D1DEFF',
        'cornflower-blue': '#8FB3FF',
        background: {
          light: '#EFF2F3',
          dark: '#181818',
        },
        placeholder: '#d9d9d9',
      },
      dropShadow: {
        dark: ['0 4px 3px rgba(70, 70, 70, 0.07)', '0 2px 2px rgba(70, 70, 70, 0.06)'],
      },
      fontFamily: {
        PlusJakartaSans: ['PlusJakartaSans-ExtraBold', 'sans-serif', 'Arial'],
        RobotoFlex: ['Roboto Flex', 'Arial'],
        Raleway: ['Raleway-SemiBold', 'Arial'],
      },
    },
  },
  plugins: [],
}
