import React from 'react';

/**
 * Hero section component for the AiTeamDev website.
 * Displays the main headline, tagline, and a call-to-action button.
 * @param {object} props - Component props.
 * @param {function} props.setCurrentPage - Function to update the current page, used here to scroll to contact.
 */
function HeroSection({ setCurrentPage }) {
  /**
   * Handles the "Get Started" button click.
   * Scrolls the page to the contact section and updates the current page state.
   */
  const handleGetStarted = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Update page state to contact
    setCurrentPage('contact');
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Welcome to AiTeamDev</h1>
        <p>Your AI-powered development team for modern businesses</p>
        <p>Budget-friendly solutions from $1-3 with high-quality results</p>
        <button className="btn-primary" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
