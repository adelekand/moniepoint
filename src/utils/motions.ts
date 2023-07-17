import {
  EASE_IN_OUT,
  BACK_IN,
  ROTATE,
  HORIZONTAL_VALUE,
  SEVEN_MS,
  FIVE_MS,
  DIRECTION_OFFSET,
  BACK_OUT,
} from "./constants";

export const getContentVariants = (delay?: number, ease?: string) => ({
  hidden: { opacity: 0, x: HORIZONTAL_VALUE },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      ease: ease || BACK_IN,
      duration: SEVEN_MS,
      x: { stiffness: 1000, velocity: -50 },
    }
  },
  rotation: {
    rotate: ROTATE,
    transition: {
      delay: 0,
      duration: 5,
      ease: EASE_IN_OUT,
      repeat: Infinity,
    },
  },
});

export const getScrollToViewVariants = (delay?: number, ease?: string) => ({
  visible: {
    scale: 1,
    transition: {
      delay,
      duration: FIVE_MS,
      ease: ease || EASE_IN_OUT,
    }
  },
  hidden: {
    scale: 0
  }
})

export const imagePillVariants = {
  visible: {
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.3,
      ease: EASE_IN_OUT,
    }
  },
  hidden: {
    scale: 0
  }
};

export const sliderVariants = {
  enter: (direction: number) => ({
    x: direction < 0 ? -DIRECTION_OFFSET : DIRECTION_OFFSET,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? DIRECTION_OFFSET : -DIRECTION_OFFSET,
    opacity: 0
  })
};

