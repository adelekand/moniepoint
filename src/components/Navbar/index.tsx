"use client";

import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { FiKey } from "@react-icons/all-files/fi/FiKey";
import Button from "@/components/core/Button";
import { Typography } from "@/components/core/Typography";
import { getContentVariants } from "@/utils/motions";
import NavItem from "./NavItem";
import AnimatedContainer from "../AnimatedContainer";

const Navbar = () => {

  const navLinks = [
    { id: 1, label: "Home", to: "/", delay: 0.3 },
    { id: 2, label: "Services", to: "/", delay: 0.4, icon: <MdKeyboardArrowDown size={25} /> },
    { id: 3, label: "About us", to: "/", delay: 0.5 },
    { id: 4, label: "Blog", to: "/", delay: 0.6 },
    { id: 5, label: "Career", to: "/", delay: 0.7 },
  ]

  return (
    <>
      <ul
        className="nav"
        data-testid="nav-links"
      >
        {navLinks.map(item => (
          <NavItem
            key={item.id}
            delay={item.delay}
            to={item.to}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </ul>

      <AnimatedContainer
        variants={getContentVariants(0.8)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
      >
        <Button
          variant="link"
          to="#"
          className="contact-link"
          data-testid="contact-us-button"
        >
          Contact us
        </Button>
      </AnimatedContainer>


      <AnimatedContainer
        element="a"
        className="login-link"
        data-testid="login-link"
        variants={getContentVariants(0.9)}
      >
        <FiKey size={25} />
        <Typography variant="md" as="p" text="Login" />
      </AnimatedContainer>

    </>
  )
}

export default Navbar