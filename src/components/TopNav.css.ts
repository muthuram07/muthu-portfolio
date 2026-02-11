import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

const solarFlare = keyframes({
  '0%, 100%': {
    textShadow: `0 0 8px ${vars.colors.solarFlareGlow}, 0 0 16px ${vars.colors.solarFlareGlow}, 0 0 24px ${vars.colors.solarFlareGlow}`,
  },
  '50%': {
    textShadow: `0 0 12px ${vars.colors.solarFlareGlow}, 0 0 20px ${vars.colors.solarFlareGlow}, 0 0 32px ${vars.colors.solarFlareGlow}`,
  },
});

export const navbar = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '80px',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 2rem',
  transition: 'background-color 0.3s ease-out, border-color 0.3s ease-out',
  '@media': {
    '(max-width: 768px)': {
      padding: '0 1.5rem',
    },
  },
});

export const scrolledNavbar = style({
  backgroundColor: 'rgba(5, 5, 5, 0.7)',
  backdropFilter: 'blur(15px)',
  borderBottom: `1px solid ${vars.colors.cyberTurquoiseTransparent}`,
});

export const logo = style({
  fontFamily: vars.font.heading,
  fontSize: '2rem',
  color: vars.colors.pureWhite,
  fontWeight: 'bold',
  textDecoration: 'none',
  animation: `${solarFlare} 5s infinite ease-in-out`,
});

export const navLinks = style({
  display: 'flex',
  gap: '2.5rem',
  listStyle: 'none',
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

export const navLinkItem = style({
  position: 'relative',
  fontFamily: vars.font.body,
  fontSize: '1rem',
  color: vars.colors.pureWhite,
  textDecoration: 'none',
  padding: '0.5rem 0',
  transition: 'color 0.3s ease',
  selectors: {
    '&:hover': {
      color: vars.colors.electricIndigo,
    },
  },
});

export const underline = style({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  right: '50%',
  height: '2px',
  backgroundColor: vars.colors.electricIndigo,
  transition: 'left 0.3s ease-out, right 0.3s ease-out',
  selectors: {
    [`${navLinkItem}:hover &`]: {
      left: '0',
      right: '0',
    },
  },
});

export const hamburger = style({
  display: 'none',
  zIndex: 1002,
  '@media': {
    '(max-width: 768px)': {
      display: 'block',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      color: 'white',
    },
  },
});

export const mobileMenuOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(5, 5, 5, 0.9)',
  backdropFilter: 'blur(20px)',
  zIndex: 1001,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
});

export const mobileNavLinks = style({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem'
})

export const mobileNavLinkItem = style({
  fontFamily: vars.font.heading,
  fontSize: '2rem',
  color: vars.colors.pureWhite,
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  selectors: {
    '&:hover': {
      color: vars.colors.electricIndigo,
    },
  },
});
