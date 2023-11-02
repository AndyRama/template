import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page title", () => {
  test("displays a title H1", () => {
    render(<Home />);
    const titleElement = screen.getByText(/Home page/i);
    expect(titleElement).toBeInTheDocument();
  });
});
