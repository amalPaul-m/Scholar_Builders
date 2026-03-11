/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#262523',
        secondary: '#81817D',
        neutral: '#B3B2AE',
        background: '#E3EBD2',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      fontSize: {
        'hero-desktop': '48px',
        'hero-mobile': '36px',
        'section-desktop': '36px',
        'section-mobile': '28px',
      },
    },
  },
  plugins: [],
}
