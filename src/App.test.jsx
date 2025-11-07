import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mocking window.scrollTo to prevent actual scrolling during tests
const mockScrollTo = jest.fn();
global.window.scrollTo = mockScrollTo;

// Mocking scrollIntoView for elements
const mockScrollIntoView = jest.fn();
const originalGetElementById = document.getElementById;

describe('App Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockScrollTo.mockClear();
    mockScrollIntoView.mockClear();
    // Mock document.getElementById to return a mock element with scrollIntoView
    document.getElementById = jest.fn((id) => {
      if (id === 'contact' || id === 'contact-page' || id === 'about' || id === 'services' || id === 'services-page' || id === 'home') {
        return { scrollIntoView: mockScrollIntoView };
      }
      return null; // Return null for elements not mocked
    });
  });

  afterEach(() => {
    // Restore original getElementById after all tests
    document.getElementById = originalGetElementById;
  });

  test('renders the Header, HeroSection, and Footer', () => {
    render(<App />);
    // Check for elements that should be present on all pages
    expect(screen.getByText('AiTeamDev')).toBeInTheDocument(); // From Header
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument(); // From Footer
  });

  test('renders the Home section content by default', () => {
    render(<App />);
    // Check for elements specific to the home page
    expect(screen.getByRole('heading', { name: /welcome to aiteamdev/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByText(/budget-friendly solutions from \$1-3/i)).toBeInTheDocument();
  });

  test('navigates to About page when About link is clicked and scrolls to top', () => {
    render(<App />);
    const aboutButton = screen.getByRole('button', { name: /about/i });
    fireEvent.click(aboutButton);

    // Wait for state update and potential DOM changes
    waitFor(() => {
      expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
      expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
    });
  });

  test('navigates to Services page when Services link is clicked and scrolls to top', () => {
    render(<App />);
    const servicesButton = screen.getByRole('button', { name: /services/i });
    fireEvent.click(servicesButton);

    waitFor(() => {
      expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument();
      expect(screen.getByText(/website creation/i)).toBeInTheDocument(); // Check for service card content
      expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
    });
  });

  test('navigates to Contact page when Contact link is clicked and scrolls to top', () => {
    render(<App />);
    const contactButton = screen.getByRole('button', { name: /contact/i });
    fireEvent.click(contactButton);

    waitFor(() => {
      expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
      expect(screen.getByText(/have a project in mind/i)).toBeInTheDocument();
      expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
    });
  });

  test('HeroSection "Get Started" button scrolls to contact section', () => {
    render(<App />);
    const getStartedButton = screen.getByRole('button', { name: /get started/i });
    fireEvent.click(getStartedButton);

    waitFor(() => {
      expect(document.getElementById).toHaveBeenCalledWith('contact');
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
  });

  test('Logo click navigates to Home and scrolls to top', () => {
    render(<App />);
    // First, navigate to another page to test logo functionality
    const servicesButton = screen.getByRole('button', { name: /services/i });
    fireEvent.click(servicesButton);

    // Now click the logo
    const logo = screen.getByText('AiTeamDev');
    fireEvent.click(logo);

    waitFor(() => {
      // Should be back on the home page content
      expect(screen.getByRole('heading', { name: /welcome to aiteamdev/i })).toBeInTheDocument();
      expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
    });
  });

  test('handles hash changes in URL for navigation', () => {
    render(<App />);
    // Simulate a hash change
    window.location.hash = '#about';
    fireEvent.hashChange(window, { newURL: 'http://localhost:3000/#about' });

    waitFor(() => {
      expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
  });

  test('handles hash change to home and scrolls to top', () => {
    render(<App />);
    window.location.hash = '#home';
    fireEvent.hashChange(window, { newURL: 'http://localhost:3000/#home' });

    waitFor(() => {
      expect(screen.getByRole('heading', { name: /welcome to aiteamdev/i })).toBeInTheDocument();
      expect(mockScrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
  });
});
