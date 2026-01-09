"use client";

import { motion } from "framer-motion";
import { Video, Sparkles, Megaphone, Globe, ArrowRight } from "lucide-react";

export default function ServicesPreview() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-black relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-brand-orange/30 bg-brand-orange/10 backdrop-blur-sm"
          >
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">
              What We Do
            </span>
          </motion.div>
        </motion.div>

        <div className="space-y-20">
          {/* Main/Core Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl font-bold text-brand-orange mb-4 sm:mb-6 uppercase tracking-wider flex items-center gap-2 sm:gap-3"
              whileHover={{ x: 5 }}
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-1 h-5 sm:h-6 bg-brand-orange origin-left"
              />
              Main/Core Services:
            </motion.h3>
            <motion.div 
              className="relative bg-black border-2 border-brand-orange/30 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden group-hover:border-brand-orange transition-all duration-500"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center group-hover:bg-brand-orange/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <Video className="text-brand-orange" size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-brand-orange mb-3 sm:mb-4 group-hover:text-brand-orange transition-colors">
                      Video & AI Content Systems
                    </h4>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                  Strategic planning, cinematic production, and AI-powered content creation designed for 
                  social media and advertising.
                </p>
                
                {/* Animated underline */}
                <div className="mt-6 h-0.5 bg-brand-orange/20 w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          </motion.div>

          {/* Supporting Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl font-bold text-brand-orange mb-4 sm:mb-6 uppercase tracking-wider flex items-center gap-2 sm:gap-3"
              whileHover={{ x: 5 }}
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-1 h-5 sm:h-6 bg-brand-orange origin-left"
              />
              Supporting Services:
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Social Media Management */}
              <motion.div 
                className="group relative bg-black border-2 border-brand-orange/30 rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.03, 
                  borderColor: "#ffc700",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-brand-orange/10 rounded-bl-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-orange/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Megaphone className="text-brand-orange" size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-brand-orange mb-3 sm:mb-4 group-hover:text-brand-orange transition-colors">
                    Social Media Management
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-3 sm:mb-4">
                    Consistent posting, captions, scheduling, and content optimization to keep your brand active 
                    and visible.
                  </p>
                  <div className="flex items-center gap-2 text-brand-orange/60 group-hover:text-brand-orange transition-colors">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Learn More</span>
                    <ArrowRight size={14} className="sm:w-4 sm:h-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                  <div className="mt-3 sm:mt-4 h-0.5 bg-brand-orange/20 w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>

              {/* Website & Digital Marketing */}
              <motion.div 
                className="group relative bg-black border-2 border-brand-orange/30 rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.03, 
                  borderColor: "#ffc700",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-brand-orange/10 rounded-bl-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-orange/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Globe className="text-brand-orange" size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-brand-orange mb-3 sm:mb-4 group-hover:text-brand-orange transition-colors">
                    Website & Digital Marketing
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-3 sm:mb-4">
                    Video-led websites, landing pages, and digital campaigns that convert traffic into enquiries.
                  </p>
                  <div className="flex items-center gap-2 text-brand-orange/60 group-hover:text-brand-orange transition-colors">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Learn More</span>
                    <ArrowRight size={14} className="sm:w-4 sm:h-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                  <div className="mt-3 sm:mt-4 h-0.5 bg-brand-orange/20 w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
