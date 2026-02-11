import React from 'react';
import Tilt from 'react-parallax-tilt';
import { projects } from '../data/content.js';
import '../styles/grid.css';

export default function Projects() {
  return (
    <section style={{ padding: '4rem 2rem' }} id="projects">
      <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }}>Projects</h2>
      <div className="grid-container" style={{ marginTop: '2rem' }}>
        {projects.map((p) => (
          <Tilt key={p.id} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
            <div className="grid-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '600' }}>
                <span>{p.name}</span>
                <span style={{ color: '#6b7280' }}>#{p.id}</span>
              </div>
              <p style={{ marginTop: '0.75rem', color: '#6b7280' }}>{p.description}</p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'none', color: '#3b82f6', fontWeight: 'bold' }}
                >
                  View Project →
                </a>
                {p.name === 'CSR Denial Bot' && (
                  <a 
                    href="https://csr-bot.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ textDecoration: 'none', color: '#10b981', fontWeight: 'bold' }}
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
