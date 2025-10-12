// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        hgreen: {
          50: '#f3fbf6',
          100: '#e6f7ee',
          200: '#c6eed7',
          300: '#9fe3bd',
          400: '#6fd9a0',
          500: '#47c485',
          600: '#2fa46a',
          700: '#238554',
          800: '#19663f',
          900: '#11462b'
        }
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        soft: '0 8px 30px rgba(16,24,40,0.06)'
      },
      borderRadius: {
        xl2: '18px'
      }
    }
  },
  plugins: []
};

export default config;
