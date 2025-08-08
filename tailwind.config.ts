import type { Config } from 'tailwindcss';

export default {
  daisyui: {
    themes: [
      {
        fantasy: {
          ...require('daisyui/src/theming/themes')['fantasy'],
          primary: '#012c42',
          secondary: '#008ac4',
        },
      },
    ],
  },
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      white: '#FEFEFE',
      black: '#111111',
      red: 'var(--custom-red)',
      teal: 'var(--custom-teal)',
      cyan: 'var(--custom-cyan)',
      'dark-blue': 'var(--custom-dark-blue)',
      'bright-blue': 'var(--custom-bright-blue)',
      berry: 'var(--custom-berry)',
      'gray-dark': 'var(--custom-gray-dark)',
      'gray-mid': 'var(--custom-gray-mid)',
      'gray-light': 'var(--custom-gray-light)',
      'gray-very-light': 'var(--custom-gray-very-light)',
    },
    extend: {
      fontFamily: {
        PTSerif: ['PT Serif', 'serif'],
        Lato: ['Lato', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
} as Config;
