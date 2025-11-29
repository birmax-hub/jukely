import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(227,154,50,0.126)] active:scale-95 ease-[cubic-bezier(.4,0,.2,1)]",
        outline:
          "border-2 border-primary/50 bg-transparent text-primary hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(227,154,50,0.084)] active:scale-95 ease-[cubic-bezier(.4,0,.2,1)]",
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

