import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";



const GlassCard = (
  ({ className, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={"rounded-lg border border-border/50 bg-background/80 backdrop-blur-md backdrop-filter shadow-sm dark:bg-card/30 dark:backdrop-blur-md "+ hoverEffect &&
            "hover:shadow-md transition-all duration-300 ease-in-out",
          className}
        whileHover={
          hoverEffect
            ? {
                y: -5,
                transition: { duration: 0.2 },
              }
            : undefined
        }
        {...props}
      />
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
