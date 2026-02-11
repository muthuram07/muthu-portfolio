import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const button = style({
  backgroundColor: vars.colors.electricIndigo,
  color: vars.colors.pureWhite,
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: `0 0 10px ${vars.colors.indigoGlow}`,

  ':hover': {
    boxShadow: `0 0 20px ${vars.colors.indigoGlowHover}`,
  }
});
