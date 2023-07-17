import Image from "next/image";
import { Typography } from "../core/Typography";
import { EASE_IN_OUT, FIVE_MS } from "@/utils/constants";
import AnimatedContainer from "../AnimatedContainer";
import { motion } from "framer-motion";

interface LabeledImageProps {
  src: string;
  label: string;
  delay?: number;
}

const LabeledImage = ({ src, label, delay }: LabeledImageProps) => {
  const variant = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delay,
        ease: EASE_IN_OUT,
        duration: FIVE_MS,
        staggerChildren: FIVE_MS,
      },
    },
  };


  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="labeled-image-container"
      data-testid="labeled-image-container"
    >
      <Image
        className="labeled-image"
        src={src}
        width="0"
        height="0"
        sizes="100vw"
        alt={label}
        priority
      />
      <AnimatedContainer variants={variant} className="pills">
        <Typography
          variant="md"
          text={label}
          data-testid="label"
        />
      </AnimatedContainer>
    </motion.div>
  )
}

export default LabeledImage