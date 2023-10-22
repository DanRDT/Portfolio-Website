const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pink: {
          rubine: '#D41D6C',
        },
        blue: {
          slate: '#D1DEFF',
          cornflower: '#8FB3FF',
        },
        background: {
          light: '#EFF2F3',
          dark: '#181818',
        },
        placeholder: '#d9d9d9',
      },
      dropShadow: {
        boxes: ['1px 1px 3px rgba(255, 255, 255, 0.20)', '1px 1px 30px rgba(99, 117, 124, 0.2)'],
      },
      fontFamily: {
        PlusJakartaSansBold: ['PlusJakartaSans-Bold', 'sans-serif', 'Arial'],
        PlusJakartaSansExtraBold: ['PlusJakartaSans-ExtraBold', 'sans-serif', 'Arial'],
        RobotoFlex: ['Roboto Flex', 'Arial'],
        Raleway: ['Raleway-SemiBold', 'Arial'],
      },
      fontSize: {
        md: ['17px', '26px'],
      },
    },
  },
  plugins: [],
}
