import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'neutral-01': 'var(--neutral-01)',
      'neutral-02': 'var(--neutral-02)',
      'neutral-03': 'var(--neutral-03)',

      neutral: 'var(--neutral)',

      disabled: 'var(--disabled)',
      black: 'var(--black)',
      white: 'var(--white)',
      accent: 'var(--accent)',
      'fill-accent': 'var(--fill-accent)',
      secodary: 'var(--secodary)',
      danger: 'var(--danger)',
      destructive: 'var(--destructive)',
      placeholder: 'var(--placeholder)',
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
