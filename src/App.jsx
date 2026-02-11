import React from 'react';
import TopNav from './components/TopNav.jsx';
import Projects from './sections/Projects.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import Skills from './sections/Skills.jsx'; 
import Certifications from './sections/Certifications.jsx';
import './styles/global.css.ts';
import HeroSection from './sections/HeroSection.jsx';
import StarsCanvas from './components/canvas/Stars.jsx';

export default function App() {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <StarsCanvas />
        <TopNav />
        <HeroSection />
        <Projects />
        <Skills />
        <Certifications />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
