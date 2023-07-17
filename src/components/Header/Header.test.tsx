import { render, screen, within } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  test("should render component", () => {
    render(<Header />)

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("logo")).toBeInTheDocument();

    const navlinks = screen.getByTestId("nav-links");
    within(navlinks).findByText("Home")
    within(navlinks).findByText("Services")
    within(navlinks).findByText("About us")
    within(navlinks).findByText("Blog")
    within(navlinks).findByText("Career")

    expect(screen.getByText("Contact us")).toBeInTheDocument();
  })
})