import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        forjex: {
          ink: '#12343B',
          green: '#2E7D68',
          gold: '#C9A227',
          surface: '#F7F8FA',
          text: '#172026',
          muted: '#5B6670',
          border: '#DDE3EA',
        },
        state: {
          success: '#2E7D32',
          warning: '#B7791F',
          error: '#C62828',
          info: '#1565C0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.25rem, 4.5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2rem, 3.5vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h2': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.15' }],
        'h3': ['1.5rem', { lineHeight: '1.25' }],
      },
      borderRadius: {
        card: '1.5rem',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(23, 32, 38, 0.04), 0 8px 24px rgba(23, 32, 38, 0.06)',
        soft: '0 1px 2px rgba(23, 32, 38, 0.04)',
      },
      maxWidth: {
        content: '1180px',
      },
      spacing: {
        section: '6rem',
      },
    },
  },
  plugins: [],
};

export default config;
