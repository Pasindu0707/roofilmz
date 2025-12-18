"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";
import { getAssetPath } from "@/lib/assets";

const categories = ["All", "Commercial", "Brand Film", "Social", "Music Video"];

const galleryItems = [
  { id: 1, title: "Modern Tech", category: "Commercial", type: "image", src: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512121551.jpeg") },
  { id: 2, title: "Urban Pulse", category: "Social", type: "video", src: getAssetPath("/assets/v_don_dada_rootv.MP4"), poster: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101839.jpeg") },
  { id: 3, title: "The Studio", category: "Brand Film", type: "image", src: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101413.jpeg") },
  { id: 4, title: "Cinematic Gear", category: "Commercial", type: "image", src: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101411_(1).jpeg") },
  { id: 5, title: "Night Vibes", category: "Music Video", type: "image", src: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101839.jpeg") },
  { id: 6, title: "Product Focus", category: "Commercial", type: "image", src: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101418.jpeg") },
  { id: 7, title: "Action Shot", category: "Social", type: "image", src: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512071356.jpeg") },
  { id: 8, title: "Production Day", category: "Brand Film", type: "image", src: getAssetPath("/assets/IMG_4617.JPG") },
];

export default function WorkPage() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold text-black mb-8 tracking-tighter">
              OUR <span className="text-brand-orange italic">WORK</span>
            </h1>
            <p className="text-xl text-black/40 max-w-2xl mx-auto">
              A collection of our recent projects across various industries. 
              We let our visuals speak for themselves.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? "bg-brand-orange text-black shadow-lg shadow-brand-orange/20" 
                    : "bg-brand-gray-50 text-black/40 hover:bg-black/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-square overflow-hidden rounded-3xl bg-black"
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <video
                      src={item.src}
                      poster={item.poster}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      loop
                      muted
                      playsInline
                      onMouseOver={(e) => e.currentTarget.play()}
                      onMouseOut={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                    <p className="text-brand-orange font-bold text-xs uppercase tracking-[0.2em] mb-2">{item.category}</p>
                    <h3 className="text-white text-2xl font-display font-bold">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}

