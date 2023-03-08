import { render, screen } from "@testing-library/react";
import HomeNavbar from "..";

describe("HomeNavbar", () => {
  render(<HomeNavbar />);
  it("should render navbar without crash", () => {
    expect(screen.getByText("DISCORD SOCIAL")).toBeInTheDocument();
  });
});
