import React from 'react';
import { contact } from '../data/content.js';

export default function Footer() {
  return (
    <footer style={{ padding: '2rem', borderTop: '1px solid #222', marginTop: '3rem', textAlign: 'center', color: '#a1a1aa' }}>
      <div>© 2025 Muthu Raman — All Rights Reserved.</div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
        <a href={contact.github}>GitHub</a>
        <a href={contact.instagram}>Instagram</a>
        <a href={contact.linkedin}>LinkedIn</a>
      </div>
    </footer>
  );
}
