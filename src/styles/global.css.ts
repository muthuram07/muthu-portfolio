import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('body', {
  backgroundColor: vars.colors.obsidian,
  color: vars.colors.slateGray,
  fontFamily: vars.font.body,
  backgroundImage: `
    radial-gradient(at 27% 37%, hsla(215, 98%, 60%, 0.1) 0px, transparent 50%),
    radial-gradient(at 97% 21%, hsla(185, 98%, 60%, 0.1) 0px, transparent 50%),
    radial-gradient(at 52% 99%, hsla(255, 98%, 60%, 0.1) 0px, transparent 50%),
    radial-gradient(at 10% 29%, hsla(285, 98%, 60%, 0.1) 0px, transparent 50%),
    radial-gradient(at 97% 96%, hsla(345, 98%, 60%, 0.1) 0px, transparent 50%),
    radial-gradient(at 33% 50%, hsla(225, 98%, 60%, 0.1) 0px, transparent 50%),
    radial-gradient(at 79% 53%, hsla(205, 98%, 60%, 0.1) 0px, transparent 50%)
  `,
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  color: vars.colors.pureWhite,
});

globalStyle('a', {
  color: vars.colors.electricIndigo,
  textDecoration: 'none',
  transition: 'color 0.3s ease',
});

globalStyle('a:hover', {
  color: vars.colors.cyberTurquoise,
});
