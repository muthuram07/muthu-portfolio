import React from 'react';
import { certifications } from '../data/content.js';
import * as styles from '../styles/card.css.ts';
import AnimatedCard from '../components/AnimatedCard.jsx';

export default function Certifications() {
  const directions = ['up', 'down', 'left', 'right'];
  return (
    <section style={{ padding: '4rem 2rem' }} id="certifications">
      <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>Certifications</h2>
      <div
        style={{
          marginTop: '2rem',
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          alignItems: 'start', // 👈 don't stretch vertically
        }}
      >
        {certifications.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <AnimatedCard direction={directions[i % directions.length]}>
              <div
                style={{
                  height: '220px', // 👈 fixed height for all tiles (unchanged)
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <h3 style={{ fontWeight: '600', fontSize: '1.1rem' }}>{c.name}</h3>
                <p className={styles.subtext}>{c.provider}</p>
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.9rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3, // clamp description to 3 lines
                    WebkitBoxOrient: 'vertical',
                  }}
                  className={styles.subtext}
                >
                  {c.description}
                </p>
              </div>
            </AnimatedCard>
          </a>
        ))}
      </div>
    </section>
  );
}