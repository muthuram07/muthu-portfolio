import React from 'react';
import { skills } from '../data/content.js';
import AnimatedCard from '../components/AnimatedCard.jsx';

export default function Skills() {
  const directions = ["up", "down", "left", "right"]; // cycle directions
  return (
    <section style={{ padding: '4rem 2rem' }} id="skills">
      <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>My Skills</h2>
      <div style={{ marginTop: '2rem', display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {skills.map((s, i) => (
          <AnimatedCard key={i} direction={directions[i % directions.length]}>
            <h3 style={{ fontWeight: '600', fontSize: '1.1rem' }}>{s.name}</h3>
            <p style={{ marginTop: '0.5rem', color: '#6b7280' }}>{s.description}</p>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
