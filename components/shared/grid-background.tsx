"use client";

import { motion } from "framer-motion";

export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-950 to-stone-900" />

      {/* Perspective grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="perspectiveGrid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-stone-700"
            />
          </pattern>
          <linearGradient id="gridFade" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#gridFade)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#perspectiveGrid)"
          mask="url(#gridMask)"
        />
      </svg>

      {/* Radial gradient overlay - focus point */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(236,72,153,0.08),transparent_60%)]" />

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl"
        animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-600/5 blur-3xl"
        animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Accent lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Horizontal accent */}
        <motion.line
          x1="0"
          y1="70%"
          x2="40%"
          y2="70%"
          stroke="#ec4899"
          strokeWidth="1"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </svg>

      {/* Corner accents */}
      <div className="absolute top-20 left-8 w-20 h-px bg-gradient-to-r from-pink-500/40 to-transparent" />
      <div className="absolute top-20 left-8 w-px h-20 bg-gradient-to-b from-pink-500/40 to-transparent" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
