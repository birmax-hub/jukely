import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-[#F89A2C] to-[#D87014] text-primary-foreground hover:from-[#E88A1C] hover:to-[#C86004] shadow-[0_10px_25px_rgba(0,0,0,0.45)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] hover:translate-y-[-1px] active:scale-95 ease-[cubic-bezier(.4,0,.2,1)]",
        outline:
          "border border-white/14 bg-transparent text-foreground hover:bg-white/4 hover:border-white/20 active:scale-95 ease-[cubic-bezier(.4,0,.2,1)]",
        ghost:
          "bg-transparent text-foreground hover:bg-muted/50 hover:text-primary active:scale-95 ease-[cubic-bezier(.4,0,.2,1)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-95 ease-[cubic-bezier(.4,0,.2,1)]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

