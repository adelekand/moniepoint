import { twMerge } from "tailwind-merge";
import { Typography } from "../core/Typography";

interface TabItemProps {
  id: number;
  title: string;
  activeTab: number;
  onClick: (id: number) => void
}

const TabItem = ({ id, title, activeTab, onClick }: TabItemProps) => {
  const isActive = id === activeTab;
  const tabItemClasses = twMerge("tab-item", isActive && "active-tab");

  const handleOnClick = () => {
    onClick(id);
  }

  return (
    <li
      key={id}
      className={tabItemClasses}
      onClick={handleOnClick}
    >
      <Typography variant="md" text={title} />
    </li>
  )
}

export default TabItem