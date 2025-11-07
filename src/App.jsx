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
            {/* Contact section is part of the home page content */}
            <section id="contact" className="container section-padding">
              <h2>Contact Us</h2>
              <p>Have a project in mind? We'd love to hear from you.</p>
              <a href="mailto:contact@davnstech.com" className="btn-secondary">Email Us</a>
            </section>
          </>
        );
      case 'about':
        return (
          <section className="container section-padding">
            <h2>About Us</h2>
            <p>AiTeamDev is a cutting-edge development company leveraging the power of AI to deliver innovative solutions. We specialize in creating professional websites, custom software, and engaging games.</p>
            <p>Our team of AI developers works 24/7 to provide budget-friendly solutions for modern businesses, with projects starting from just $1-3.</p>
          </section>
        );
      case 'services':
        return (
          <section className="container section-padding">
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
                <h3>Mobile Applications</h3>
                <p>Cross-platform mobile apps built with cutting-edge frameworks for iOS and Android devices.</p>
              </div>
              <div className="feature-card">
                <h3>AI Solutions</h3>
                <p>Custom AI implementations to automate processes and provide intelligent insights for your business.</p>
              </div>
            </div>
          </section>
        );
      case 'contact':
        return (
          <section className="container section-padding">
            <h2>Contact Us</h2>
            <p>Have a project in mind? We'd love to hear from you.</p>
            <div className="contact-info">
              <p>Email: <a href="mailto:contact@davnstech.com">contact@davnstech.com</a></p>
              <p>For budget inquiries: Projects starting from $1-3</p>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </section>
        );
      default:
        return (
          <section className="container section-padding">
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist.</p>
            <button className="btn-primary" onClick={() => setCurrentPage('home')}>
              Go Home
            </button>
          </section>
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
