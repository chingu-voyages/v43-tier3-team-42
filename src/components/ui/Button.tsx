import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";

export const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-full text-sm text-white uppercase font-semibold tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-amber-500 hover:bg-amber-300",
        dark: "bg-neutral-900 hover:bg-neutral-700",
      },
      size: {
        default: "py-2 px-4",
        sm: "py-1 px-2 text-xs",
        lg: "py-3 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
