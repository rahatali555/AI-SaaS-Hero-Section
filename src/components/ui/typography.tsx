import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("text-foreground", {
  variants: {
    size: {
      display: "text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl",
      h1: "text-4xl font-semibold tracking-[-0.03em] sm:text-5xl",
      h2: "text-3xl font-semibold tracking-[-0.03em] sm:text-4xl",
      h3: "text-2xl font-semibold tracking-[-0.03em] sm:text-3xl",
      h4: "text-xl font-semibold tracking-[-0.03em] sm:text-2xl",
      sm: "text-base font-semibold tracking-[-0.02em]",
    },
  },
  defaultVariants: {
    size: "h2",
  },
});

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      default: "text-base leading-7",
      muted: "text-base leading-7 text-muted-foreground",
      lead: "text-lg leading-8 text-muted-foreground",
      small: "text-sm leading-6",
      strong: "text-sm leading-6 font-semibold",
      caption: "text-xs leading-5 tracking-[0.2em] uppercase",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type HeadingProps<T extends React.ElementType = "h2"> = {
  as?: T;
} & VariantProps<typeof headingVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "className"> & {
    className?: string;
  };

type TextProps<T extends React.ElementType = "p"> = {
  as?: T;
} & VariantProps<typeof textVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "className"> & {
    className?: string;
  };

function Heading<T extends React.ElementType = "h2">({
  as,
  className,
  size = "h2",
  ...props
}: HeadingProps<T>) {
  const Component = as ?? "h2";

  return (
    <Component
      data-slot="heading"
      data-size={size}
      className={cn(headingVariants({ size, className }))}
      {...props}
    />
  );
}

function Text<T extends React.ElementType = "p">({
  as,
  className,
  variant = "default",
  ...props
}: TextProps<T>) {
  const Component = as ?? "p";

  return (
    <Component
      data-slot="text"
      data-variant={variant}
      className={cn(textVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Heading, Text, headingVariants, textVariants };
export type { HeadingProps, TextProps };
