"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Film, Package, CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";

export default function ProcessSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: "Strategy Call",
      description: "We understand your business, audience, and goals.",
      icon: Phone,
    },
    {
      number: "02",
      title: "Content Planning",
      description: "We design a video + AI content plan that fits your brand.",
      icon: Calendar,
    },
    {
      number: "03",
      title: "Production",
      description: "Filming + AI content creation.",
      icon: Film,
    },
    {
      number: "04",
      title: "Delivery & Support",
      description: "Content delivered ready to post, promote, or scale.",
      icon: Package,
    },
  ];

  const deliverables = [
    "Cinematic brand or campaign videos",
    "Short-form social media clips",
    "AI-generated video variations",
    "Content optimised for ads & organic reach",
    "Clear posting & usage guidance",
    "Optional social media management & digital support",
  ];

  const rightFor = [
    "Want consistent visibility",
    "Care about quality and results",
    "Understand video is an investment",
    "Want smarter content, not more work",
  ];

  const notFor = [
    "One-off cheap videos",
    "Businesses looking for \"viral overnight\"",
    "DIY content with no strategy",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* How It Works Section - Combined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-32"
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-black mb-3 sm:mb-4">
              How It <span className="text-brand-orange">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative bg-black border-2 border-brand-orange/20 rounded-2xl p-5 sm:p-6 md:p-8 overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.03, 
                  borderColor: "#ffc700",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent transition-opacity duration-500 ${hoveredFeature === index ? 'opacity-100' : 'opacity-0'}`} />
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-bl-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${hoveredFeature === index ? 'bg-brand-orange/20 scale-110 rotate-6' : 'group-hover:bg-brand-orange/20 group-hover:scale-110'}`}>
                      <step.icon className="text-brand-orange sm:w-6 sm:h-6" size={20} />
                    </div>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-orange/20 group-hover:text-brand-orange/40 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-brand-orange mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                  <div className={`mt-4 h-0.5 bg-brand-orange/20 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : 'w-0'}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-32"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto bg-black border-2 border-brand-orange/30 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 via-transparent to-brand-orange/5"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl font-display font-bold text-brand-orange relative z-10 px-2"
            >
              No long contracts. No confusion. Clear deliverables.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* What You'll Receive & Is This Right for You */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* What You'll Receive */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black border-2 border-brand-orange/30 rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-brand-orange/10 rounded-bl-full blur-2xl" />
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-brand-orange mb-4 sm:mb-6">
                What You'll Receive
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {deliverables.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-start gap-2 sm:gap-3 cursor-default"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <CheckCircle2 className="text-brand-orange shrink-0 mt-0.5 sm:mt-1 w-[18px] h-[18px] sm:w-5 sm:h-5" />
                    </motion.div>
                    <span className="text-sm sm:text-base text-white/80 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Is This Right for You */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* This is for businesses who */}
            <div className="bg-black border-2 border-brand-orange/30 rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-brand-orange/10 rounded-bl-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-brand-orange mb-4 sm:mb-6">
                  This is for businesses who:
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {rightFor.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -30, scale: 0.95 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-start gap-2 sm:gap-3 cursor-default"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1 + 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <CheckCircle2 className="text-brand-orange shrink-0 mt-0.5 sm:mt-1 w-[18px] h-[18px] sm:w-5 sm:h-5" />
                      </motion.div>
                      <span className="text-sm sm:text-base text-white/80 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* This is NOT for */}
            <div className="bg-black border-2 border-red-500/30 rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-red-500/10 rounded-bl-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-red-500 mb-4 sm:mb-6">
                  This is NOT for:
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {notFor.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -30, scale: 0.95 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-start gap-2 sm:gap-3 cursor-default"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1 + 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <XCircle className="text-red-500 shrink-0 mt-0.5 sm:mt-1 w-[18px] h-[18px] sm:w-5 sm:h-5" />
                      </motion.div>
                      <span className="text-sm sm:text-base text-white/80 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

