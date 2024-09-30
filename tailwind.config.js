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
      'neutral-04': 'var(--neutral-04)',
      'indigo-500': '#6366F1',
      'indigo-50': '#EEF2FF',
      'indigo-shade': '#E0E7FF',
      'indigo-700': '#4338CA',

      neutral: 'var(--neutral)',
      'accent-soft': 'var(--accent-soft)',
      disabled: 'var(--disabled)',
      black: 'var(--black)',
      white: 'var(--white)',
      accent: 'var(--accent)',
      'fill-accent': 'var(--fill-accent)',
      secodary: 'var(--secodary)',
      danger: 'var(--danger)',
      'danger-1': 'var(--danger-1)',

      destructive: 'var(--destructive)',
      placeholder: 'var(--placeholder)',
      'upload-accent': 'var(--upload-accent)',
      'upload-border': 'var(--upload-border)',
    },
    transitionTimingFunction: {
      expo: 'cubic-bezier(0.5, 1.5, 0.8, 1)',
      'expo-in': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
    },
    keyframes: {
      skeleton: {
        to: {
          transform: 'translateX(100%)',
        },
      },
      tableRow: {
        from: {
          opacity: '0%',
          transform: 'translateY(1rem) scaleY(110%)',
        },
        to: {
          opacity: '100%',
          transform: 'translateY(0)',
        },
      },
      'scroll-left': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
      'scroll-right': {
        '0%': { transform: 'translateX(-50%)' },
        '100%': { transform: 'translateX(0)' },
      },
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-15px)' },
      },
    },
    animation: {
      float: 'float 3s ease-in-out infinite',
      tableRow: 'tableRow 0.3s forwards',
      'scroll-left': 'scroll-left 20s linear infinite',
      'scroll-right': 'scroll-right 20s linear infinite',
      // skeleton: "skeleton 2s infinite",
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
