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

// Responsive root container
globalStyle('#root', {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center',
});

// Nav styles for responsiveness
globalStyle('.nav', {
  padding: '1rem 2rem',
  borderBottom: '1px solid #e5e7eb',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #f9fafb, #eef2ff)',
  gap: '1rem',
});

globalStyle('.brand', {
  fontWeight: '700',
  fontSize: '1.5rem',
  color: '#1f2937',
  textDecoration: 'none',
  letterSpacing: '0.05em',
});

globalStyle('.nav-links', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});

globalStyle('.nav-link', {
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  fontWeight: '500',
  fontSize: '1rem',
  textDecoration: 'none',
  color: '#1f2937',
  background: 'linear-gradient(135deg, #f9fafb, #eef2ff)',
  border: '1px solid #e5e7eb',
  transition: 'all 0.3s ease',
});

// Hover states
globalStyle('.nav-link:hover', {
  backgroundColor: '#0ea5e9',
  color: '#1e3a8a',
  boxShadow: '0 4px 12px rgba(14,165,233,0.4)',
});

// Mobile adjustments (fixed - use separate globalStyle calls for each selector)
globalStyle('@media (max-width: 600px) .nav', {
  padding: '0.75rem 1rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

globalStyle('@media (max-width: 600px) .nav-links', {
  flexWrap: 'wrap',
  width: '100%',
});

globalStyle('@media (max-width: 600px) .nav-link', {
  padding: '0.5rem',
  fontSize: '0.95rem',
});

globalStyle('@media (max-width: 600px) #root', {
  padding: '1rem',
});
