import { getContentVariants } from '@/utils/motions'
import { MotionProps, motion, Variants } from 'framer-motion'

interface AnimatedContainerProps extends MotionProps {
  element?: string;
  ease?: string;
  delay?: number;
  children: React.ReactNode,
  className?: string;
  href?: string;
  variants?: Variants;
}

const AnimatedContainer = ({
  element = 'div',
  ease,
  variants,
  delay,
  children,
  ...props
}: AnimatedContainerProps) => {

  const MotionComponent = motion(element);

  return (
    <MotionComponent
      initial="hidden"
      animate="visible"
      variants={variants|| getContentVariants(delay, ease)}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

export default AnimatedContainer