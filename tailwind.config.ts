import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0a0804',
        charcoal: '#161310',
        ember: '#ff4e00',
        gold: '#f5a623',
        cream: '#f0e8d5',
        dim: '#6b5f4a',
        neonGreen: '#b8ff57',
        cardBg: '#131008',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,78,0,0.4)' },
          '50%': { boxShadow: '0 0 60px rgba(255,78,0,0.9), 0 0 100px rgba(255,78,0,0.4)' },
        },
        shimmer: {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 4px #f5a623)' },
          '50%': { filter: 'brightness(1.3) drop-shadow(0 0 16px #f5a623)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
