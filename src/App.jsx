import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

/**
 * Main App component for the AiTeamDev website.
 * Manages the overall layout and rendering of different sections based on the current page state.
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
                  <p>Native and cross-platform mobile applications built with cutting-edge technologies to engage your users effectively.</p>
                </div>
                <div className="feature-card">
                  <h3>SAAS Solutions</h3>
                  <p>Scalable cloud-based software solutions tailored to your business requirements with subscription-based models.</p>
                </div>
                <div className="feature-card">
                  <h3>AI Integration</h3>
                  <p>Integrate cutting-edge AI models and machine learning capabilities into your existing systems to enhance functionality and drive innovation.</p>
                </div>
              </div>
            </section>
            {/* Contact section is also part of the home page content */}
            <section id="contact" className="container section-padding">
              <h2>Contact Us</h2>
              <p>Have a project in mind? We'd love to hear from you.</p>
              {/* Using an anchor tag for mailto link */}
              <a href="mailto:contact@davnstech.com" className="btn-secondary">Email Us</a>
            </section>
          </>
        );
      case 'about':
        return (
          <section id="about" className="container section-padding">
            <h2>About Us</h2>
            <p>AiTeamDev is a cutting-edge development company leveraging the power of AI to deliver innovative solutions. We specialize in creating professional websites, custom software, and engaging games.</p>
            <p>Our mission is to empower businesses with intelligent technology, making advanced development accessible and affordable.</p>
          </section>
        );
      case 'services': // This case is handled within 'home' for single-page navigation, but kept for completeness if structured differently.
        return (
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
                <p>Native and cross-platform mobile applications built with cutting-edge technologies to engage your users effectively.</p>
              </div>
              <div className="feature-card">
                <h3>SAAS Solutions</h3>
                <p>Scalable cloud-based software solutions tailored to your business requirements with subscription-based models.</p>
              </div>
              <div className="feature-card">
                <h3>AI Integration</h3>
                <p>Integrate cutting-edge AI models and machine learning capabilities into your existing systems to enhance functionality and drive innovation.</p>
              </div>
            </div>
          </section>
        );
      case 'contact':
        return (
          <section id="contact" className="container section-padding">
            <h2>Contact Us</h2>
            <p>Have a project in mind? We'd love to hear from you.</p>
            <a href="mailto:contact@davnstech.com" className="btn-secondary">Email Us</a>
          </section>
        );
      default:
        return null; // Should not happen with current navigation
    }
  };

  return (
    <div className="App">
      {/* Header component, passed current page and setter function */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {/* Dynamically render page content */}
        {renderPageContent()}
      </main>
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
