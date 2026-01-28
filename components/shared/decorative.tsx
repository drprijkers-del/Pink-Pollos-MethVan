"use client";

import { motion } from "framer-motion";

export function GradientOrb({
  className = "",
  color = "pink",
}: {
  className?: string;
  color?: "pink" | "amber" | "stone";
}) {
  const colors = {
    pink: "from-pink-500/30 to-pink-600/10",
    amber: "from-amber-500/20 to-amber-600/5",
    stone: "from-stone-500/10 to-stone-600/5",
  };

  return (
    <div
      className={`absolute rounded-full blur-3xl bg-gradient-to-br ${colors[color]} pointer-events-none ${className}`}
    />
  );
}

export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg className="w-full h-full opacity-[0.03] dark:opacity-[0.05]">
        <defs>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 32V0h32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function FloatingElement({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-5, 5, -5] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GlowingBorder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 via-transparent to-pink-500/20 blur-xl pointer-events-none ${className}`}
    />
  );
}

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg className="w-full h-full opacity-[0.15] dark:opacity-[0.1]">
        <defs>
          <pattern
            id="dots"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-px w-full ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-300 dark:via-stone-700 to-transparent" />
    </div>
  );
}

export function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "pink" | "outline";
}) {
  const variants = {
    default: "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400",
    pink: "bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300",
    outline: "border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

export function Stamp({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full text-pink-600/10 dark:text-pink-400/10"
      >
        <circle
          cx="60"
          cy="60"
          r="55"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="8 4"
        />
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text
          x="60"
          y="55"
          textAnchor="middle"
          className="fill-current text-[10px] font-bold tracking-widest"
        >
          PREMIUM
        </text>
        <text
          x="60"
          y="70"
          textAnchor="middle"
          className="fill-current text-[10px] font-bold tracking-widest"
        >
          QUALITY
        </text>
      </svg>
    </div>
  );
}
