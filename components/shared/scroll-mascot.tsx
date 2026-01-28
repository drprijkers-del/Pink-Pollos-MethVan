"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ScrollMascot() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to mascot position
  // Appears after scrolling 15% of the page
  const opacity = useTransform(scrollYProgress, [0.1, 0.15, 0.85, 0.9], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0.1, 0.18], [100, 0]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.18], [15, 0]);

  // Track if we should show (only after first scroll threshold)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.1);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed bottom-0 right-0 z-40 pointer-events-none select-none hidden lg:block"
      style={{ opacity, x, rotate }}
      initial={{ opacity: 0, x: 100 }}
    >
      {/* Mascot container with peek effect */}
      <div className="relative">
        {/* Subtle glow behind mascot */}
        <div className="absolute inset-0 blur-2xl bg-pink-500/20 scale-110" />

        {/* The chicken mascot - peeking from bottom right */}
        <Image
          src="/images/mascot-chicken.png"
          alt=""
          width={200}
          height={200}
          className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
          priority={false}
        />
      </div>
    </motion.div>
  );
}

// Alternative: Mascot that follows scroll with parallax
export function ScrollMascotParallax() {
  const { scrollYProgress } = useScroll();

  // More dynamic movement
  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 5, -5]);
  const scale = useTransform(scrollYProgress, [0.1, 0.2], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.08, 0.15, 0.9, 0.95], [0, 1, 1, 0]);

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-40 pointer-events-none select-none hidden lg:block"
      style={{ y, rotate, scale, opacity }}
    >
      <div className="relative">
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 blur-3xl bg-pink-500/30 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <Image
          src="/images/mascot-chicken.png"
          alt=""
          width={180}
          height={180}
          className="relative w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-[0_0_30px_rgba(236,72,153,0.3)]"
        />
      </div>
    </motion.div>
  );
}

// Peek-in variant - rotates in and out from screen edge
export function ScrollMascotPeek() {
  const { scrollYProgress } = useScroll();

  // Rotate and slide: in from 5-15%, visible 15-70%, out from 70-80%
  // Entry: rotate from 45deg to 0deg, slide from 100px to 0
  // Exit: reverse - rotate from 0deg to 45deg, slide from 0 to 100px
  const x = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.70, 0.80],
    [120, 0, 0, 120]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.70, 0.80],
    [45, 0, 0, 45]
  );

  // Only use opacity for the very start/end to avoid sudden pop
  const opacity = useTransform(
    scrollYProgress,
    [0.04, 0.06, 0.78, 0.81],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className="fixed bottom-24 right-0 z-40 pointer-events-none select-none hidden lg:block"
      style={{
        opacity,
        x,
        rotate,
        // Transform origin at right edge for natural rotation
        transformOrigin: "right center"
      }}
    >
      <div className="relative">
        {/* Subtle pink glow */}
        <div className="absolute inset-0 blur-2xl bg-pink-500/20 scale-150 rounded-full" />

        <Image
          src="/images/mascot-chicken.png"
          alt=""
          width={200}
          height={200}
          className="relative w-36 h-36 md:w-44 md:h-44 xl:w-52 xl:h-52 object-contain"
          style={{
            filter: "drop-shadow(0 10px 20px rgb(0 0 0 / 0.2)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.15))"
          }}
        />
      </div>
    </motion.div>
  );
}
