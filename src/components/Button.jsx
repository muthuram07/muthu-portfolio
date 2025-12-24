import React from 'react';
import * as styles from './Button.css.ts';

export default function Button({ children, href }) {
  const Comp = href ? 'a' : 'button';
  return <Comp className={styles.button} href={href}>{children}</Comp>;
}
