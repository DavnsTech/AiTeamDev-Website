import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
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
  });

  test('navigates to About page when About link is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /about/i }));
    expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
    // Ensure hero section is no longer visible when on about page
    expect(screen.queryByRole('heading', { name: /welcome to aiteamdev/i })).not.toBeInTheDocument();
  });

  test('navigates to Services page when Services link is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /services/i }));
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument();
    expect(screen.getByText('Website Creation')).toBeInTheDocument();
    // Ensure hero section is no longer visible when on services page
    expect(screen.queryByRole('heading', { name: /welcome to aiteamdev/i })).not.toBeInTheDocument();
  });

  test('navigates to Contact page when Contact link is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /contact/i }));
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByText(/have a project in mind?/i)).toBeInTheDocument();
    // Ensure hero section is no longer visible when on contact page
    expect(screen.queryByRole('heading', { name: /welcome to aiteamdev/i })).not.toBeInTheDocument();
  });

  test('scrolls to contact section when Get Started button is clicked', () => {
    // Mock scrollIntoView to prevent errors in test environment
    const mockScrollIntoView = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;

    render(<App />);
    const getStartedButton = screen.getByRole('button', { name: /get started/i });
    fireEvent.click(getStartedButton);

    // Check if scrollIntoView was called for the contact section
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    // Check if the current page state is updated to 'contact'
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();

    // Restore original function
    delete window.HTMLElement.prototype.scrollIntoView;
  });
});
