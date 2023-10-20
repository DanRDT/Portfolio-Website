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
          750: '#AA1C1C',
        },
        bluish: {
          light: '#3A7EF9',
          DEFAULT: '#0B5EF3',
          dark: '#0049CB',
        },
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
