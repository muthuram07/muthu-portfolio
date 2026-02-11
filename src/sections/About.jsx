import React from 'react';
import { about } from '../data/content.js';
import '../styles/grid.css';

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '4rem 2rem',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <div className="grid-container">
        <div className="grid-item" style={{ gridColumn: '1 / -1' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>
            About Me
          </h2>
          <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#6b7280' }}>
            {about.map((line, i) => (
              <p key={i} style={{ marginBottom: '1rem' }}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
