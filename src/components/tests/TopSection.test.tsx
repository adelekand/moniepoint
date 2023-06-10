import { render, screen } from "@testing-library/react";
import TopSection from "../TopSection";
import { topSectionData } from "@/data";
import { getTextWithTags } from "./helpers";

describe("TopSection", () => {
  

  test("it renders top section", () => {
    render(<TopSection data={topSectionData} />);
    const bannerTitle = "Open a NorthOne Account for one low monthly fee1"
    expect(getTextWithTags(bannerTitle)).toBeInTheDocument();

    const subTitle = "Get a smart, digital Deposit Account for one low monthly fee1. Join now with no commitments, cancel anytime.";
    expect(getTextWithTags(subTitle)).toBeInTheDocument();

    expect(screen.getByText(topSectionData.pricing.amount)).toBeInTheDocument();
    expect(
      screen.getByText(topSectionData.pricing.duration)
    ).toBeInTheDocument();
    expect(screen.getByText(topSectionData.pricing.terms)).toBeInTheDocument();

    topSectionData.services.forEach((service) =>
      expect(screen.getByText(service.name)).toBeInTheDocument()
    );
  });
});
