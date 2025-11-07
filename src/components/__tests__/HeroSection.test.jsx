import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HeroSection from '../HeroSection';

// Mocking scrollIntoView for elements
const mockScrollIntoView = jest.fn();
const originalGetElementById = document.getElementById;

describe('HeroSection Component', () => {
  beforeEach(() => {
    // Mock document.getElementById to return a mock element with scrollIntoView
    document.getElementById = jest.fn((id) => {
      if (id === 'contact') {
        return { scrollIntoView: mockScrollIntoView };
      }
      return null; // Return null for elements not mocked
    });
  });

  afterEach(() => {
    // Restore original getElementById after all tests
    document.getElementById = originalGetElementById;
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

    // Check if document.getElementById was called with 'contact'
    expect(document.getElementById).toHaveBeenCalledWith('contact');
    // Check if scrollIntoView was called for the contact section
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    // Check if setCurrentPage was called
    expect(mockSetCurrentPage).toHaveBeenCalledWith('contact');
  });

  test('does not throw error if contact section is not found', () => {
    // Mock document.getElementById to return null
    document.getElementById = jest.fn(() => null);

    const mockSetCurrentPage = jest.fn();
    // Render the component and click the button
    render(<HeroSection setCurrentPage={mockSetCurrentPage} />);
    expect(() => fireEvent.click(screen.getByRole('button', { name: /get started/i }))).not.toThrow();

    // Ensure mockSetCurrentPage is still called, as the logic proceeds even if scroll fails
    expect(mockSetCurrentPage).toHaveBeenCalledWith('contact');
  });
});
