import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '@/app/components/Hero';

describe('Hero', () => {

  // Renders the component without errors
  it('should render without errors', () => {
    render(<Hero />);
    expect(screen.queryByText(/Creation & développement web par Lemur Agency/i)).toBeInTheDocument();
  });

  // Receives className prop and applies it to the section element
  it('should receive the expected props', () => {
    const className = "test-class";
    render(<Hero className={className} />);
    expect(screen.getByTestId("hero-section")).toHaveClass(className);
  });

  // Uses useRef hook to get a reference to the container element
  it('should use useRef hook to get a reference to the container element', () => {
    render(<Hero />);
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("hero-section")).toHaveAttribute("ref");
  });

  // Does not provide className prop and applies default styling
  it('should have null ref', () => {
    render(<Hero />);
    expect(screen.getByTestId("hero-section")).toHaveAttribute("ref", null);
  });
});

});
