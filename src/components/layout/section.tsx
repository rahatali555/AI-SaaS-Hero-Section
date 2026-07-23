import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    size: {
      default: "py-16 sm:py-20 lg:py-24",
      compact: "py-10 sm:py-12 lg:py-16",
      spacious: "py-20 sm:py-24 lg:py-32",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

function Section({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof sectionVariants>) {
  return (
    <section
      data-slot="section"
      data-size={size}
      className={cn(sectionVariants({ size, className }))}
      {...props}
    />
  );
}

export { Section, sectionVariants };
