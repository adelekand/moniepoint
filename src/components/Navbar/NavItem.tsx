"use client";

import AnimatedContainer from "../AnimatedContainer";
import { Typography } from "../core/Typography";

interface NavItemsProps {
  delay: number;
  to: string;
  label: string;
  icon?: React.ReactNode
}

const NavItem = ({ delay, to, label, icon }: NavItemsProps) => {

  return (
    <AnimatedContainer
      element="li"
      delay={delay}
      className="flex"
    >
      <a href={to}>
        <Typography variant="md" text={label} />
        {icon}
      </a>
    </AnimatedContainer>
  )
}

export default NavItem