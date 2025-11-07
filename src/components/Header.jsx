import React from 'react';

function Header({ currentPage, setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
    // Update URL hash to reflect the current page for deep linking/refreshing
    window.location.hash = page === 'home' ? '' : page;
  };

  return (
    <header>
      <nav className="container">
        <div 
          className="logo" 
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer' }}
          aria-label="Go to Home"
        >
          AiTeamDev
        </div>
        <ul className="nav-links">
          <li>
            <button 
              className={currentPage === 'home' ? 'active' : ''} 
              onClick={() => handleNavClick('home')}
              aria-label="Navigate to Home"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'about' ? 'active' : ''} 
              onClick={() => handleNavClick('about')}
              aria-label="Navigate to About Us"
            >
              About
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'services' ? 'active' : ''} 
              onClick={() => handleNavClick('services')}
              aria-label="Navigate to Services"
            >
              Services
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'contact' ? 'active' : ''} 
              onClick={() => handleNavClick('contact')}
              aria-label="Navigate to Contact Us"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
