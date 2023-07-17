"use client"
import { forwardRef } from "react";
import { motion } from "framer-motion";

import { Typography } from "./core/Typography";
import Button from "./core/Button";
import Offers from "./Offers";
import { usePageData } from "@/hooks/usePageData";
import ImagePill from "./ImagePill";
import LabeledImage from "./LabeledImage";
import ScrollToView from "./ScrollToView";
import Slider from "./Slider";
import { SliderContentType } from "@/types";
import { BACK_IN } from "@/utils/constants";
import { getContentVariants } from "@/utils/motions";
import AnimatedContainer from "./AnimatedContainer";
import AsteriskIcon from "./icons/Asterisk";

const MiddleSection = forwardRef((_, ref) => {
  const {
    middleSectionOffers: offers,
    choiceSection: choice,
    sliderContent,
    sliderText,
    supportText,
  } = usePageData();

  const content = sliderContent as unknown as SliderContentType[];

  return (
    <>
      <section ref={ref as React.RefObject<HTMLDivElement>} className="middle-section">
        <div className="content-left">
          <ScrollToView delay={0.1}>
            <LabeledImage
              src="/assets/images/living-room.jpeg"
              label="Home insurance"
              delay={0.3}
            />
          </ScrollToView>
          <ScrollToView
            delay={0.2}
            className="sphere-image"
          >
            <ImagePill src="/assets/images/beach.jpeg" />
          </ScrollToView>
        </div>
        <ScrollToView delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="choice-panel"
          >
            <span className="choice-text">
              <Typography variant="h1" className="heading2" text={choice.title} />
              <Typography variant="md" as="p" text={choice.text} />
            </span>
            <Button variant="link" to="#">{choice.buttonText}</Button>
          </motion.div>
        </ScrollToView>

        <ScrollToView delay={0.5}>
          <LabeledImage
            src="/assets/images/bmw.jpeg"
            label="Vehicle damage"
            delay={1.1}
          />
        </ScrollToView>

        <ScrollToView delay={0.6}>
          <LabeledImage
            src="/assets/images/cottage.jpeg"
            label="Mortgage insurance"
            delay={1.2}
          />
        </ScrollToView>

        <ScrollToView delay={0.7}>
          <LabeledImage
            src="/assets/images/pills.webp"
            label="Medical expenses"
            delay={1.3}
          />
        </ScrollToView>

        <ScrollToView
          ease={BACK_IN}
          delay={0.1}
          className="col-span-2"
        >
          <Slider />
        </ScrollToView>

        <div className="flex mt-24 items-center">
          <div className="flex gap-4">
            <ScrollToView
              variants={getContentVariants(0.4)}
              className="col-span-2"
            >
              <AsteriskIcon className="h-fit mt-5" />
            </ScrollToView>

            <AnimatedContainer
              delay={0.5}
            >
              {sliderText.split(" ").map((word, idx) => (
                <AnimatedContainer
                  key={idx}
                  element="span"
                  delay={Number(`0.${idx + 5}`)}
                >
                  <Typography variant="h1" text={word} />
                </AnimatedContainer>
              ))}
            </AnimatedContainer>
          </div>
        </div>

      </section>

      <section className="mid-bottom">
        <ScrollToView
          variants={getContentVariants(0.4)}
          className="support-text"
        >
          <Typography variant="h1" markdown text={supportText} />
        </ScrollToView>

        <ScrollToView
          variants={getContentVariants(0.6)}
          className="middle-offers"
        >
          <Offers offers={offers}>
            <Button variant="link" to="#" outline>View all services</Button>
          </Offers>
        </ScrollToView>

        <ScrollToView delay={0.8}>
          <ImagePill
            src="/assets/images/mother-daughter.webp"
            alt="mother and daughter"
            shadow
          />
        </ScrollToView>
      </section>
    </>
  );
})

MiddleSection.displayName = "MiddleSection";

export default MiddleSection;
