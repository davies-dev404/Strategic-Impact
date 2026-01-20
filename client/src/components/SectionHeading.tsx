import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
  alignment?: "left" | "center";
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className, 
  light = false,
  alignment = "center" 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-16", 
      alignment === "center" ? "text-center mx-auto max-w-3xl" : "text-left",
      className
    )}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "block text-xs font-bold tracking-[0.2em] uppercase mb-4",
            light ? "text-accent" : "text-accent"
          )}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl md:text-5xl font-serif font-medium leading-tight",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </motion.h2>
    </div>
  );
}
