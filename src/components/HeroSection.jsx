import React from 'react';

function HeroSection({ setCurrentPage }) {
  const handleGetStarted = () => {
    // Programmatically scroll to the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Optionally, update the current page state to reflect the view
    setCurrentPage('contact');
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Welcome to AiTeamDev</h1>
        <p>Your AI-powered development team for modern businesses</p>
        <button className="btn-primary" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
