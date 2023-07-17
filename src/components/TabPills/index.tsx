import { useState } from "react"
import { twMerge } from "tailwind-merge";
import { Typography } from "../core/Typography"
import { TabItemType } from "@/types"
import TabItem from "./TabItem";
import AnimatedContainer from "../AnimatedContainer";

interface TabPillsProps {
  tabs: TabItemType[];
  activeTabId: number;
}

const TabPills = ({ tabs, activeTabId }: TabPillsProps) => {
  const [activeTab, setActiveTab] = useState(activeTabId)

  return (
    <div className="tabs">
      <ul className="tab-pills">
        {tabs.map(tab => (
          <TabItem
            key={tab.id}
            id={tab.id}
            title={tab.title}
            activeTab={activeTab}
            onClick={setActiveTab}
          />
        ))}
      </ul>
      <AnimatedContainer delay={0.9}>
        {tabs[activeTab].content}
      </AnimatedContainer>
    </div>
  )
}

export default TabPills