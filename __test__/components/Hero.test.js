import React, { createContext }  from "react";
import { render, screen } from "@testing-library/react";
import 'intersection-observer'
import Hero from "@/app/components/Hero";

describe("Hero Component", () => {

  it("should render the title", () => {
    render(<Hero />);
    const titleElement = screen.getByText("Creation & développement web par Lemurian Agency");
    expect(titleElement).toBeInTheDocument();
  });


  it("should render the subtitle", () => {
    render(<Hero />);
    const subtitleElement = screen.getByText("Welcome");
    expect(subtitleElement).toBeInTheDocument();
  });

  it("should render the button", () => {
    render(<Hero />);
    const buttonElement = screen.getByText("View Projects");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render the hero image", () => {
    render(<Hero />);
    const imageElement = screen.getByAltText("hero image");
    expect(imageElement).toBeInTheDocument();
  });
});
