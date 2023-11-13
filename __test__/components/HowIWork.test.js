import React,{ createContext }  from "react";
import { render, screen } from "@testing-library/react";
import 'intersection-observer'
import HowIWork from "@/app/components/HowIWork";

describe("howIwork Component", () => {

  it("should render the title", () => {
    render(<HowIWork />);
    const titleElement = screen.getByText("When creativity meets developement web");
    expect(titleElement).toBeInTheDocument();
  });


  it("should render the subtitle", () => {
    render(<HowIWork />);
    const subtitleElement = screen.getByText("How it work");
    expect(subtitleElement).toBeInTheDocument();
  });

  it("should render the paragraph", () => {
    render(<HowIWork />);
    const pElement = screen.getByText("Nous nous spécialisons dans la création d'applications web sur-mesure, destinées à optimiser le quotidien de nos clients.");
    expect(pElement).toBeInTheDocument();
  });

});
