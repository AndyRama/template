import React from "react";
import { render, screen } from "@testing-library/react";
import 'intersection-observer'
import Footer from "@/app/components/Footer";


describe('Component - Footer ', () => {
  it('should render the Footer-component with  main-title', () => {
    render(<Footer />);
    expect(screen.getByText("Lemurian")).toBeInTheDocument();
  });
});


describe('Component - Footer -left', () => {

  // Renders the Footer-component with main-subTitle
  it('should render the Footer-component with  main-title-1', () => {
    render(<Footer />);
    expect(screen.getByText("Product")).toBeInTheDocument();
  });

  // Renders the Footer-component with name-link
  it('should render the Footer-component with  links-product', () => {
    render(<Footer />);
    expect(screen.getByText("Overviews")).toBeInTheDocument();
  });

  // Renders the Footer-component with name-link
  it('should render the Footer-component with  links-product', () => {
    render(<Footer />);
    expect(screen.getByText("Solution")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  // Renders the Footer-component with name-link
  it('should render the Footer-component with  links-product', () => {
    render(<Footer />);
    expect(screen.getByText("Pricing")).toBeInTheDocument();
  });

  // Renders the Footer-component with name-link
  it('should render the Footer-component with  links-product', () => {
    render(<Footer />);
    expect(screen.getByText("Releases")).toBeInTheDocument();
  });
});

describe('Component - Footer - center', () => {

  // Renders the Footer-component with main-subTitle
  it('should render the Footer-component with  main-title-2', () => {
    render(<Footer />);
    expect(screen.getByText("Company")).toBeInTheDocument();
  });

  // Renders the Footer-component with name-link
  it('should render the Footer-component with  links-product', () => {
    render(<Footer />);
    expect(screen.getByText("About us")).toBeInTheDocument();
  });

    // Renders the Footer-component with name-link
    it('should render the Footer-component with  links-product', () => {
      render(<Footer />);
      expect(screen.getByText("Leadership")).toBeInTheDocument();
    });

  // Renders the Footer-component with name-link
  it('should render the Footer-component with  links-product', () => {
    render(<Footer />);
    expect(screen.getByText("Careers")).toBeInTheDocument();
    expect(screen.getByText("We're hiring")).toBeInTheDocument();
  });

  // Renders the Footer-component with name-link
  it('should render the Footer-component with  links-product', () => {
    render(<Footer />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  // Renders the Footer-component with name-link
  it('should render the Footer-component with  links-product', () => {
    render(<Footer />);
    expect(screen.getByText("Branding")).toBeInTheDocument();
  });

});

describe('Component - Footer - right', () => {

  // Renders the Footer-component with main-subTitle
  it('should render the Footer-component with  main-title-3', () => {
    render(<Footer />);
    expect(screen.getByText("Ressources")).toBeInTheDocument();
  });

  // Renders the Footer-component with name-link
  it('should render the Footer-component with  links-product', () => {
    render(<Footer />);
    expect(screen.getByText("Blog")).toBeInTheDocument();
  });

  // Renders the Footer-component with name-link
  it('should render the Footer-component with  links-product', () => {
    render(<Footer />);
    expect(screen.getByText("Events")).toBeInTheDocument();
  });

  // Renders the Footer-component with name-link
  it('should render the Footer-component with  links-product', () => {
    render(<Footer />);
    expect(screen.getByText("Newsletter")).toBeInTheDocument();
  });

  // Renders the Footer-component with name-link
  it('should render the Footer-component with  links-product', () => {
    render(<Footer />);
    expect(screen.getByText("Knowledge base")).toBeInTheDocument();
  });

  // Renders the Footer-component with name-link
  it('should render the Footer-component with  links-product', () => {
    render(<Footer />);
    expect(screen.getByText("Support")).toBeInTheDocument();
  });

});
