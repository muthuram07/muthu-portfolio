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
          <a 
            href={p.link} 
            key={p.id} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <AnimatedCard direction={directions[i % directions.length]}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '600' }}>
                <span>{p.name}</span>
                <span style={{ color: '#6b7280' }}>#{p.id}</span>
              </div>
              <p style={{ marginTop: '0.75rem', color: '#6b7280' }}>{p.description}</p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#3b82f6', fontWeight: 'bold' }}>
                View Project →
              </div>
            </AnimatedCard>
          </a>
        ))}
      </div>
    </section>
  );
}
