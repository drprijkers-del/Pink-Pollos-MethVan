"use client";

import { motion } from "framer-motion";

/**
 * Geometric line accents extracted from the logo
 * Use as subtle decorative elements on subpages
 */

// The comb/crown from the chicken - three peaks
export function LogoComb({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 30 L15 5 L25 25 L30 0 L35 25 L45 5 L55 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Angular corner accent - from wing geometry
export function LogoCorner({
  className = "",
  position = "top-left"
}: {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const rotations = {
    "top-left": "",
    "top-right": "scale-x-[-1]",
    "bottom-left": "scale-y-[-1]",
    "bottom-right": "scale-[-1]",
  };

  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotations[position]} ${className}`}
    >
      <path
        d="M0 0 L40 0 L60 20 L60 40 L80 60 L80 80"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M0 20 L20 20 L40 40 L40 60"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
      />
    </svg>
  );
}

// Diagonal lines pattern - from body geometry
export function LogoLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line x1="0" y1="100" x2="50" y2="0" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <line x1="40" y1="100" x2="90" y2="0" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="80" y1="100" x2="130" y2="0" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <line x1="120" y1="100" x2="170" y2="0" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <line x1="160" y1="100" x2="210" y2="0" stroke="currentColor" strokeWidth="1" opacity="0.05" />
    </svg>
  );
}

// Hexagonal fragment - from head shape
export function LogoHex({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon
        points="50,5 90,25 90,75 50,95 10,75 10,25"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
      />
      <polygon
        points="50,20 75,35 75,65 50,80 25,65 25,35"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.1"
      />
    </svg>
  );
}

// Subtle watermark version of full logo for page backgrounds
export function LogoWatermark({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <style>{`.wm{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:3px;opacity:0.03;}`}</style>
        </defs>
        <polygon className="wm" points="111.27 212.91 90.48 294.37 140.34 287.66 187.09 250.45 111.27 212.91"/>
        <polygon className="wm" points="187.09 250.45 181.56 224.11 150.42 176.38 111.27 212.91 187.09 250.45"/>
        <polygon className="wm" points="90.48 221.05 111.27 212.91 90.48 294.37 67.72 249.82 90.48 221.05"/>
        <polygon className="wm" points="75.94 197 24 251.99 67.72 249.82 90.48 221.05 111.27 212.91 150.42 176.38 170.03 153.34 174.31 142.47 162.55 130.89 116.93 110.75 124.41 123.22 115.41 156.55 75.94 197"/>
        <polygon className="wm" points="186.85 126.67 173.6 104.22 172.61 114.42 137.62 81.42 146.55 108.33 140.17 103.02 114.39 96.15 124.41 114.05 162.55 130.89 174.31 142.47 186.85 126.67"/>
        <polygon className="wm" points="176.04 390.33 307.78 392.28 240.3 431.14 176.04 390.33"/>
        <polygon className="wm" points="307.78 392.28 249.64 314.07 329.8 324.87 307.78 392.28"/>
        <polygon className="wm" points="249.64 314.07 307.78 392.28 176.04 390.33 183.68 319.86 249.64 314.07"/>
        <polygon className="wm" points="385.24 193.89 402.66 322.72 329.8 324.87 249.64 314.07 385.24 193.89"/>
        <polygon className="wm" points="249.64 314.07 272.22 238.04 322.29 161.29 385.24 220.03 249.64 314.07"/>
        <polygon className="wm" points="442.04 194.45 474.49 251.99 451.36 272.79 418.66 233.12 385.24 220.03 322.29 161.29 290.76 124.25 283.88 106.77 302.79 88.15 376.14 55.77 364.11 75.83 378.58 129.41 442.04 194.45"/>
        <polygon className="wm" points="263.72 81.37 285.03 45.27 285.79 53.1 290.52 57.99 342.87 8.61 328.52 51.88 338.77 43.34 380.22 32.29 364.11 61.08 302.79 88.15 283.88 106.77 263.72 81.37"/>
        <polygon className="wm" points="284.55 219.14 286.03 164.35 282.94 138.4 322.29 161.29 284.55 219.14"/>
      </svg>
    </motion.div>
  );
}

// Animated accent line - subtle movement
export function AccentLine({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />
  );
}

// Corner decoration for cards/sections
export function CornerAccent({
  position = "top-left",
  className = ""
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  };

  return (
    <div className={`absolute w-16 h-16 ${positions[position]} ${className}`}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full text-pink-500/20">
        <path d="M0 0 L64 0 L64 8 L8 8 L8 64 L0 64 Z" fill="currentColor" />
      </svg>
    </div>
  );
}
