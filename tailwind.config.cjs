/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}", // Essential because your files are in the root
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          500: '#10b981',
          900: '#064e3b',
        },
        black: {
          100: '#0e0e10',
          200: '#282732',
          DEFAULT: '#000000',
        }
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}