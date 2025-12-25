import React from 'react';
import { motion } from 'framer-motion';
import * as styles from '../styles/card.css.ts';

export default function AnimatedCard({ children, direction = "topLeft" }) {
  const variants = {
    hidden: {
      opacity: 0,
      x:
        direction === "topLeft" || direction === "bottomLeft"
          ? -150
          : direction === "topRight" || direction === "bottomRight"
          ? 150
          : 0,
      y:
        direction === "topLeft" || direction === "topRight"
          ? -150
          : direction === "bottomLeft" || direction === "bottomRight"
          ? 150
          : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <motion.div
      className={styles.card}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 20px rgba(167,139,250,0.4)",
      }}
    >
      {children}
    </motion.div>
  );
}
