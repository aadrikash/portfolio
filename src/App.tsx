import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Certifications from './Certifications';
import Resume from './Resume';
import Contact from './Contact';
import BackToTop from './BackToTop';

const App: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(to bottom, #000000, #434343)',
      minHeight: '100vh',
      color: '#ffffff',
    }}>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;