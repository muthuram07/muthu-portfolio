import React from 'react';
import Tilt from 'react-parallax-tilt';
import { skills } from '../data/content.js';
import '../styles/grid.css';

export default function Skills() {
  return (
    <section style={{ padding: '4rem 2rem' }} id="skills">
      <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }}>My Skills</h2>
      <div className="grid-container" style={{ marginTop: '2rem' }}>
        {skills.map((s, i) => (
          <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
            <div className="grid-item">
              <h3 style={{ fontWeight: '600', fontSize: '1.1rem' }}>{s.name}</h3>
              <p style={{ marginTop: '0.5rem', color: '#6b7280' }}>{s.description}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
