import type { Config } from 'tailwindcss';

const config: Config = {
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
],
  theme: {
    extend: {
      colors: {
        // Primary - Ink scale
        ink: {
          50: '#F8F7F5',
          100: '#F0EEEA',
          200: '#E1DDD6',
          300: '#D2C8BB',
          400: '#B8A89A',
          500: '#9E8880',
          600: '#84685F',
          700: '#6A4A44',
          800: '#423033',
          900: '#2B1F1F',
          950: '#1A1210',
        },
        // Accent - Bronze scale
        bronze: {
          50: '#FDF9F5',
          100: '#FAF2EA',
          200: '#F5E3D1',
          300: '#E8D0B3',
          400: '#D9B891',
          500: '#C7A06F',
          600: '#B08A54',
          700: '#96723F',
          800: '#765C32',
          900: '#5C4825',
          950: '#3D2F16',
        },
        // Neutral - Stone scale
        stone: {
          50: '#FDFBF8',
          100: '#FAF7F2',
          200: '#F5EFE8',
          300: '#EDE7DD',
          400: '#E0D8CC',
          500: '#D1C8B8',
          600: '#BFB3A0',
          700: '#AA9684',
          800: '#8B7A66',
          900: '#6B5F50',
          950: '#3E372D',
        },
        // Semantic colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      spacing: {
        // 8-point grid system
        'xs': '0.5rem',    // 8px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '3rem',      // 48px
        'xxl': '4rem',     // 64px
        '3xl': '6rem',     // 96px
        '4xl': '8rem',     // 128px
      },
      borderRadius: {
        'none': '0',
        'hairline': '2px',
        'sm': '4px',
        'base': '6px',
        'lg': '8px',
      },
      boxShadow: {
        'none': 'none',
        'hairline': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'premium': '0 20px 40px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'normal': '0em',
        'wide': '0.02em',
        'wider': '0.05em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;