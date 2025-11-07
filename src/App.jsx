import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
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
                  <p>Integrate AI capabilities into your existing systems to enhance automation, analytics, and decision-making processes.</p>
                </div>
              </div>
            </section>
            <section id="about" className="container section-padding">
              <h2>About Us</h2>
              <p>AiTeamDev is a cutting-edge development company leveraging the power of AI to deliver innovative solutions. We specialize in creating professional websites, custom software, and engaging games.</p>
              <p>Our team of AI developers and creative specialists work together to provide high-quality solutions that meet your business objectives while staying within budget constraints.</p>
              <div className="features" style={{ marginTop: '40px' }}>
                <div className="feature-card">
                  <h3>Budget-Friendly</h3>
                  <p>Specialized in $1-3 budget projects with efficient resource allocation</p>
                </div>
                <div className="feature-card">
                  <h3>Fast Delivery</h3>
                  <p>Accelerated development cycles with our AI-powered team</p>
                </div>
                <div className="feature-card">
                  <h3>Quality Assured</h3>
                  <p>Rigorous testing and quality control processes</p>
                </div>
              </div>
            </section>
            <section id="contact" className="container section-padding">
              <h2>Contact Us</h2>
              <p>Have a project in mind? We'd love to hear from you.</p>
              <p>Our AI team is ready to assist with your development needs within your budget constraints.</p>
              <a href="mailto:contact@davnstech.com" className="btn-secondary">Email Us</a>
            </section>
          </>
        );
      case 'about':
        return (
          <section className="container section-padding">
            <h2>About AiTeamDev</h2>
            <p>AiTeamDev is a cutting-edge development company leveraging the power of AI to deliver innovative solutions. We specialize in creating professional websites, custom software, and engaging games.</p>
            <p>Founded by a team of AI specialists, we bring together creative design and technical expertise to deliver exceptional results for our clients.</p>
            
            <div className="features" style={{ marginTop: '40px' }}>
              <div className="feature-card">
                <h3>Our Mission</h3>
                <p>To democratize access to high-quality development services through AI-powered solutions that are both affordable and effective.</p>
              </div>
              <div className="feature-card">
                <h3>Our Vision</h3>
                <p>To become the leading provider of AI-assisted development services for businesses of all sizes.</p>
              </div>
              <div className="feature-card">
                <h3>Our Values</h3>
                <p>Innovation, Quality, Efficiency, and Client Satisfaction are at the core of everything we do.</p>
              </div>
            </div>
          </section>
        );
      case 'services':
        return (
          <section className="container section-padding">
            <h2>Our Services</h2>
            <p>We offer a comprehensive range of development services tailored to meet your business needs and budget constraints.</p>
            
            <div className="features" style={{ marginTop: '40px' }}>
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
                <p>Integrate AI capabilities into your existing systems to enhance automation, analytics, and decision-making processes.</p>
              </div>
            </div>
          </section>
        );
      case 'contact':
        return (
          <section className="container section-padding">
            <h2>Contact Us</h2>
            <p>Have a project in mind? We'd love to hear from you.</p>
            <p>Our AI team is ready to assist with your development needs within your budget constraints.</p>
            
            <div className="features" style={{ marginTop: '40px' }}>
              <div className="feature-card">
                <h3>Email</h3>
                <p><a href="mailto:contact@davnstech.com">contact@davnstech.com</a></p>
              </div>
              <div className="feature-card">
                <h3>Project Inquiry</h3>
                <p>Ready to start your project? Contact us for a free consultation.</p>
              </div>
              <div className="feature-card">
                <h3>Support</h3>
                <p>Existing clients can reach our support team for assistance.</p>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <a href="mailto:contact@davnstech.com" className="btn-primary">Get in Touch</a>
            </div>
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
            <section id="about" className="container section-padding">
              <h2>About Us</h2>
              <p>AiTeamDev is a cutting-edge development company leveraging the power of AI to deliver innovative solutions. We specialize in creating professional websites, custom software, and engaging games.</p>
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
      {renderPageContent()}
      <Footer />
    </div>
  );
}

export default App;
