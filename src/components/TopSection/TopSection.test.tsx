import { render, screen } from "@testing-library/react";
import TopSection from ".";
import { usePageData } from "@/hooks/usePageData";
import { getTextWithTags } from "@/utils/testHelpers";

describe("TopSection", () => {
  const handleScrollClick = jest.fn();

  const renderComponent = () => {
    const returnVal: any = {}
    function TestComponent() {
      Object.assign(returnVal, usePageData())
      return <TopSection handleScrollClick={handleScrollClick} />
    }
    render(<TestComponent />)
    return returnVal
  }

  test("should render component", () => {
    const { offers } = renderComponent();

    expect(screen.getByTestId("top-section")).toBeInTheDocument();
    expect(getTextWithTags("Our plans are saving policyholders 30% - 60% on premiums")).toBeInTheDocument();
    expect(screen.getByText(offers[1].text)).toBeInTheDocument();
    expect(screen.getByTestId("hot-air-balloon")).toBeInTheDocument();
  })

  test("should scroll to the middle section", () => {
    renderComponent();

    screen.getByTestId("scroll-to-section").click();
    expect(handleScrollClick).toBeCalled();
  })
})