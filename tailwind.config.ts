import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      'acid',
      {
        mytheme: {
          primary: '#FFCB47',
          secondary: '#ff4d6d',
          accent: '#590d22',
          neutral: '#23c',
          'base-100': '#ffffff',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
    ],
    base: false,
  },

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#FFCB47',
        secondary: '#ff4d6d',
        terciary: '#8CADA7',
        blackText: '#110B11',
        //   /* secondary: "#D6A729", */
        accent: '#ff4d6d',
        burnt: '#D77A61',
        //   accent: "#590d22",
        //   gray1: "#ccc"
      },
      padding: {
        section: '50px 40px',
        nav: '10px 40px',
        spaceNav: '70px',
        navM: '10px 12px',
        footer: '40px 40px 10px 40px',
        footerM: '40px 10px 10px 10px',
        mobile: ' 40px 12px',
      },
      fontSize: {
        title: '46px',
        titleSub: '40px',
        title3: '46px',
        title4: '46px',
        title5: '46px',
        title6: '46px',

        titleM: '36px',
        titleCard: '28px',
        text: '18px',
        textM: '18px',
      },
      lineHeight: {
        title: '42px',
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
