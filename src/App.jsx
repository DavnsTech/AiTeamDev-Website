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
          <section id="about" className="container section-padding">
            <h2>About Us</h2>
            <p>AiTeamDev is a cutting-edge development company leveraging the power of AI to deliver innovative solutions. We specialize in creating professional websites, custom software, and engaging games.</p>
            <p>Our mission is to empower businesses with advanced AI-driven development services, offering cost-effective and high-quality solutions.</p>
          </section>
        );
      case 'services':
        return (
          <section id="services-page" className="container section-padding">
            <h2>Our Services</h2>
            <div className="features">
              <div className="feature-card">
                <h3>Website Creation</h3>
                <p>Professional corporate websites tailored to your business needs, built with modern technologies and a focus on user experience. We ensure responsive design and SEO optimization.</p>
              </div>
              <div className="feature-card">
                <h3>Software Development</h3>
                <p>Custom software solutions developed by our AI-powered team, designed to streamline your operations and drive growth. From enterprise applications to specialized tools.</p>
              </div>
              <div className="feature-card">
                <h3>Game Development</h3>
                <p>Innovative and engaging games designed for modern platforms, from mobile to desktop, with a focus on quality and player satisfaction. We bring your game ideas to life.</p>
              </div>
            </div>
          </section>
        );
      case 'contact':
        return (
          <section id="contact-page" className="container section-padding">
            <h2>Contact Us</h2>
            <p>Have a project in mind or want to learn more about our AI-powered development services?</p>
            <p>Reach out to us via email:</p>
            <a href="mailto:contact@davnstech.com" className="btn-primary">contact@davnstech.com</a>
            <p style={{ marginTop: '2rem' }}>Let's build something amazing together!</p>
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

  // Effect to handle initial page load and scrolling if there's a hash in the URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const pageName = hash.substring(1); // Remove '#'
        setCurrentPage(pageName);
        // Scroll to the element if it exists
        const element = document.getElementById(pageName === 'home' ? 'home' : `${pageName}-page`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (pageName === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        // If no hash, ensure we are on the home page and at the top
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash on mount

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


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
