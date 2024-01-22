import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../src/components/Header';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';


describe('Header component', () => {
  test('renders logo', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const logo = screen.getByAltText('Your Company');
    expect(logo).toBeInTheDocument();
  });

  test('opens mobile menu on button click', () => {
    render(<Router><Header /></Router>);
    const mobileMenuButton = screen.getByRole('button', { name: 'Open main menu' });
    fireEvent.click(mobileMenuButton);
    const mobileMenu = screen.getByRole('dialog');
    expect(mobileMenu).toBeInTheDocument();
  });

  test('closes mobile menu on close button click', () => {
    render(<Router><Header /></Router>);
    const mobileMenuButton = screen.getByRole('button', { name: 'Open main menu' });
    fireEvent.click(mobileMenuButton);
    const closeButton = screen.getByRole('button', { name: 'Close menu' });
    fireEvent.click(closeButton);
    const mobileMenu = screen.queryByRole('dialog');
    expect(mobileMenu).not.toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Router><Header /></Router>);
    const navigationLinks = screen.getAllByRole('link', { name: /navigation/i });
    expect(navigationLinks.length).toBeGreaterThan(0);
  });

  test('renders login link', () => {
    render(<Router><Header /></Router>);
    const loginLink = screen.getByRole('link', { name: /login/i });
    expect(loginLink).toBeInTheDocument();
  });
});