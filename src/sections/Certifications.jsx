import React from 'react';
import Tilt from 'react-parallax-tilt';
import { certifications } from '../data/content.js';
import '../styles/grid.css';

export default function Certifications() {
  return (
    <section style={{ padding: '4rem 2rem' }} id="certifications">
      <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }}>Certifications</h2>
      <div className="grid-container" style={{ marginTop: '2rem' }}>
        {certifications.map((c, i) => (
          <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div className="grid-item" style={{ height: '220px' }}>
                <h3 style={{ fontWeight: '600', fontSize: '1.1rem' }}>{c.name}</h3>
                <p>{c.provider}</p>
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.9rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {c.description}
                </p>
              </div>
            </a>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
