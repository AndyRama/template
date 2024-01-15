import React,{ createContext }  from "react";
import { render, screen } from "@testing-library/react";
import 'intersection-observer'
import Team from "@/app/components/Team";

describe("Team Component", () => {

  it("should render the title", () => {
    render(<Team />);
    const titleElement = screen.getByText("Team Jeremy");
    expect(titleElement).toBeInTheDocument();
  });


  it("should render the subtitle", () => {
    render(<Team />);
    const subtitleElement = screen.getByText(/About me*/);
    expect(subtitleElement).toBeInTheDocument();
  });

  // it("should render the paragraph", () => {
  //   render(<HowIWork />);
  //   const pElement = screen.getByText("Nous nous spécialisons dans la création d'applications web sur-mesure, destinées à optimiser le quotidien de nos clients.");
  //   expect(pElement).toBeInTheDocument();
  // });

});
