"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useRef } from "react";

export default function ContactCTA() {
  const whatsappNumber = "61452645805";
  const whatsappMessage = encodeURIComponent("Hi Roo Filmz! I'm interested in discussing a project with you.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-brand-orange">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <motion.div
          className="absolute -top-12 sm:-top-24 -left-12 sm:-left-24 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white rounded-full blur-[100px]"
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
          className="absolute -bottom-12 sm:-bottom-24 -right-12 sm:-right-24 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-black rounded-full blur-[100px]"
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

      <motion.div
        style={{ scale, opacity }}
        className="max-w-5xl mx-auto relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-black mb-6 sm:mb-8 tracking-tighter leading-tight sm:leading-none px-2"
          >
            Ready to Build Smarter Video Content?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-black/80 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 font-medium px-2"
          >
            If you're already spending time or money on content, let's make it work harder for your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6 px-2"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
              >
                Book a Free Strategy Call
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-black/60 font-bold text-sm sm:text-base md:text-lg"
            >
              or
            </motion.span>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#25D366] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 shadow-xl hover:bg-[#20BA5A] w-full sm:w-auto"
              >
                <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                Message Us on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Background Text Overlay */}
      <motion.div
        className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none select-none"
        animate={{
          x: [0, -50],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <p className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-display font-bold text-black leading-none translate-y-1/2">
          ROOFILMZ ROOFILMZ ROOFILMZ ROOFILMZ
        </p>
      </motion.div>
    </section>
  );
}

