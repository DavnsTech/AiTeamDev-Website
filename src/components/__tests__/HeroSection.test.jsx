import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection Component', () => {
  test('renders the hero title and tagline', () => {
    render(<HeroSection setCurrentPage={() => {}} />);
    expect(screen.getByRole('heading', { name: /welcome to aiteamdev/i })).toBeInTheDocument();
    expect(screen.getByText(/your ai-powered development team/i)).toBeInTheDocument();
  });

  test('renders the "Get Started" button', () => {
    render(<HeroSection setCurrentPage={() => {}} />);
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
  });

  test('calls handleGetStarted when "Get Started" button is clicked', () => {
    // Mock scrollIntoView to prevent errors in test environment
    const mockScrollIntoView = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;

    const mockSetCurrentPage = jest.fn();
    render(<HeroSection setCurrentPage={mockSetCurrentPage} />);
    fireEvent.click(screen.getByRole('button', { name: /get started/i }));

    // Check if scrollIntoView was called for the contact section
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    // Check if setCurrentPage was called
    expect(mockSetCurrentPage).toHaveBeenCalledWith('contact');

    // Restore original function
    delete window.HTMLElement.prototype.scrollIntoView;
  });
});
