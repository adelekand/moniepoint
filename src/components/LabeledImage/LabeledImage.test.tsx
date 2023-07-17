import { render, screen, within } from "@testing-library/react";
import LabeledImage from ".";

describe("Header", () => {

  test("should render component", () => {
    const imageLabel1 = "Test Label 1";
    const imageLabel2 = "Test Label 2";

    const { rerender } = render(
      <LabeledImage
        src="/test.png"
        label={imageLabel1}
      />
    );

    expect(screen.getByTestId('labeled-image-container')).toBeInTheDocument();
    expect(screen.getByTestId('label')).toHaveTextContent(imageLabel1)

    rerender(
      <LabeledImage
        src="/test.png"
        label={imageLabel2}
      />
    )

    expect(screen.getByTestId('labeled-image-container')).toBeInTheDocument();
    expect(screen.getByTestId('label')).toHaveTextContent(imageLabel2)

  })
})