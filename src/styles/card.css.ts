import { style } from '@vanilla-extract/css';

export const card = style({
  background: '#ffffff',          // white card to match light gray bg
  border: '1px solid #e5e7eb',    // subtle border (light gray)
  borderRadius: '1rem',
  padding: '1.5rem',
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)', // soft shadow for depth
  color: '#1f2937',               // charcoal text (same as global)
});

export const subtext = style({
  color: '#6b7280',               // muted gray for secondary text
});
