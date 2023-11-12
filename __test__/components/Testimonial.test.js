import React, { createContext }  from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Testimonial from '@/app/components/Testimonial';

describe("Testimonial Component", () => {

  it("should render the title", () => {
    render(<Testimonial />);
    const titleElement = screen.getByText("When creativity meets developement web");
    expect(titleElement).toBeInTheDocument();
  });


  it("should render the subtitle", () => {
    render(<Testimonial />);
    const subtitleElement = screen.getByText("How it work");
    expect(subtitleElement).toBeInTheDocument();
  });
})
