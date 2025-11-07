import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HeroSection from '../HeroSection';

// Mocking scrollIntoView for elements
const mockScrollIntoView = jest.fn();
const originalGetElementById = document.getElementById;

// Mocking window.location.hash
const mockSetHash = jest.fn();
const originalLocation = window.location;

describe('HeroSection Component', () => {
  beforeEach(() => {
    // Mock document.getElementById to return a mock element with scrollIntoView
    document.getElementById = jest.fn((id) => {
      if (id === 'contact' || id === 'contact-page') {
        return { scrollIntoView: mockScrollIntoView };
      }
      return null; // Return null for elements not mocked
    });

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
    // Restore original getElementById and window.location
    document.getElementById = originalGetElementById;
    Object.defineProperty(window, 'location', { value: originalLocation, configurable: true });
  });

  test('renders the hero title and tagline', () => {
    render(<HeroSection setCurrentPage={() => {}} />);
    expect(screen.getByRole('heading', { name: /welcome to aiteamdev/i })).toBeInTheDocument();
    expect(screen.getByText(/your ai-powered development team/i)).toBeInTheDocument();
    expect(screen.getByText(/budget-friendly solutions from \$1-3 with high-quality results/i)).toBeInTheDocument();
  });

  test('renders the "Get Started" button', () => {
    render(<HeroSection setCurrentPage={() => {}} />);
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
  });

  test('calls handleGetStarted when "Get Started" button is clicked', () => {
    const mockSetCurrentPage = jest.fn();
    render(<HeroSection setCurrentPage={mockSetCurrentPage} />);
    fireEvent.click(screen.getByRole('button', { name: /get started/i }));

    // Check if document.getElementById was called with 'contact' or 'contact-page'
    expect(document.getElementById).toHaveBeenCalledWith(expect.stringContaining('contact'));
    // Check if scrollIntoView was called for the contact section
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    // Check if setCurrentPage was called
    expect(mockSetCurrentPage).toHaveBeenCalledWith('contact');
    // Check if hash was updated
    expect(mockSetHash).toHaveBeenCalledWith('contact');
  });

  test('scrolls to contact-page if it exists', () => {
    // Mock getElementById to return contact-page specifically
    document.getElementById = jest.fn((id) => {
      if (id === 'contact-page') {
        return { scrollIntoView: mockScrollIntoView };
      }
      return null;
    });

    const mockSetCurrentPage = jest.fn();
    render(<HeroSection setCurrentPage={mockSetCurrentPage} />);
    fireEvent.click(screen.getByRole('button', { name: /get started/i }));

    expect(document.getElementById).toHaveBeenCalledWith('contact-page');
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(mockSetCurrentPage).toHaveBeenCalledWith('contact');
  });

  test('scrolls to contact if contact-page does not exist', () => {
    // Mock getElementById to return only 'contact'
    document.getElementById = jest.fn((id) => {
      if (id === 'contact') {
        return { scrollIntoView: mockScrollIntoView };
      }
      return null;
    });

    const mockSetCurrentPage = jest.fn();
    render(<HeroSection setCurrentPage={mockSetCurrentPage} />);
    fireEvent.click(screen.getByRole('button', { name: /get started/i }));

    expect(document.getElementById).toHaveBeenCalledWith('contact');
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(mockSetCurrentPage).toHaveBeenCalledWith('contact');
  });
});
