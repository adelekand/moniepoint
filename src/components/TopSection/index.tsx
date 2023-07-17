"use client";

import { BsArrowDown } from "@react-icons/all-files/bs/BsArrowDown"
import { Typography } from "../core/Typography";
import AnimatedContainer from "../AnimatedContainer";
import { usePageData } from "@/hooks/usePageData";
import ImagePill from "../ImagePill";
import Offers from "../Offers";

interface TopSectionProps {
  handleScrollClick: () => void;
}

const TopSection = ({ handleScrollClick }: TopSectionProps) => {

  const { heroTitle, offers } = usePageData();

  return (
    <section
      className="top-section"
      data-testid="top-section"
    >
      <AnimatedContainer
        className="banner"
        delay={0.2}
      >
        {heroTitle.split(" ").map((word, idx) => (
          <AnimatedContainer
            key={idx}
            element="span"
            delay={Number(`0.${idx + 3}`)}
          >
            <Typography variant="h1" className="bannerText" text={word} />
          </AnimatedContainer>
        ))}
      </AnimatedContainer>

      <Offers offers={offers}>
        <button
          className="scroll"
          onClick={handleScrollClick}
          data-testid="scroll-to-section"
        >
          <BsArrowDown size={40} />
        </button>
      </Offers>

      <ImagePill
        src="/assets/images/hot-air-balloon.jpeg"
        alt="hot air balloon"
        data-testid="hot-air-balloon"
        shadow
      />
    </section>
  );
}

export default TopSection;
