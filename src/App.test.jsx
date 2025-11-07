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
    document.getElementById = jest.fn((id) => {
      if (id === 'contact' || id === 'contact-page' || id === 'about' || id === 'services' || id === 'services-page') {
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

    // Wait for the state update and potential scroll effect
    waitFor(() => {
      expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
      // Ensure hero section is no longer visible when on about page
      expect(screen.queryByRole('heading', { name: /welcome to aiteamdev/i })).not.toBeInTheDocument();
      expect(mockScrollTo).toHaveBeenCalledWith(0, 0); // Assert scrolling to top
    });
  });

  test('navigates to Services page when Services link is clicked and scrolls to top', () => {
    render(<App />);
    const servicesButton = screen.getByRole('button', { name: /services/i });
    fireEvent.click(servicesButton);

    waitFor(() => {
      expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument();
      expect(screen.getByText('Website Creation')).toBeInTheDocument();
      // Ensure hero section is no longer visible when on services page
      expect(screen.queryByRole('heading', { name: /welcome to aiteamdev/i })).not.toBeInTheDocument();
      expect(mockScrollTo).toHaveBeenCalledWith(0, 0); // Assert scrolling to top
    });
  });

  test('navigates to Contact page when Contact link is clicked and scrolls to top', () => {
    render(<App />);
    const contactButton = screen.getByRole('button', { name: /contact/i });
    fireEvent.click(contactButton);

    waitFor(() => {
      expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
      expect(screen.getByText('Email Us')).toBeInTheDocument();
      // Ensure hero section is no longer visible when on contact page
      expect(screen.queryByRole('heading', { name: /welcome to aiteamdev/i })).not.toBeInTheDocument();
      expect(mockScrollTo).toHaveBeenCalledWith(0, 0); // Assert scrolling to top
    });
  });

  test('HeroSection "Get Started" button scrolls to contact section and updates page', () => {
    render(<App />);
    const getStartedButton = screen.getByRole('button', { name: /get started/i });
    fireEvent.click(getStartedButton);

    // Wait for the scroll and state update
    waitFor(() => {
      expect(document.getElementById).toHaveBeenCalledWith('contact'); // Ensure it tried to find the contact element
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' }); // Assert scrolling to contact
      expect(screen.getByRole('button', { name: /contact/i })).toHaveClass('active'); // Check if contact link is active
    });
  });

  test('Logo click navigates to home and scrolls to top', () => {
    render(<App />);
    // First, navigate to a different page
    fireEvent.click(screen.getByRole('button', { name: /about/i }));
    waitFor(() => expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument());

    // Then, click the logo
    fireEvent.click(screen.getByText('AiTeamDev'));
    waitFor(() => {
      expect(screen.getByRole('heading', { name: /welcome to aiteamdev/i })).toBeInTheDocument(); // Back to home
      expect(mockScrollTo).toHaveBeenCalledWith(0, 0); // Assert scrolling to top
    });
  });
});
