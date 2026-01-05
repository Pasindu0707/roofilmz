"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAssetPath } from "@/lib/assets";

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 px-6 overflow-hidden bg-brand-orange">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-black/20 bg-black/10">
            <span className="text-black text-xs font-bold uppercase tracking-widest">
              Who We Are
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-black mb-6 tracking-tight leading-[1.1]">
            WE DON'T JUST FILM, <br />
            <span className="text-black">WE BUILD BRANDS</span>
          </h2>
          <p className="text-base md:text-lg text-black/80 mb-6 leading-relaxed">
            Roo Filmz is a multi-disciplinary creative house. We blend cinematic production with cutting-edge AI and expert web development to create cohesive digital ecosystems.
          </p>
          <p className="text-sm md:text-base text-black/80 mb-8 leading-relaxed">
            Operating Australia-wide, we partner with visionary brands to deliver high-end video, modern web experiences, and strategic social media handling.
          </p>
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 font-bold text-black group hover:text-black/70 transition-colors"
          >
            <span className="border-b-2 border-black group-hover:border-black/70 pb-1">Explore Our Work</span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-xl"
        >
          <Image
            src={getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512121551.jpeg")}
            alt="Modern Creative Studio"
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-2xl md:text-3xl font-display font-bold mb-2">360°</p>
            <p className="text-sm uppercase tracking-widest font-bold opacity-80">Creative Solutions</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
