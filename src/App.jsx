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
          </section>
        );
      case 'services':
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
        return (
          <>
            <HeroSection setCurrentPage={setCurrentPage} />
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
              </div>
            </section>
            <section id="contact" className="container section-padding">
              <h2>Contact Us</h2>
              <p>Have a project in mind? We'd love to hear from you.</p>
              <a href="mailto:contact@davnstech.com" className="btn-secondary">Email Us</a>
            </section>
          </>
        );
    }
  };

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
