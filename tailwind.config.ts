import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { fontFamily } = require('tailwindcss/defaultTheme');
export default {
  important: true,
  darkMode: 'class',
  content: [
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#038C7F',
        secondary: '#F2C641',
        tertiary: {
          dark: '#F27405',
          light: '#F2C641',
        }
      },fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
