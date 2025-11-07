import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Header from '../Header';

// Mocking window.scrollTo
const mockScrollTo = jest.fn();
global.window.scrollTo = mockScrollTo;

// Mocking window.location.hash
const mockSetHash = jest.fn();
const originalLocation = window.location;

describe('Header Component', () => {
  beforeEach(() => {
    mockScrollTo.mockClear(); // Clear mock before each test
    mockSetHash.mockClear();

    // Mock window.location.hash setter
    Object.defineProperty(window, 'location', {
      value: {
        ...originalLocation,
        hash: '',
        set hash(value) {
          mockSetHash(value);
          this._hash = value; // Store value internally for subsequent reads
        },
        get hash() {
          return this._hash || '';
        }
      },
      configurable: true,
    });
  });

  afterEach(() => {
    // Restore original window.location
    Object.defineProperty(window, 'location', { value: originalLocation, configurable: true });
  });

  test('renders the logo', () => {
    render(<Header currentPage="home" setCurrentPage={() => {}} />);
    expect(screen.getByText('AiTeamDev')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Header currentPage="home" setCurrentPage={() => {}} />);
    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /contact/i })).toBeInTheDocument();
  });

  test('calls setCurrentPage when logo is clicked', () => {
    const mockSetCurrentPage = jest.fn();
    render(<Header currentPage="about" setCurrentPage={mockSetCurrentPage} />);
    fireEvent.click(screen.getByText('AiTeamDev'));
    expect(mockSetCurrentPage).toHaveBeenCalledWith('home');
    expect(mockScrollTo).toHaveBeenCalledWith(0, 0); // Check if scroll to top is called
    expect(mockSetHash).toHaveBeenCalledWith(''); // Check if hash is cleared for home
  });

  test('calls setCurrentPage when a navigation link is clicked', () => {
    const mockSetCurrentPage = jest.fn();
    render(<Header currentPage="home" setCurrentPage={mockSetCurrentPage} />);
    fireEvent.click(screen.getByRole('button', { name: /about/i }));
    expect(mockSetCurrentPage).toHaveBeenCalledWith('about');
    expect(mockScrollTo).toHaveBeenCalledWith(0, 0); // Check if scroll to top is called
    expect(mockSetHash).toHaveBeenCalledWith('about'); // Check if hash is updated
  });

  test('applies active class to the current page link', () => {
    render(<Header currentPage="services" setCurrentPage={() => {}} />);
    const servicesButton = screen.getByRole('button', { name: /services/i });
    expect(servicesButton).toHaveClass('active');

    const homeButton = screen.getByRole('button', { name: /home/i });
    expect(homeButton).not.toHaveClass('active');
  });

  test('does not apply active class to other links', () => {
    render(<Header currentPage="about" setCurrentPage={() => {}} />);
    const homeButton = screen.getByRole('button', { name: /home/i });
    const servicesButton = screen.getByRole('button', { name: /services/i });
    const contactButton = screen.getByRole('button', { name: /contact/i });

    expect(homeButton).not.toHaveClass('active');
    expect(servicesButton).not.toHaveClass('active');
    expect(contactButton).not.toHaveClass('active');
  });
});
