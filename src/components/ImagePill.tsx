import Image from "next/image";
import { twMerge } from "tailwind-merge";
import AnimatedContainer from './AnimatedContainer'
import { imagePillVariants } from "@/utils/motions";

interface ImagePillProps {
  shadow?: boolean;
  src: string;
  alt?: string;
  whileHover?: object;
}

const ImagePill = ({ shadow, src, alt = "", ...props }: ImagePillProps) => {

  const imageClasses = twMerge('rounded-image', shadow && 'image-shadow');

  return (
    <AnimatedContainer
        delay={0.6}
        variants={imagePillVariants}
        className="sphere-image"
        {...props}
      >
        <Image
          className={imageClasses}
          src={src}
          width="0"
          height="0"
          sizes="100vw"
          alt={alt}
          priority
        />
      </AnimatedContainer>
  )
}

export default ImagePill