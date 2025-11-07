import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection Component', () => {
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
    // Mock scrollIntoView to prevent errors in test environment
    const mockScrollIntoView = jest.fn();
    // Mock document.getElementById to return a mock element with scrollIntoView
    const mockContactSection = { scrollIntoView: mockScrollIntoView };
    const getElementByIdSpy = jest.spyOn(document, 'getElementById').mockReturnValue(mockContactSection);

    const mockSetCurrentPage = jest.fn();
    render(<HeroSection setCurrentPage={mockSetCurrentPage} />);
    fireEvent.click(screen.getByRole('button', { name: /get started/i }));

    // Check if document.getElementById was called with 'contact'
    expect(getElementByIdSpy).toHaveBeenCalledWith('contact');
    // Check if scrollIntoView was called for the contact section
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    // Check if setCurrentPage was called
    expect(mockSetCurrentPage).toHaveBeenCalledWith('contact');

    // Restore original function
    getElementByIdSpy.mockRestore();
  });

  test('does not throw error if contact section is not found', () => {
    // Mock document.getElementById to return null
    const getElementByIdSpy = jest.spyOn(document, 'getElementById').mockReturnValue(null);

    const mockSetCurrentPage = jest.fn();
    // Rendering should not throw an error
    expect(() => render(<HeroSection setCurrentPage={mockSetCurrentPage} />)).not.toThrow();

    // Check if document.getElementById was still called
    expect(getElementByIdSpy).toHaveBeenCalledWith('contact');
    // Check that scrollIntoView and setCurrentPage were not called
    expect(mockSetCurrentPage).not.toHaveBeenCalled();

    // Restore original function
    getElementByIdSpy.mockRestore();
  });
});
