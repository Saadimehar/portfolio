import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      target,
      rel,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer";

    const variants = {
      primary:
        "bg-accent text-background hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50 active:scale-95",
      secondary:
        "bg-secondary text-background hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/50 active:scale-95",
      outline:
        "border-2 border-accent text-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/30 dark:hover:bg-accent/20 active:scale-95",
    };

    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} target={target} rel={rel}>
          <button ref={ref} className={buttonClasses} {...props}>
            {children}
          </button>
        </Link>
      );
    }

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
