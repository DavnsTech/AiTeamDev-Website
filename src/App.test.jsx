import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the Header, HeroSection, and Footer', () => {
    render(<App />);
    expect(screen.getByText('AiTeamDev')).toBeInTheDocument(); // From Header
    expect(screen.getByRole('heading', { name: /welcome to aiteamdev/i })).toBeInTheDocument(); // From HeroSection
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument(); // From Footer
  });

  test('renders the Home section content by default', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
  });

  test('navigates to About page when About link is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /about/i }));
    expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /welcome to aiteamdev/i })).not.toBeInTheDocument();
  });

  test('navigates to Services page when Services link is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /services/i }));
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument();
    expect(screen.getByText('Website Creation')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /welcome to aiteamdev/i })).not.toBeInTheDocument();
  });

  test('navigates to Contact page when Contact link is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /contact/i }));
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByText(/have a project in mind?/i)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /welcome to aiteamdev/i })).not.toBeInTheDocument();
  });

  test('clicking "Get Started" in Hero scrolls to contact and updates page', () => {
    // Mock scrollIntoView to prevent errors in test environment
    const mockScrollIntoView = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;

    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /get started/i }));

    // Check if it scrolled and updated the page state
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /welcome to aiteamdev/i })).not.toBeInTheDocument();

    // Restore original function
    delete window.HTMLElement.prototype.scrollIntoView;
  });
});
