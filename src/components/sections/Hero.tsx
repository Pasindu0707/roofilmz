"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { getAssetPath } from "@/lib/assets";
import { buttonMicro, fadeUp, heroScaleIn, staggerContainer } from "@/animations/motionVariants";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-16 sm:py-20 md:py-0 md:h-screen">
      {/* Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
        variants={heroScaleIn(0)}
        initial="hidden"
        animate="show"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={getAssetPath("/assets/roofilmz_shots_001.MP4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </motion.div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand-orange/30 rounded-full"
            initial={{
              x: `${20 + i * 15}%`,
              y: `${30 + i * 10}%`,
            }}
            animate={{
              y: [`${30 + i * 10}%`, `${20 + i * 10}%`, `${30 + i * 10}%`],
              x: [`${20 + i * 15}%`, `${25 + i * 15}%`, `${20 + i * 15}%`],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 text-center"
        style={{ opacity }}
        variants={staggerContainer(0.12, 0.15)}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeUp(0, 0.7, 22)}
          className="inline-block px-3 py-1.5 sm:px-4 sm:py-1.5 md:px-5 md:py-2 mb-4 sm:mb-5 md:mb-6 rounded-full border border-brand-orange/30 bg-brand-orange/10 backdrop-blur-sm"
        >
          <span className="text-brand-orange text-[10px] xs:text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            Digital Marketing and Video Production Studio
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp(0.05, 0.85, 34)}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-4 sm:mb-6 md:mb-8 tracking-tighter leading-[1.1] sm:leading-[1] md:leading-[0.95] lg:leading-[0.9] px-2"
        >
          <span>Video + AI Content Studio</span>
          <br />
          <span className="text-brand-orange italic">for Business Growth</span>
        </motion.h1>

        <motion.p
          variants={fadeUp(0.1, 0.75, 26)}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2 sm:px-4"
        >
          We help Australian businesses grow using cinematic video and AI-powered content 
          designed for social media and paid advertising.
        </motion.p>

        <motion.div
          variants={fadeUp(0.15, 0.7, 24)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6 px-2"
        >
          <motion.div {...buttonMicro}>
            <Link href="/contact" className="group relative bg-brand-orange text-black px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl flex items-center gap-2 sm:gap-3 overflow-hidden shadow-2xl shadow-brand-orange/20 w-full sm:w-auto justify-center">
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 transition-transform group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-white transform translate-y-full transition-transform group-hover:translate-y-0" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center p-1.5 sm:p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 sm:h-3 bg-white/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

