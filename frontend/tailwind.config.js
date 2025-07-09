/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary
        primary: {
          light: '#88D989',
          DEFAULT: '#5DBF5F',
          dark: '#4A9A4A',
        },

        // backgrounds and text
        neutral: {
          100: '#F5F5F5',
          200: '#E0E0E0',
          400: '#A3A3A3',
          700: '#4B4B4B',
          800: '#323232',
          900: '#1F1F1F',
        },

        // alerts
        feedback: {
          success: '#28a745',
          warning: '#ffc107',
          error: '#dc3545',
          info: '#17a2b8',
        },

        // custom colors
        'background': 'var(--color-background)',
        'surface': 'var(--color-surface)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'border-color': 'var(--color-border)',
      },
    },
  },
  plugins: [],
}