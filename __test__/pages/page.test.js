import React from "react";
import { render } from "@testing-library/react";
import Hero from "@/app/components/Hero";
import Home from "@/app/page";

describe("Home Component", () => {
  it("should render the Home component with the Hero component", () => {
    const { container } = render(<Home />);
    const heroComponent = screen.getByText(/Creation & développement web par Lemurian Agency/i);
    expect(heroComponent).toBeInTheDocument();
  });
});
