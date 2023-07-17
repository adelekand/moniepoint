import { useEffect, useRef } from "react";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { getScrollToViewVariants } from "@/utils/motions";

interface ScrollToViewProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  ease?: string;
}

const ScrollToView = ({ delay, ease, children, className, variants, ...props }: ScrollToViewProps) => {
  const ref = useRef(null);
  const animation = useAnimation();
  const sectionInView = useInView(ref, { once: true });

  useEffect(() => {
    if (sectionInView) {
      animation.start("visible");
    }
  }, [animation, sectionInView]);

  return (
    <motion.div
      initial="hidden"
      animate={animation}
      variants={variants || getScrollToViewVariants(delay, ease)}
      ref={ref}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ScrollToView