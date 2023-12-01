//npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/pop-up.jsx', './components/navbar.js', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundColor: {
        'custom-gray': '#252628',
        'light-gray': '#F5F7F9',
        'dark-gray': '#3E3F42',
        'almost-black': '#1F1F1F',
        'bar-gray': '#E6E6E6',
        
      },
      colors:{
        'task-blue': '#6284FF',
        'bar-grey': '#E2EAF1',
        'task-black': '#1F1F1F',
        'timer-orange': '#FE754D',
        'notes-grey': '#545454',
      },
      fontFamily: {
        'fredoka': ['Fredoka One', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

