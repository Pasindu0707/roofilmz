"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { getAssetPath } from "@/lib/assets";
import { fadeUp, slideLeft, underline, viewportOnce } from "@/animations/motionVariants";

export default function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 overflow-hidden bg-brand-orange relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-black/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-black/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center relative z-10">
        <motion.div
          variants={slideLeft(0)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="order-2 lg:order-1"
        >
          <motion.div
            variants={fadeUp(0.05, 0.5, 16)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 rounded-full border border-black/20 bg-black/10"
          >
            <span className="text-black text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              Who We Are
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-black mb-4 sm:mb-6 tracking-tight leading-[1.1]"
          >
            VIDEO IS OUR CORE. <br />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-black"
            >
              GROWTH IS THE GOAL.
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-black/80 mb-4 sm:mb-6 leading-relaxed"
          >
            Roofilmz is an Australia-based studio specialising in cinematic video and AI-powered content 
            for modern businesses. To support performance, we also offer social media management 
            and website design and digital marketing ensuring your content doesn't just look good, but 
            actually works.
          </motion.p>
          <motion.div initial="rest" animate="rest" whileHover="hover" className="inline-flex">
            <Link
              href="/work"
              className="group relative inline-flex items-center gap-2 font-bold text-black hover:text-black/70 transition-colors"
            >
              <span className="relative pb-1">
                Explore Our Work
                <motion.span
                  variants={underline}
                  className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-black origin-left"
                />
              </span>
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ y }}
          className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-xl group order-1 lg:order-2 w-full"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512121551.jpeg")}
              alt="Modern Creative Studio"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-1 sm:mb-2">360°</p>
              <p className="text-xs sm:text-sm uppercase tracking-widest font-bold opacity-80">Creative Solutions</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
