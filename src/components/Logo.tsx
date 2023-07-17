import React from 'react'
import { motion } from "framer-motion";

import { ImSpinner4 as Spinner } from "@react-icons/all-files/im/ImSpinner4";
import { getContentVariants } from '@/utils/motions';

interface LogoProps {
  color?: string;
}

const Logo = ({ color = "#ff6476" }: LogoProps) => {
  const motionVariants = getContentVariants(0.1);

  return (
    <motion.div
      initial="hidden"
      animate={["visible", "rotation"]}
      variants={motionVariants}
      data-testid="logo"
    >
      <Spinner fill={color} size={35} />
    </motion.div>

  )
}

export default Logo