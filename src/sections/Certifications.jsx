import React from 'react';
import { certifications } from '../data/content.js';
import * as styles from '../styles/card.css.ts';
import AnimatedCard from '../components/AnimatedCard.jsx';

export default function Certifications() {
  // Use the imported certifications array, or default to an empty array if undefined
  const certData = certifications || [];
  
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
          alignItems: 'start',
        }}
      >
        {certData.map((c, i) => (
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
                  height: '240px', 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between', // Pushes content to top and button to bottom
                }}
              >
                {/* Top Section: Title and Description */}
                <div>
                  <h3 style={{ fontWeight: '600', fontSize: '1.1rem', color: '#111827' }}>
                    {c.name}
                  </h3>
                  <p className={styles.subtext} style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                    {c.provider}
                  </p>
                  <p
                    style={{
                      marginTop: '0.5rem',
                      fontSize: '0.85rem',
                      color: '#4b5563',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}>
                    {c.description}
                  </p>
                </div>

                {/* Bottom Section: Button */}
                <div
                  style={{
                    marginTop: '1rem',
                    padding: '0.6rem 1rem',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    display: 'block'
                  }} >
                  View Certificate →
                </div>
              </div>
            </AnimatedCard>
          </a>
        ))}
      </div>
    </section>
  );
}