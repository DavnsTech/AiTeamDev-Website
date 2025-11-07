import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

/**
 * Main App component for the AiTeamDev website.
 * Manages the overall layout and rendering of different sections based on the current page state.
 * It dynamically renders content for Home, About, Services, and Contact sections.
 */
function App() {
  // State to keep track of the currently displayed page/section
  const [currentPage, setCurrentPage] = useState('home');

  /**
   * Renders the content for different pages/sections based on the currentPage state.
   * This function dynamically displays content for Home, About, Services, and Contact.
   * @returns {JSX.Element} The content for the current page.
   */
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            {/* HeroSection is always rendered for the home page and handles scrolling */}
            <HeroSection setCurrentPage={setCurrentPage} />

            {/* Services section is part of the home page content */}
            <section id="services" className="container section-padding">
              <h2>Our Services</h2>
              <div className="features">
                <div className="feature-card">
                  <h3>Website Creation</h3>
                  <p>Professional corporate websites tailored to your business needs, built with modern technologies and a focus on user experience.</p>
                </div>
                <div className="feature-card">
                  <h3>Software Development</h3>
                  <p>Custom software solutions developed by our AI-powered team, designed to streamline your operations and drive growth.</p>
                </div>
                <div className="feature-card">
                  <h3>Game Development</h3>
                  <p>Innovative and engaging games designed for modern platforms, from mobile to desktop, with a focus on quality and player satisfaction.</p>
                </div>
                <div className="feature-card">
                  <h3>App Development</h3>
                  <p>Cross-platform mobile and web applications built with efficiency and scalability in mind.</p>
                </div>
                <div className="feature-card">
                  <h3>SaaS Development</h3>
                  <p>Robust and scalable Software as a Service solutions to empower your business.</p>
                </div>
              </div>
            </section>

            {/* Contact section is also part of the home page content */}
            <section id="contact" className="container section-padding">
              <h2>Contact Us</h2>
              <p>Have a project in mind? We'd love to hear from you.</p>
              <a href="mailto:contact@davnstech.com" className="btn-secondary">Email Us</a>
            </section>
          </>
        );
      case 'about':
        return (
          <section id="about" className="container section-padding">
            <h2>About Us</h2>
            <p>AiTeamDev is a cutting-edge development company leveraging the power of AI to deliver innovative solutions. We specialize in creating professional websites, custom software, and engaging games.</p>
            <p>Our mission is to provide high-quality, budget-friendly development services, drawing from collective intelligence and AI-driven improvements to offer unparalleled value to our clients.</p>
          </section>
        );
      case 'services':
        return (
          <section id="services-page" className="container section-padding">
            <h2>Our Services</h2>
            <div className="features">
              <div className="feature-card">
                <h3>Website Creation</h3>
                <p>Professional corporate websites tailored to your business needs, built with modern technologies and a focus on user experience.</p>
              </div>
              <div className="feature-card">
                <h3>Software Development</h3>
                <p>Custom software solutions developed by our AI-powered team, designed to streamline your operations and drive growth.</p>
              </div>
              <div className="feature-card">
                <h3>Game Development</h3>
                <p>Innovative and engaging games designed for modern platforms, from mobile to desktop, with a focus on quality and player satisfaction.</p>
              </div>
              <div className="feature-card">
                <h3>App Development</h3>
                <p>Cross-platform mobile and web applications built with efficiency and scalability in mind.</p>
              </div>
              <div className="feature-card">
                <h3>SaaS Development</h3>
                <p>Robust and scalable Software as a Service solutions to empower your business.</p>
              </div>
            </div>
          </section>
        );
      case 'contact':
        return (
          <section id="contact-page" className="container section-padding">
            <h2>Contact Us</h2>
            <p>Have a project in mind? We'd love to hear from you.</p>
            <a href="mailto:contact@davnstech.com" className="btn-secondary">Email Us</a>
          </section>
        );
      default:
        return (
          <section className="container section-padding">
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
          </section>
        );
    }
  };

  // Effect to handle scrolling to the correct section when navigating
  useEffect(() => {
    if (currentPage === 'home') {
      // If on home, ensure we are at the top
      window.scrollTo(0, 0);
    } else {
      // For other pages, scroll to the corresponding section ID
      const sectionElement = document.getElementById(currentPage);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If the section ID doesn't match directly, try to find it by page name
        const pageSectionElement = document.getElementById(`${currentPage}-page`);
        if (pageSectionElement) {
          pageSectionElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Fallback: scroll to top if no specific section found
          window.scrollTo(0, 0);
        }
      }
    }
  }, [currentPage]); // Re-run effect when currentPage changes

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPageContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
