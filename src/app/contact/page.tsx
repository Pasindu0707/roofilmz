"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const whatsappNumber = "61400000000";
  const whatsappMessage = encodeURIComponent("Hi Roo Filmz! I'm interested in discussing a project with you.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div>
      <section className="bg-black text-white py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter"
              >
                LET'S <span className="text-brand-orange">TALK.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 mb-12 max-w-md leading-relaxed"
              >
                Have a project in mind? Or just want to say hello? 
                Drop us a line and we'll get back to you as soon as possible.
              </motion.p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                    <a href="mailto:hello@roofilmz.com.au" className="text-xl font-bold hover:text-brand-orange transition-colors">hello@roofilmz.com.au</a>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                    <a href="tel:+61400000000" className="text-xl font-bold hover:text-brand-orange transition-colors">+61 400 000 000</a>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">WhatsApp Us</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-brand-orange transition-colors">Chat on WhatsApp</a>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-xl font-bold">Australia</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 text-black"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-brand-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-orange transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-brand-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-orange transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Project Type</label>
                  <select className="w-full px-6 py-4 bg-brand-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-orange transition-all appearance-none">
                    <option>Video Production</option>
                    <option>Video Production (AI)</option>
                    <option>Web Development</option>
                    <option>Social Media Marketing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-6 py-4 bg-brand-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-orange transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-brand-orange text-black font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
