import React from 'react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="path/to/your/cinematic-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', textAlign: 'center' }}>
        <h1>Where dreams rise through the silence</h1>
        <p>Your tools for designing the future.</p>
        <button onClick={scrollToAbout}>Begin Journey</button>
      </div>
    </div>
  );
};

export default Hero;
