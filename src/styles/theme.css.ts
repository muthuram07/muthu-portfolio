// src/styles/theme.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    obsidian: '#050505',
    electricIndigo: '#6366f1',
    cyberTurquoise: '#22d3ee',
    pureWhite: '#FFFFFF',
    slateGray: '#94a3b8',
    slateGrayTransparent: 'rgba(148, 163, 184, 0.1)',
    cyberTurquoiseTransparent: 'rgba(34, 211, 238, 0.2)',
    indigoGlow: 'rgba(99, 102, 241, 0.4)',
    indigoGlowHover: 'rgba(99, 102, 241, 0.8)',
  },
  font: {
    body: 'Inter, sans-serif',
    code: "'Fira Code', monospace",
  }
});
