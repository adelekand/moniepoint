import { render, screen } from "@testing-library/react";
import BottomSection from "../BottomSection";
import { bottomSectionData } from "@/data";
import { getTextWithTags } from "./helpers";

describe("TopSection", () => {
  

  test("it renders top section", () => {
    render(<BottomSection data={bottomSectionData} />);
    expect(screen.getByText(bottomSectionData.title)).toBeInTheDocument();
    expect(screen.getByText(bottomSectionData.subTitle)).toBeInTheDocument();

    expect(screen.getByText(bottomSectionData.pricing.amount)).toBeInTheDocument();
    expect(
      screen.getByText(bottomSectionData.pricing.tagLine)
    ).toBeInTheDocument();
    expect(screen.getByText(bottomSectionData.pricing.terms)).toBeInTheDocument();

  });
});
