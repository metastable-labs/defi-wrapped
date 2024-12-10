import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './assets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          50: '#F5FFDE',
          100: '#509CFE',
          150: '#FFF0F1',
          200: '#EBFAFF',
          250: '#EDF4FF',
        },
        50: '#1E293B',
        100: '#61C7F9',
        150: '#0F172A',
        200: '#475569',
        250: '#334155',
        300: '#4691FE',
        350: '#020617',
        400: '#C1FF2F',
        450: '#B14DFF',
        500: '#FF335C',
        550: '#EBFAFF',
        600: '#DF1C41',
        650: '#EEEBFF',
        700: '#E3EEFF',
        foreground: 'var(--foreground)',
      },
    },
    fontFamily: {
      Aeonik: ['Aeonik'],
    },
  },
  plugins: [],
} satisfies Config;
