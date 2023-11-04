import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '@/app/components/Navigation';

describe('Navigation', () => {

  // Renders the navigation menu with all links visible on desktop
  it('should render the navigation menu with all links visible on desktop', () => {
    render(<Navigation />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  // Renders the navigation menu with a hamburger icon on mobile
  it('should render the navigation menu with a hamburger icon on mobile', () => {
    render(<Navigation />);
    expect(screen.getByRole('button', { class: 'md:hidden text-md' })).toBeInTheDocument();
  });

});
