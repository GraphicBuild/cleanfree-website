/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{js,css}'],
  theme: {
    extend: {
      colors: {
        /* Video palette */
        cerulean: {
          DEFAULT: '#3A86E0',
          dark: '#2B6CB0',
          light: '#5BA3F0',
        },
        cyan: {
          DEFAULT: '#00AEEF',
          soft: '#E8F2FC',
        },
        /* Aliases: existing teal-* classes → cerulean / cyan */
        teal: {
          DEFAULT: '#3A86E0',
          dark: '#2B6CB0',
          light: '#00AEEF',
          soft: '#E8F2FC',
        },
        navy: {
          DEFAULT: '#1E293B',
          deep: '#103868',
        },
        /* Former gold accents remapped to cyan sparkle */
        gold: {
          DEFAULT: '#00AEEF',
          light: '#5BC8F5',
          dark: '#0090C5',
        },
        primary: '#3A86E0',
        offwhite: '#F8FAFC',
        softgrey: '#EBEFF2',
        gray: {
          100: '#F8FAFC',
          200: '#EBEFF2',
          400: '#94a3b8',
          600: '#475569',
          700: '#334155',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(16, 56, 104, 0.08)',
        glow: '0 0 40px rgba(58, 134, 224, 0.3)',
        'glow-gold': '0 0 30px rgba(0, 174, 239, 0.3)',
        card: '0 4px 24px rgba(16, 56, 104, 0.06)',
        'card-hover': '0 12px 40px rgba(58, 134, 224, 0.18)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(165deg, #103868 0%, #1E293B 50%, #3A86E0 100%)',
        'section-soft':
          'linear-gradient(180deg, #F8FAFC 0%, #ffffff 50%, #E8F2FC 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
