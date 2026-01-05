"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden bg-brand-orange">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-8 tracking-tighter leading-none">
            READY TO BRING YOUR <br />
            VISION TO LIFE?
          </h2>
          <p className="text-base md:text-lg text-black/80 max-w-2xl mx-auto mb-8 font-medium">
            Let's create something extraordinary together. Whether it's a major production or social content, we're ready.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-base md:text-lg flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-xl"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
            
            <a
              href="mailto:admin@roofilmz.com.au"
              className="flex items-center gap-2 text-black font-bold text-base md:text-lg hover:opacity-70 transition-opacity"
            >
              <Mail size={18} />
              <span>admin@roofilmz.com.au</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Text Overlay */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none select-none">
        <p className="text-[20vw] font-display font-bold text-black leading-none translate-y-1/2">
          ROOFILMZ ROOFILMZ ROOFILMZ
        </p>
      </div>
    </section>
  );
}

