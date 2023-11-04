import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '@/app/components/Navigation';

describe('Navigation Component', () => {
  it('should render the component', () => {
    render(<Navigation />);
    // You can use queries from screen to find elements and make assertions
    expect(screen.getByText('Lemurian Agency')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });


});
