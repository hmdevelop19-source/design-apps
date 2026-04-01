/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // enable dark mode by toggling class 'dark' on html or body
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000052', // Deep Navy
          light: '#00B0FB',
          hover: '#000035',
        },
        accent: {
          DEFAULT: '#FCD526', // Vibrant Orange
          hover: '#e3be22',
        },
        secondary: '#64748B',
        bg: {
          main: '#F4F7FE',
          card: '#FFFFFF',
          dark: '#0F172A',
          cardDark: '#1E293B'
        },
        text: {
          main: '#1E293B',
          muted: '#64748B',
          dark: '#F1F5F9',
          darkMuted: '#94A3B8'
        },
        border: {
          light: '#E2E8F0',
          dark: '#334155'
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#3B82F6',
        purple: '#8B5CF6',
        orange: '#F97316'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
