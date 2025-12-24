import React from 'react';
import { contact } from '../data/content.js';
// Using react-icons for premium vector icons
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '4rem 2rem',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f9fafb, #eef2ff)',
        borderRadius: '1rem',
      }}
    >
      <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1f2937' }}>
        Contact
      </h2>
      <p style={{ marginBottom: '2rem', color: '#6b7280', fontSize: '1.1rem' }}>
        Interested in working together? Reach out via any of these:
      </p>

      {/* Contact details */}
      <div style={{ marginBottom: '2rem', color: '#374151', fontSize: '1.1rem' }}>
        <p>📍 Madurai, Tamil Nadu</p>
        <p>
          <FaPhone style={{ marginRight: '0.5rem', color: '#0ea5e9' }} />
          9087615536
        </p>
        <p>
          <FaEnvelope style={{ marginRight: '0.5rem', color: '#0ea5e9' }} />
          <a
            href="mailto:muthuramansaravanan31@gmail.com"
            style={{ color: '#0ea5e9', textDecoration: 'none', fontWeight: '500' }}
          >
            muthuramansaravanan31@gmail.com
          </a>
        </p>
      </div>

      {/* Social links with icons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <a
          href={contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#E1306C', fontSize: '2rem' }}
        >
          <FaInstagram />
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#333', fontSize: '2rem' }}
        >
          <FaGithub />
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0A66C2', fontSize: '2rem' }}
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
