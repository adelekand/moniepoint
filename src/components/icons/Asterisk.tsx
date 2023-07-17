import { motion } from "framer-motion";
import { FaAsterisk as Icon } from "@react-icons/all-files/fa/FaAsterisk";
import { twMerge } from "tailwind-merge";

interface AsteriskIconProps {
  className?: string;
}

const AsteriskIcon = ({ className }: AsteriskIconProps) => {
  const iconClassName = twMerge("asterisk", className);
  return (
    <motion.div
      className={iconClassName}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <Icon color="#0b0f17" size={25} />
    </motion.div>
  )
}

export default AsteriskIcon;