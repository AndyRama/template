import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import About from '@/app/components/About';


// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    // do nothing
  }

  disconnect() {
    // do nothing
  }
};

describe('Component - About', () => {

  // Renders the about-component with main-title
  it('should render the about-component with  main-title', () => {
    render(<About />);
    expect(screen.getByText(/When creativity meets developement web*/)).toBeInTheDocument();
  });

  // Renders the about-component with main-subTitle
  it('should render the about-component with  main-subtitle', () => {
    render(<About />);
    expect(screen.getByText(/About Me*/)).toBeInTheDocument();
  });

  // Renders in the about-component title for aboutContent
  it('should render in the about-component title for aboutContent', () => {
    render(<About />);
    expect(screen.getByText(/Architects of Inovation, Builders of Beauty\s*web application/)).toBeInTheDocument();  });

  //Image

  it('should render the image in the about-component', () => {
    render(<About />);
    const image = screen.getByAltText(/About Image*/);
    expect(image).toBeInTheDocument();
  });

  // Renders btn in the about-component with text
  it('should render btn in the about-component with name', () => {
    render(<About />);
    expect(screen.getByText(/Learn about me*/)).toBeInTheDocument();
  });
});
