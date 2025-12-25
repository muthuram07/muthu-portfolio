// src/styles/theme.css.ts
import { style, createVar } from '@vanilla-extract/css';

export const accent = createVar();
export const accent2 = createVar();

export const theme = style({
  vars: {
    [accent]: '#64748b',   // slate blue
    [accent2]: '#a78bfa',  // soft lavender
  },
});
