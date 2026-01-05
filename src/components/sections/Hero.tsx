"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAssetPath } from "@/lib/assets";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
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
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-brand-orange/30 bg-brand-orange/10 backdrop-blur-sm"
        >
          <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.2em]">
            Australia's Premium Film House
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-display font-bold text-white mb-8 tracking-tighter leading-[0.9]"
        >
          YOUR STORY, <br />
          <span className="text-brand-orange italic">ENGINEERED</span> TO MOVE <br />
          THE WORLD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Award-winning video production that blends cinematic excellence with 
          strategic storytelling to elevate your brand's digital presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link href="/contact" className="group relative bg-brand-orange text-black px-10 py-5 rounded-full font-bold text-xl flex items-center gap-3 overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-brand-orange/20">
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-2" />
            <div className="absolute inset-0 bg-white transform translate-y-full transition-transform group-hover:translate-y-0" />
          </Link>
        </motion.div>
      </div>

    </section>
  );
}

