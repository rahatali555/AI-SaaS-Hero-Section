import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    variant: {
      default: "max-w-7xl px-4 sm:px-6 lg:px-8",
      narrow: "max-w-3xl px-4 sm:px-6 lg:px-8",
      wide: "max-w-[1600px] px-4 sm:px-6 lg:px-8",
      full: "max-w-none px-4 sm:px-6 lg:px-8",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Container({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof containerVariants>) {
  return (
    <div
      data-slot="container"
      data-variant={variant}
      className={cn(containerVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Container, containerVariants };
