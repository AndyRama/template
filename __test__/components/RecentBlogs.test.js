import React, { createContext }  from 'react';
import { render, screen } from '@testing-library/react';
import RecentBlog from '@/app/components/RecentBlog';

describe("Testimonial Component", () => {

  it("should render the title", () => {
    render(<RecentBlog />);
    const titleElement = screen.getByText("When creativity meets developement web");
    expect(titleElement).toBeInTheDocument();
  });


  it("should render the subtitle", () => {
    render(<RecentBlog />);
    const subtitleElement = screen.getByText("How it work");
    expect(subtitleElement).toBeInTheDocument();
  });
})
