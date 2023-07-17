"use client";

import { twMerge } from "tailwind-merge";
import AnimatedContainer from "./AnimatedContainer";
import { Typography } from "./core/Typography";
import { OfferType } from "@/types";
import AsteriskIcon from "./icons/Asterisk";

interface OffersProps {
  offers: OfferType[];
  children?: React.ReactNode;
  className?: string;
}

export default function Offers({ offers, children, className }: OffersProps) {

  const containerClassNames = twMerge("offers", className)

  return (
    <AnimatedContainer delay={0.5} className={containerClassNames}>
      {offers.map(item => (
        <div key={item.id} className="offer-item">
          <AsteriskIcon />
          <Typography variant="md" as="p" text={item.text} markdown={item.markdown} />
        </div>
      ))}
      {children}
    </AnimatedContainer>
  );
}
