"use client";

import { motion } from "framer-motion";

type GeometricChickenProps = {
  className?: string;
};

export function GeometricChicken({ className = "" }: GeometricChickenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      <motion.svg
        viewBox="0 0 300 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
          <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#292524" />
            <stop offset="100%" stopColor="#1c1917" />
          </linearGradient>
        </defs>

        {/* Base body - large geometric shape */}
        <motion.polygon
          points="150,380 50,280 50,180 150,120 250,180 250,280"
          fill="url(#darkGradient)"
          stroke="#ec4899"
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Inner body detail */}
        <polygon
          points="150,340 80,260 80,200 150,160 220,200 220,260"
          fill="none"
          stroke="#ec4899"
          strokeWidth="1"
          strokeOpacity="0.2"
        />

        {/* Wing left */}
        <polygon
          points="50,240 20,200 50,180"
          fill="url(#darkGradient)"
          stroke="#ec4899"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Wing right */}
        <polygon
          points="250,240 280,200 250,180"
          fill="url(#darkGradient)"
          stroke="#ec4899"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Head - hexagon */}
        <motion.polygon
          points="150,120 100,90 100,50 150,20 200,50 200,90"
          fill="url(#darkGradient)"
          stroke="#ec4899"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          filter="url(#glow)"
        />

        {/* Comb - three triangles */}
        <polygon
          points="120,20 130,0 140,20"
          fill="url(#pinkGradient)"
          opacity="0.8"
        />
        <polygon
          points="140,20 150,0 160,20"
          fill="url(#pinkGradient)"
          opacity="0.9"
        />
        <polygon
          points="160,20 170,0 180,20"
          fill="url(#pinkGradient)"
          opacity="0.8"
        />

        {/* Beak */}
        <polygon
          points="150,75 135,95 150,115 165,95"
          fill="#f59e0b"
          opacity="0.9"
        />

        {/* Eye left */}
        <circle cx="125" cy="65" r="8" fill="#0c0a09" />
        <circle cx="127" cy="63" r="3" fill="#ec4899" opacity="0.8" />

        {/* Eye right */}
        <circle cx="175" cy="65" r="8" fill="#0c0a09" />
        <circle cx="177" cy="63" r="3" fill="#ec4899" opacity="0.8" />

        {/* Accent lines - geometric details */}
        <line
          x1="100"
          y1="200"
          x2="200"
          y2="200"
          stroke="#ec4899"
          strokeWidth="1"
          strokeOpacity="0.2"
        />
        <line
          x1="80"
          y1="240"
          x2="220"
          y2="240"
          stroke="#ec4899"
          strokeWidth="1"
          strokeOpacity="0.15"
        />
        <line
          x1="100"
          y1="280"
          x2="200"
          y2="280"
          stroke="#ec4899"
          strokeWidth="1"
          strokeOpacity="0.1"
        />

        {/* Feet */}
        <path
          d="M120,380 L110,400 M120,380 L120,400 M120,380 L130,400"
          stroke="#f59e0b"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M180,380 L170,400 M180,380 L180,400 M180,380 L190,400"
          stroke="#f59e0b"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Glow points */}
        <motion.circle
          cx="150"
          cy="70"
          r="40"
          fill="#ec4899"
          opacity="0.05"
          animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="150"
          cy="250"
          r="80"
          fill="#ec4899"
          opacity="0.03"
          animate={{ opacity: [0.02, 0.05, 0.02], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.svg>
    </motion.div>
  );
}
