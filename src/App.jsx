import React from 'react';
import Nav from './components/Nav.jsx';
import Projects from './sections/Projects.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import Skills from './sections/Skills.jsx'; 
import Certifications from './sections/Certifications.jsx';
import './App.css';
import HeroSection from './sections/HeroSection.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Projects />
       <Skills />
       <Certifications />
      <About />
      <Contact />
      <Footer />
      
    </>
  );
}
