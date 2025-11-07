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
        <section id="features">
          <div className="container">
            <h2>Our Services</h2>
            <div className="features">
              <div className="feature-card">
                <h3>Website Creation</h3>
                <p>Professional corporate websites tailored to your business needs.</p>
              </div>
              <div className="feature-card">
                <h3>Software Development</h3>
                <p>Custom software solutions developed by our AI-powered team.</p>
              </div>
              <div className="feature-card">
                <h3>Game Development</h3>
                <p>Innovative and engaging games designed for modern platforms.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
