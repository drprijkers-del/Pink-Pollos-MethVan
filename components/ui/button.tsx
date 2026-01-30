import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost" | "link" | "outline";
  size?: "default" | "large";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const baseClasses =
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 dark:focus:ring-offset-stone-950";

const variantClasses = {
  solid:
    "bg-pink-600 text-white hover:bg-pink-700 rounded-full shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
  ghost:
    "border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400 rounded-full",
  outline:
    "border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full",
  link: "text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 underline-offset-4 hover:underline",
} as const;

const sizeClasses = {
  default: "px-6 py-3 text-sm",
  large: "px-8 py-4 text-base",
} as const;

export function Button({
  children,
  href,
  variant = "solid",
  size = "default",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${variant !== "link" ? sizeClasses[size] : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
