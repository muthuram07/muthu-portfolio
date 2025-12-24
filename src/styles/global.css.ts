// src/styles/global.css.ts
import { globalStyle, globalKeyframes } from '@vanilla-extract/css';

// Define keyframes globally
globalKeyframes('gradientShift', {
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' },
});

// Apply global styles
globalStyle('html, body, #root', {
  height: '100%',
  margin: 0,
  fontFamily: 'Inter, system-ui, sans-serif',
  background: 'linear-gradient(135deg, #f9fafb, #eef2ff)',
  backgroundSize: '400% 400%',
  animation: 'gradientShift 15s ease infinite',
  color: '#1f2937',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('::selection', {
  background: '#a78bfa',
  color: '#fff',
});
