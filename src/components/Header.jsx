import React from 'react';

/**
 * Header component for the AiTeamDev website.
 * Includes the logo and navigation links.
 * Manages the current active page and handles navigation clicks.
 * @param {object} props - Component props.
 * @param {string} props.currentPage - The current active page.
 * @param {function} props.setCurrentPage - Function to update the current page.
 */
function Header({ currentPage, setCurrentPage }) {
  /**
   * Handles click events on navigation links.
   * Updates the current page state and scrolls the window to the top.
   * @param {string} page - The page to navigate to.
   */
  const handleNavClick = (page) => {
    setCurrentPage(page);
    // Scroll to top when navigating to a new page
    if (page !== 'home') {
      window.scrollTo(0, 0);
    }
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
