/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#8B5CF6',
          pink: '#D946EF',
        },
        dark: {
          bg: '#0D0D0D',
          card: '#1A1A2E',
          surface: '#16162A',
        },
        accent: {
          yellow: '#FBBF24',
          cyan: '#22D3EE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(217, 70, 239, 0.1) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}

