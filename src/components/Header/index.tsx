"use client";

import { BEFORE_CHILDREN, SEVEN_MS } from "@/utils/constants";
import AnimatedContainer from "../AnimatedContainer";
import Logo from "../Logo";
import Navbar from "../Navbar";

const Header = () => {

  return (
    <AnimatedContainer
      className="header"
      element="section"
      variants={{
        visible: {
          opacity: 1,
          transition: {
            when: BEFORE_CHILDREN,
            staggerChildren: SEVEN_MS,
            duration: SEVEN_MS,
          },
        },
        hidden: { opacity: 0 },
      }}
      data-testid="header"
    >
      <Logo />
      <Navbar />
    </AnimatedContainer>
  )
}

export default Header