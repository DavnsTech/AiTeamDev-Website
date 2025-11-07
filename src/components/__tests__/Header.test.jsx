import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
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
  });

  test('calls setCurrentPage when a navigation link is clicked', () => {
    const mockSetCurrentPage = jest.fn();
    render(<Header currentPage="home" setCurrentPage={mockSetCurrentPage} />);
    fireEvent.click(screen.getByRole('button', { name: /about/i }));
    expect(mockSetCurrentPage).toHaveBeenCalledWith('about');
  });

  test('applies active class to the current page link', () => {
    render(<Header currentPage="services" setCurrentPage={() => {}} />);
    expect(screen.getByRole('button', { name: /services/i })).toHaveClass('active');
    expect(screen.getByRole('button', { name: /home/i })).not.toHaveClass('active');
  });

  // Test for scrolling to top when navigating
  test('scrolls to top when navigating', () => {
    const mockScrollTo = jest.fn();
    window.scrollTo = mockScrollTo;

    render(<Header currentPage="home" setCurrentPage={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: /about/i }));

    expect(mockScrollTo).toHaveBeenCalledWith(0, 0);

    // Restore original function
    window.scrollTo = jest.fn(); // Or restore from a saved reference if needed
  });
});
