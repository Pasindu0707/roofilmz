"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import CustomDropdown from "@/components/ui/CustomDropdown";
import FAQ from "@/components/sections/FAQ";

export default function ContactPage() {
  const [projectType, setProjectType] = useState("Video Production");
  const whatsappNumber = "61452645805";
  const whatsappMessage = encodeURIComponent("Hi Roo Filmz! I'm interested in discussing a project with you.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div>
      <section className="bg-black text-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tighter"
              >
                LET'S <span className="text-brand-orange">TALK.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-white/60 mb-8 max-w-md leading-relaxed"
              >
                Have a project in mind? Or just want to say hello? 
                Drop us a line and we'll get back to you as soon as possible.
              </motion.p>

              <div className="space-y-6">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                    <a href="mailto:admin@roofilmz.com.au" className="text-base md:text-lg font-bold hover:text-brand-orange transition-colors">admin@roofilmz.com.au</a>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                    <a href="tel:+61452645805" className="text-base md:text-lg font-bold hover:text-brand-orange transition-colors">0452 645 805</a>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">WhatsApp Us</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold hover:text-brand-orange transition-colors">Chat on WhatsApp</a>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-base md:text-lg font-bold">Australia</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 md:p-8 text-black"
            >
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-5 py-3 bg-brand-gray-50 rounded-lg border-none focus:ring-2 focus:ring-brand-orange transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-5 py-3 bg-brand-gray-50 rounded-lg border-none focus:ring-2 focus:ring-brand-orange transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Mobile Number</label>
                  <input 
                    type="tel" 
                    placeholder="04XX XXX XXX"
                    className="w-full px-5 py-3 bg-brand-gray-50 rounded-lg border-none focus:ring-2 focus:ring-brand-orange transition-all"
                  />
                </div>
                <CustomDropdown 
                  label="Project Type"
                  options={["Video Production", "Video Production (AI)", "Web Development", "Social Media Marketing", "Other"]}
                  value={projectType}
                  onChange={setProjectType}
                />
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Message</label>
                    <textarea 
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-5 py-3 bg-brand-gray-50 rounded-lg border-none focus:ring-2 focus:ring-brand-orange transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-brand-orange text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
