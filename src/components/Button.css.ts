import { style } from '@vanilla-extract/css';

export const button = style({
  padding: '0.6rem 1.2rem',
  borderRadius: '9999px',
  border: '1px solid #e5e7eb',
  cursor: 'pointer',
  fontWeight: 500,
  background: '#64748b',   // slate blue
  color: '#fff',
  transition: 'background 0.2s ease, transform 0.2s ease',
  ':hover': {
    background: '#475569', // darker slate
    transform: 'translateY(-2px)',
  },
});
