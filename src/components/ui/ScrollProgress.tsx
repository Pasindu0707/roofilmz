"use client";

import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsVisible(latest > 0);
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-brand-orange origin-left z-[60]"
      style={{ scaleX }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    />
  );
}

