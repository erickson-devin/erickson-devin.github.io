/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Emerald accent system ─────────────────────────── */
        brand: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',   /* primary emerald */
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        /* ── Surface system ────────────────────────────────── */
        surface: {
          DEFAULT: '#0a0e17',   /* deep neutral dark */
          raised:  '#0f1520',   /* slightly lifted */
          card:    '#131b28',   /* card background */
          border:  '#1e2d3d',   /* subtle borders */
          muted:   '#64748b',   /* muted text (slate-500) */
        },
        /* ── BLEAK palette (author section) ────────────────── */
        ash: {
          50:  '#f5f5f4',
          100: '#e7e5e4',
          200: '#d6d3d1',
          300: '#a8a29e',
          400: '#78716c',
          500: '#57534e',
          600: '#44403c',
          700: '#292524',
          800: '#1c1917',
          900: '#0f0e0d',
        },
        ochre: {
          300: '#d4a96a',
          400: '#c49a52',
          500: '#a67c3a',
          600: '#7d5c22',
        },
        storm: {
          200: '#c8dff5',
          300: '#9dc4ec',
          400: '#6ea8e0',
          500: '#4a8fd1',
          600: '#2f6fb5',
          700: '#1a4f8a',
          glow: '#7ab8f5',
        },
        obsidian: {
          DEFAULT: '#080c10',
          light:   '#111820',
          card:    '#161e28',
          border:  '#1e2d3d',
        },
      },
      fontFamily: {
        sans:  ['Geist Sans', 'Geist', 'system-ui', '-apple-system', 'sans-serif'],
        mono:  ['Geist Mono', 'JetBrains Mono', 'monospace'],
        serif: ['Cinzel', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        'spring':    'cubic-bezier(0.32, 0.72, 0, 1)',
        'spring-in': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      },
      animation: {
        'fade-up':     'fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) both',
        'fade-in':     'fadeIn 0.6s cubic-bezier(0.32,0.72,0,1) both',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'reveal':      'reveal 0.8s cubic-bezier(0.32,0.72,0,1) both',
        /* BLEAK animations */
        'drift':       'drift 8s ease-in-out infinite alternate',
        'drift-slow':  'drift 14s ease-in-out infinite alternate',
        'flicker':     'flicker 3s ease-in-out infinite',
        'shimmer':     'shimmer 2.5s linear infinite',
        'rise':        'rise 1s cubic-bezier(0.32,0.72,0,1) both',
        'rise-200':    'rise 1s 200ms cubic-bezier(0.32,0.72,0,1) both',
        'rise-400':    'rise 1s 400ms cubic-bezier(0.32,0.72,0,1) both',
        'rise-600':    'rise 1s 600ms cubic-bezier(0.32,0.72,0,1) both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        reveal: {
          '0%':   { opacity: '0', transform: 'translateY(32px)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        drift: {
          '0%':   { transform: 'translateY(0px) translateX(0px)' },
          '100%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.7' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        rise: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
