"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAssetPath } from "@/lib/assets";

const projects = [
  {
    title: "Urban Motion",
    category: "Commercial",
    image: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101839.jpeg"),
    link: "/work",
  },
  {
    title: "The Visionary",
    category: "Brand Film",
    image: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101413.jpeg"),
    link: "/work",
  },
  {
    title: "Ethereal Landscapes",
    category: "Cinematography",
    image: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101408.jpeg"),
    link: "/work",
  },
  {
    title: "Future Pulse",
    category: "Digital Content",
    image: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101418.jpeg"),
    link: "/work",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-16 md:py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5">
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Portfolio
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight leading-[1.1]">
              SELECTED <br />
              <span className="text-brand-orange">PROJECTS</span>
            </h2>
          </div>
          <Link 
            href="/work" 
            className="group flex items-center gap-3 text-base md:text-lg font-bold hover:text-brand-orange transition-colors"
          >
            Explore Full Gallery
            <ArrowRight className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <Link href="/work" className="block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider scale-90 group-hover:scale-100 transition-transform duration-500">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-brand-orange text-xs font-bold uppercase tracking-[0.2em] mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-brand-orange transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

