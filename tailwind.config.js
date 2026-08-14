/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#051329',
          800: '#071A3A', // Primary Navy
          700: '#0D2B5C', // Secondary Navy
          600: '#143B7A',
        },
        gold: {
          600: '#A6771E',
          DEFAULT: '#C8942E', // Main Gold
          400: '#E8C66A', // Light Gold
          300: '#F3DB94',
          100: '#FBF5E5',
        },
        cream: {
          50: '#FDFBF7',
          DEFAULT: '#F8F4EA',
          200: '#EFE7D5',
        },
        brandText: {
          dark: '#18243A',
          muted: '#667085',
        },
        urgency: {
          red: '#D32F2F',
        }
      },
      fontFamily: {
        heading: ['"Outfit"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        hindi: ['"Poppins"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(7, 26, 58, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(7, 26, 58, 0.15)',
        'gold-glow': '0 10px 25px -5px rgba(200, 148, 46, 0.3)',
      }
    },
  },
  plugins: [],
}
