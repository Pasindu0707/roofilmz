"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";
import { getAssetPath } from "@/lib/assets";
import { X } from "lucide-react";
import { buttonMicro, cardHover, fadeUp, modalContent, modalOverlay, scaleIn, staggerContainer, viewportOnce } from "@/animations/motionVariants";

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

type GalleryItem = (typeof galleryItems)[number];

export default function WorkPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    if (selected) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="show"
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-black mb-4 sm:mb-6 tracking-tighter px-2">
              OUR <span className="text-brand-orange italic">WORK</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-black/40 max-w-2xl mx-auto px-2">
              A collection of our recent projects across various industries. 
              We let our visuals speak for themselves.
            </p>
          </motion.div>

          {/* Brands/Logos Section */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-10 sm:mb-12 md:mb-16"
          >
            <div className="overflow-hidden relative">
              <div className="flex gap-4 sm:gap-6 md:gap-8 animate-scroll">
                {/* Logo placeholder images - replace with actual brand logos */}
                {[
                  getAssetPath("/assets/logo.webp"),
                  getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101408.jpeg"),
                  getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101411_(1).jpeg"),
                  getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101413.jpeg"),
                  getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101418.jpeg"),
                  getAssetPath("/assets/logo.webp"),
                ].concat([
                  getAssetPath("/assets/logo.webp"),
                  getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101408.jpeg"),
                  getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101411_(1).jpeg"),
                  getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101413.jpeg"),
                  getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101418.jpeg"),
                  getAssetPath("/assets/logo.webp"),
                ]).map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-xl border border-black/10 p-3 sm:p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                  >
                    <Image
                      src={logo}
                      alt={`Brand ${index + 1}`}
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? "bg-brand-orange text-black shadow-lg shadow-brand-orange/20" 
                    : "bg-brand-gray-50 text-black/40 hover:bg-black/5"
                }`}
                {...buttonMicro}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            variants={staggerContainer(0.08, 0.02)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={scaleIn(0, 0.4, 0.94)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="group relative aspect-square overflow-hidden bg-black cursor-pointer"
                  onClick={() => setSelected(item)}
                  layoutId={`work-card-${item.id}`}
                  {...cardHover}
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
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 sm:p-6 flex flex-col justify-end">
                    <p className="text-brand-orange font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-1 sm:mb-2">{item.category}</p>
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-display font-bold">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Preview Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            variants={modalOverlay}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="show"
              exit="exit"
              className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-colors"
                aria-label="Close project preview"
              >
                <X size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <motion.div className="relative aspect-[16/10] lg:aspect-auto lg:h-full bg-black" layoutId={`work-card-${selected.id}`}>
                  {selected.type === "image" ? (
                    <Image
                      src={selected.src}
                      alt={selected.title}
                      fill
                      className="object-cover opacity-90"
                      priority
                    />
                  ) : (
                    <video
                      src={selected.src}
                      poster={selected.poster}
                      className="w-full h-full object-cover opacity-90"
                      controls
                      playsInline
                      autoPlay
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>

                <div className="p-4 sm:p-6 md:p-8 bg-black">
                  <p className="text-brand-orange font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-2 sm:mb-3">
                    {selected.category}
                  </p>
                  <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 sm:mb-4 tracking-tight">
                    {selected.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-xs sm:text-sm md:text-base">
                    A premium preview of this project. If you'd like to see the full cut, behind-the-scenes, or a tailored treatment for your brand, let's talk.
                  </p>
                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                    <motion.a
                      href="/contact"
                      className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-brand-orange text-black font-bold text-xs sm:text-sm uppercase tracking-widest shadow-lg shadow-brand-orange/20"
                      {...buttonMicro}
                    >
                      Start a Project
                    </motion.a>
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 text-white font-bold text-xs sm:text-sm uppercase tracking-widest border border-white/10 hover:bg-white/15 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactCTA />
    </div>
  );
}

