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

// Peek-in variant (like peeking from corner)
export function ScrollMascotPeek() {
  const { scrollYProgress } = useScroll();

  // Fade in at 5%, fully visible at 10%, start fading at 70%, gone at 80%
  const opacity = useTransform(scrollYProgress, [0.05, 0.1, 0.7, 0.8], [0, 1, 1, 0]);

  // Slide in from right
  const x = useTransform(scrollYProgress, [0.05, 0.12], [80, 0]);

  // Subtle rotation for personality
  const rotate = useTransform(scrollYProgress, [0.05, 0.12], [10, 0]);

  return (
    <motion.div
      className="fixed bottom-32 right-4 z-40 pointer-events-none select-none hidden lg:block"
      style={{ opacity, x, rotate }}
    >
      <div className="relative">
        {/* Subtle pink glow */}
        <div className="absolute inset-0 blur-2xl bg-pink-500/20 scale-150 rounded-full" />

        <Image
          src="/images/mascot-chicken.png"
          alt=""
          width={200}
          height={200}
          className="relative w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 object-contain"
          style={{
            filter: "drop-shadow(0 10px 20px rgb(0 0 0 / 0.2)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.15))"
          }}
        />
      </div>
    </motion.div>
  );
}
