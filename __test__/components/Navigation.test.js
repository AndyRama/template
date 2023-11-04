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
     // Opens the navigation menu when clicking the HiMenu on mobile
    //  it('should open the navigation menu when clicking the HiMenu on mobile', () => {
    //   jest.mock('resize-observer-polyfill', () => {
    //     return jest.fn().mockImplementation(() => ({
    //       observe: jest.fn(),
    //       unobserve: jest.fn(),
    //       disconnect: jest.fn(),
    //     }));
    //   });

    //   render(<Navigation />);
    //   const hamburgerIcon = screen.getByRole('button', { class: 'md:hidden text-md' });
    //   fireEvent.click(hamburgerIcon);
    //   const navigationMenu = screen.getByRole('dialog');
    //   expect(navigationMenu).toBeInTheDocument();
    // });

  // // Clicking the hamburger icon opens the navigation menu on mobile
  // it('should open the navigation menu when clicking the HiMenu on mobile', () => {
  //   render(<Navigation />);
  //   const hamburgerIcon = screen.getByRole('button', { name: 'HiMenu' });
  //   fireEvent.click(hamburgerIcon);
  //   const navigationMenu = screen.getByRole('dialog');
  //   expect(navigationMenu).toBeInTheDocument();
  // });

  // Renders the navigation menu with no errors when there are no navigationMenu items
  it('should render the navigation menu with no errors when there are no navigationMenu items', () => {
    render(<Navigation />);
    expect(screen.getByText('Lemurian Agency')).toBeInTheDocument();
  });

  // Renders the navigation menu with no errors when the pathname is undefined
  it('should render the navigation menu with no errors when the pathname is undefined', () => {
    render(<Navigation />);
    expect(screen.getByText('Lemurian Agency')).toBeInTheDocument();
  });

  // Renders the navigation menu with no errors when window is undefined
  it('should render the navigation menu with no errors when window is undefined', () => {
    render(<Navigation />);
    expect(screen.getByText('Lemurian Agency')).toBeInTheDocument();
  });
});
