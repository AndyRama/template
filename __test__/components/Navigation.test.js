import Navigation from "@/app/components/Navigation";
import { render, screen } from "@testing-library/react";


describe("Navigation title", () => {
  test("displays a title navbar", () => {
    render(<Navigation />);
    const LinkElement = screen.getByText(/Lemurian Agency/i);
    expect(LinkElement).toBeInTheDocument();
  });

  test("displays link home navbar", () => {
    render(<Navigation />);
    const LinkElement = screen.getByText(/Home/i);
    expect(LinkElement).toBeInTheDocument();
  });

  test("displays link projects navbar", () => {
    render(<Navigation />);
    const LinkElement = screen.getByText(/Projects/i);
    expect(LinkElement).toBeInTheDocument();
  });

  test("displays link blog navbar", () => {
    render(<Navigation />);
    const LinkElement = screen.getByText(/Blog/i);
    expect(LinkElement).toBeInTheDocument();
  });

  test("displays link about navbar", () => {
    render(<Navigation />);
    const LinkElement = screen.getByText(/About/i);
    expect(LinkElement).toBeInTheDocument();
  });

  test("displays link contact navbar", () => {
    render(<Navigation />);
    const LinkElement = screen.getByText(/Contact/i);
    expect(LinkElement).toBeInTheDocument();
  });


});
