import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "h1" | "h2" | "h3" | "lg" | "md" | "sm" | "xs";

interface TypographyProps {
  variant: Variant;
  text: string;
  markdown?: boolean;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  lg: "p",
  md: "p",
  sm: "p",
  xs: "p",
};

const sizes: Record<Variant, string> = {
  h1: "heading1",
  h2: "heading2",
  h3: "heading3",
  lg: "p-lg",
  md: "p-md",
  sm: "p-sm",
  xs: "p-xs",
};

export const Typography = ({
  variant,
  text,
  markdown,
  className,
  as,
}: TypographyProps) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  const tagClassName = twMerge(sizeClasses, className);

  return markdown ? (
    <Tag className={tagClassName} dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <Tag className={tagClassName}>{text}</Tag>
  );
};
