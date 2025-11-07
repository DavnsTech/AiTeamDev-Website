import React from 'react';

function HeroSection({ setCurrentPage }) {
  const handleGetStarted = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact'); // ID used in App.jsx for home page
    const contactPageSection = document.getElementById('contact-page'); // ID used in App.jsx for contact page

    if (contactPageSection) {
      contactPageSection.scrollIntoView({ behavior: 'smooth' });
      setCurrentPage('contact'); // Update state to reflect the contact page
    } else if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setCurrentPage('contact'); // Update state to reflect the contact page
    }

    // Update URL hash to reflect the current page for deep linking/refreshing
    window.location.hash = 'contact';
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Welcome to AiTeamDev</h1>
        <p>Your AI-powered development team for modern businesses</p>
        <p>Budget-friendly solutions from $1-3 with high-quality results</p>
        <button className="btn-primary" onClick={handleGetStarted} aria-label="Get Started with AiTeamDev">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
