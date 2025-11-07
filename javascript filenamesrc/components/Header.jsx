import React from 'react';

function Header({ currentPage, setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <header>
      <nav className="container">
        <div 
          className="logo" 
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer' }}
        >
          AiTeamDev
        </div>
        <ul className="nav-links">
          <li>
            <button 
              className={currentPage === 'home' ? 'active' : ''} 
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'about' ? 'active' : ''} 
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'services' ? 'active' : ''} 
              onClick={() => handleNavClick('services')}
            >
              Services
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'contact' ? 'active' : ''} 
              onClick={() => handleNavClick('contact')}
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
