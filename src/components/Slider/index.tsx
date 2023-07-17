import { useState, useEffect } from "react";
import { wrap } from "@popmotion/popcorn";
import { AnimatePresence } from "framer-motion";
import Button from "../core/Button";
import { Typography } from "../core/Typography";
import Dots from "./Dots";
import ImagePill from "../ImagePill";
import { sliderVariants } from "@/utils/motions";
import { SliderContentType } from "@/types";
import AnimatedContainer from "../AnimatedContainer";
import { DIRECTION_OFFSET, FIVE_MS, SLIDER_TIMEOUT, THREE_MS } from "@/utils/constants";
import { usePageData } from "@/hooks/usePageData";

interface SliderProps {
  content: SliderContentType[];
}

const Slider = () => {
  const { sliderContent } = usePageData();
  const contentLength = sliderContent.length;
  const [[page, direction], setPage] = useState([0, 0]);
  const [activeSlide, setActiveSlide] = useState(0);
  const i = wrap(0, sliderContent.length, page);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSlide + 1 < contentLength) {
        changeContent(activeSlide + 1);
      } else {
        changeContent(0);
      }
    }, SLIDER_TIMEOUT);
    return () => clearInterval(interval);
  }, [activeSlide, contentLength]);

  const changeContent = (id: number) => {
    setPage([id, 0]);
    setActiveSlide(id);
  }

  const onClick = (id: number) => {
    console.log({ id })
    changeContent(id)
  }

  return (
    <AnimatePresence initial={false} mode="wait" custom={direction}>
      <AnimatedContainer
        className="slider-container"
        key={page}
        custom={direction}
        variants={sliderVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: {
            type: "spring",
            stiffness: DIRECTION_OFFSET,
            damping: 100,
            duration: THREE_MS,
          },
          opacity: { duration: FIVE_MS }
        }}
      >
        <div className="slider">
          <ImagePill
            src={sliderContent[i].image}
            alt={sliderContent[i].name}
          />
          <div className="flex flex-col gap-5">
            <AnimatedContainer delay={0.3}>
              <Typography variant="h1" className="heading2 font-medium" text={sliderContent[i].name} />
            </AnimatedContainer>
            <AnimatedContainer delay={0.35}>
              <Typography variant="sm" as="p" className="text-slate-500" text={sliderContent[i].position} />
            </AnimatedContainer>
            <AnimatedContainer delay={0.5}>
              <Typography variant="sm" as="p" className="pb-10" text={sliderContent[i].text} />
            </AnimatedContainer>
            <AnimatedContainer
              delay={0.55}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
            >
              <Button
                variant="link"
                to="#"
                className="!bg-blue"
              >
                Get a consultation
              </Button>
            </AnimatedContainer>
          </div>
        </div>

        <Dots
          count={contentLength}
          active={activeSlide}
          onClick={onClick}
        />
      </AnimatedContainer>
    </AnimatePresence>
  )
}

export default Slider
