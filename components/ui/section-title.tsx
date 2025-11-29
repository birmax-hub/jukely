import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("text-center mb-8 md:mb-12 fade-up", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">{title}</h2>
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

