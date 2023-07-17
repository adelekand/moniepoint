import { screen } from "@testing-library/react";

export const getTextWithTags = (text: string) => {
  return screen.getByText((_, node) => {
    const hasText = (node: Element | null) => node?.textContent === text;
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node!.children).every(
      (child) => !hasText(child)
    );

    return nodeHasText && childrenDontHaveText;
  });
};
