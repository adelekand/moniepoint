import { ReactNode, ElementType } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "button" | "link";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  to?: string;
  onClick?: () => void;
}

const tags: Record<Variant, ElementType> = {
  button: "button",
  link: "a",
};

export default function Button({
  variant,
  children,
  className,
  ...props
}: ButtonProps) {
  const buttonClassName = twMerge("button", className);
  const Tag = tags[variant!];

  return (
    <Tag className={buttonClassName} {...props}>
      {children}
    </Tag>
  );
}

Button.defaultProps = {
  variant: "button",
};
