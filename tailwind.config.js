/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern slate-950 dark base + indigo/violet accent system
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',   // primary indigo
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        surface: {
          DEFAULT: '#0f172a', // slate-950 — main bg
          card:    '#1e293b', // slate-800 — card bg
          border:  '#334155', // slate-700 — borders
          muted:   '#94a3b8', // slate-400 — muted text
        },
        // ── BLEAK palette ──────────────────────────────────────
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
        skuggi: {
          green:  '#39ff14',
          dim:    '#1a7a0a',
          dark:   '#0b2e06',
          red:    '#dc2626',
          crimson:'#7f1d1d',
        },
        obsidian: {
          DEFAULT: '#080c10',
          light:   '#111820',
          card:    '#161e28',
          border:  '#1e2d3d',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'monospace'],
        serif: ['Cinzel', 'Georgia', 'serif'],     // BLEAK headings
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease both',
        'fade-in':    'fadeIn 0.5s ease both',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        // BLEAK animations
        'drift':       'drift 8s ease-in-out infinite alternate',
        'drift-slow':  'drift 14s ease-in-out infinite alternate',
        'flicker':     'flicker 3s ease-in-out infinite',
        'shimmer':     'shimmer 2.5s linear infinite',
        'rise':        'rise 1s ease both',
        'rise-200':    'rise 1s 200ms ease both',
        'rise-400':    'rise 1s 400ms ease both',
        'rise-600':    'rise 1s 600ms ease both',
        'particles':   'particles 20s linear infinite',
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
        particles: {
          '0%':   { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
    },
  },
  plugins: [],
}
