/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: '768px' },
      },
    },
    fontWeight: {
      bold: 700,
      regular: 400,
    },
    fontSize: {
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      40: '2.5rem',
      48: '3rem',
      52: '3.25rem',
    },
    colors: {
      primary: {
        'brand-green': '#00856F',
        'brand-green-light': '#DCE9E2',
        'brand-green-light-2': '#F7F9F9',
        'brand-beige': '#FFFAF1',
        'brand-green-hover': '#00453A',
      },
      secundary: {
        'gray-headline': '#061800',
        'gray-paragraph': '#384633',
        white: '#3E3E3E',
      },
    },
  },
  plugins: [],
}
