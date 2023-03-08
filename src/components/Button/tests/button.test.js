import { render, screen } from "@testing-library/react";
import Button from "..";

describe("Button", () => {
  render(<Button value="Test" />);

  it("should render button without crash", () => {
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
