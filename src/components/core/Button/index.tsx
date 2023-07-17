import { motion } from "framer-motion";
import { ReactNode, ElementType } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "button" | "link";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  outline?: boolean;
  className?: string;
  to?: string;
  onClick?: () => void;
}

const tags: Record<Variant, ElementType> = {
  button: "button",
  link: "a",
};

export default function Button({
  variant = "link",
  outline,
  children,
  className,
  ...props
}: ButtonProps) {
  const buttonClassName = twMerge("button", outline && "button-outline", className);
  const Tag = tags[variant!];

  const MotionTag = motion(Tag);

  return (
    <MotionTag
      className={buttonClassName}
      {...props}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
    >
      {children}
    </MotionTag>
  );
}
