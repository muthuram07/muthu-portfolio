import React from 'react';
import { about } from '../data/content.js';

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '4rem 2rem',
        width: '100%',
        maxWidth: '1000px',   // 👈 keeps text readable, not stretched edge-to-edge
        margin: '0 auto',     // 👈 centers the block
      }}
    >
      <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>
        About Me
      </h2>
      <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#6b7280' }}>
        {about.map((line, i) => (
          <p key={i} style={{ marginBottom: '1rem' }}>
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
