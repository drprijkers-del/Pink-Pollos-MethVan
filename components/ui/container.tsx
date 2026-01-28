import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  size?: "default" | "narrow" | "wide";
  className?: string;
};

const sizeClasses = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

export function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto px-6 md:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
