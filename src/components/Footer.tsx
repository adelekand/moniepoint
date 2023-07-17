"use client"

import AnimatedContainer from "./AnimatedContainer"
import Logo from "./Logo"
import { Typography } from "./core/Typography"

const Footer = () => {
  return (
    <div className="footer">
      <AnimatedContainer delay={1} className="footer-logo">
        <Logo color="#fff" />
        <Typography variant="md" text="Darcy's insurance product" />
      </AnimatedContainer>
      <AnimatedContainer
        element="a"
        delay={1.1}
        href="/"
      >
        <Typography variant="md" text="Privacy Policy" />
      </AnimatedContainer>
    </div>
  )
}

export default Footer