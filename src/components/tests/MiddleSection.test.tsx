import { render, screen } from "@testing-library/react";
import MiddleSection from "../MiddleSection";
import { middleSectionData } from "@/data";
import { getTextWithTags } from "./helpers";

describe("MiddleSection", () => {

  test("it renders top section", () => {
    render(<MiddleSection data={middleSectionData} />);
    expect(screen.getByText(middleSectionData.title)).toBeInTheDocument();
    const subTitle = middleSectionData.subTitle.replace(/<br \/>/, '')
    expect(getTextWithTags(subTitle)).toBeInTheDocument();
  });
});
