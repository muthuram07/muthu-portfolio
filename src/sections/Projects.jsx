import React from 'react';
import { projects } from '../data/content.js';
import AnimatedCard from '../components/AnimatedCard.jsx';

export default function Projects() {
  const directions = ["left", "right", "up", "down"];
  return (
    <section style={{ padding: '4rem 2rem' }} id="projects">
      <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>Projects</h2>
      <div style={{ marginTop: '2rem', display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {projects.map((p, i) => (
          <AnimatedCard key={p.id} direction={directions[i % directions.length]}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '600' }}>
              <span>{p.name}</span>
              <span style={{ color: '#6b7280' }}>{p.id}</span>
            </div>
            <p style={{ marginTop: '0.75rem', color: '#6b7280' }}>{p.description}</p>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
