/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,scss}',
  ],
  
  theme: {
  extend: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'noto': ['Noto Serif Display', 'serif'],
    },
    colors: {
      'background-color': 'var(--bg-color)',
      'text-color': 'var(--text-color)',
      'primary-color': 'var(--primary-color)',
      'accent-color': 'var(--accent)',
      'on-accent-color': 'var(--on-accent)',
      'divider': 'var(--divider)',
      'toolbar-color': 'var(--toolbar)',
      'toolbar-highlight-color': 'var(--toolbar-highlight)',
      'primary-txt-color': 'var(--primary-txt)',
      'secondary-txt-color': 'var(--secondary-txt)',
      'tertiary-txt-color': 'var(--tertiary-txt)',
      'accent-dark-color': 'var(--accent-dark)',
      'base': 'var(--base-color)',
      'hero-bg': 'var(--hero-bg)',
      'white-color': 'var(--white-color)',
      'divider-color': 'var(--divider-color)',
      'black-color': 'var(--black-color)',
      'gray-white': 'var(--gray-white)',
    }
  }
},
  plugins: [require("tailwindcss-animate")],
}
