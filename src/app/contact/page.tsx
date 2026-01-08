"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import CustomDropdown from "@/components/ui/CustomDropdown";
import FAQ from "@/components/sections/FAQ";
import { buttonMicro, fadeUp, staggerContainer, viewportOnce } from "@/animations/motionVariants";

export default function ContactPage() {
  const [projectType, setProjectType] = useState("Video Production");
  const whatsappNumber = "61452645805";
  const whatsappMessage = encodeURIComponent("Hi Roo Filmz! I'm interested in discussing a project with you.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div>
      <section className="bg-black text-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <motion.div
              variants={staggerContainer(0.12, 0.05)}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                variants={fadeUp(0)}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 tracking-tighter"
              >
                LET&apos;S <span className="text-brand-orange">TALK.</span>
              </motion.h1>
              <motion.p
                variants={fadeUp(0.08)}
                className="text-sm sm:text-base md:text-lg text-white/60 mb-6 sm:mb-8 max-w-md leading-relaxed"
              >
                Have a project in mind? Or just want to say hello? Drop us a line and we&apos;ll get back to you as soon as possible.
              </motion.p>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <motion.div variants={fadeUp(0.12)} className="flex items-center gap-3 sm:gap-4 md:gap-5 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition-colors flex-shrink-0">
                    <Mail size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                    <a href="mailto:admin@roofilmz.com.au" className="text-sm sm:text-base md:text-lg font-bold hover:text-brand-orange transition-colors break-all">admin@roofilmz.com.au</a>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp(0.16)} className="flex items-center gap-3 sm:gap-4 md:gap-5 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition-colors flex-shrink-0">
                    <Phone size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                    <a href="tel:+61452645805" className="text-sm sm:text-base md:text-lg font-bold hover:text-brand-orange transition-colors">0452 645 805</a>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp(0.2)} className="flex items-center gap-3 sm:gap-4 md:gap-5 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition-colors flex-shrink-0">
                    <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">WhatsApp Us</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base md:text-lg font-bold hover:text-brand-orange transition-colors">Chat on WhatsApp</a>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp(0.24)} className="flex items-center gap-3 sm:gap-4 md:gap-5 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition-colors flex-shrink-0">
                    <MapPin size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-sm sm:text-base md:text-lg font-bold">Australia</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp(0.15)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 text-black"
            >
              <form className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black/40">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-brand-gray-50 rounded-lg border-none focus:ring-2 focus:ring-brand-orange transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black/40">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-brand-gray-50 rounded-lg border-none focus:ring-2 focus:ring-brand-orange transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black/40">Mobile Number</label>
                  <input 
                    type="tel" 
                    placeholder="04XX XXX XXX"
                    className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-brand-gray-50 rounded-lg border-none focus:ring-2 focus:ring-brand-orange transition-all text-sm sm:text-base"
                  />
                </div>
                <CustomDropdown 
                  label="Project Type"
                  options={["Video Production", "Video Production (AI)", "Web Development", "Social Media Marketing", "Other"]}
                  value={projectType}
                  onChange={setProjectType}
                />
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black/40">Message</label>
                    <textarea 
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-brand-gray-50 rounded-lg border-none focus:ring-2 focus:ring-brand-orange transition-all resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-brand-orange text-black font-bold py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                  {...buttonMicro}
                >
                  Send Message
                  <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
