"use client";

import AnimatedContainer from "./AnimatedContainer";
import BottomLinks from "./BottomLinks";
import ScrollToView from "./ScrollToView";
import TabPills from "./TabPills";
import TravelCalculator from "./TravelCalculator";
import { Typography } from "./core/Typography";

const BottomSection = () => {
  const tabs = [
    {
      id: 0,
      title: "Travel",
      content: <TravelCalculator />,
    },
    {
      id: 1,
      title: "Health",
      content: <TravelCalculator />,
    },
    {
      id: 2,
      title: "CASCO",
      content: <TravelCalculator />,
    },
    {
      id: 3,
      title: "Mortgage",
      content: <TravelCalculator />,
    },
    {
      id: 4,
      title: "Fire",
      content: <TravelCalculator />,
    }
  ];
  return (
    <AnimatedContainer delay={0.1} element="section" className="bottom-section">
      <ScrollToView delay={0.2}>
        <AnimatedContainer delay={0.2}>
          <Typography variant="h1" className="heading2" text="Need numbers?" />
        </AnimatedContainer>
        <TabPills tabs={tabs} activeTabId={0} />
      </ScrollToView>

      <ScrollToView delay={0.5}>
        <BottomLinks />
      </ScrollToView>
    </AnimatedContainer>
  );
}

export default BottomSection;