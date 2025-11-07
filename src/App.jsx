import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <main>
        <section id="about" className="container section-padding">
          <h2>About Us</h2>
          <p>AiTeamDev is a cutting-edge development company leveraging the power of AI to deliver innovative solutions. We specialize in creating professional websites, custom software, and engaging games.</p>
        </section>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
