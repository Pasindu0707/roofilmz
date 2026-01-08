"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";
import { CheckCircle2, Search, PenTool, Rocket, TrendingUp } from "lucide-react";
import { getAssetPath } from "@/lib/assets";
import { cardHover, fadeUp, staggerContainer, viewportOnce } from "@/animations/motionVariants";

const services = [
  {
    title: "Video Production",
    description: "Our core expertise lies in high-end cinematography. We use industry-standard gear to capture breathtaking visuals that tell a story.",
    features: ["Cinematic Storytelling", "Professional Lighting", "Directing & Scripting", "Sound Design"],
    image: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101411_(1).jpeg"),
  },
  {
    title: "Video Production (AI)",
    description: "Leveraging the power of artificial intelligence to push the boundaries of film. From AI-assisted editing to synthetic media creation.",
    features: ["AI Video Generation", "Advanced Upscaling", "Deep Learning VFX", "Automated Editing"],
    image: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512121551.jpeg"),
  },
  {
    title: "Web Development",
    description: "We build modern, fast, and responsive websites that serve as the digital foundation for your brand's growth.",
    features: ["Next.js & React", "E-commerce Solutions", "Custom Web Apps", "SEO Optimization"],
    image: getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512101418.jpeg"),
  },
  {
    title: "Social Media Marketing",
    description: "Strategic content handling and marketing to ensure your brand dominates the social conversation and reaches the right audience.",
    features: ["Account Management", "Content Strategy", "Paid Advertising", "Engagement Growth"],
    image: getAssetPath("/assets/Use_blue_mob_202512101840.jpeg"),
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-black text-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            variants={fadeUp(0)}
            initial="hidden"
            animate="show"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 sm:mb-8 tracking-tighter px-2"
          >
            WHAT <span className="text-brand-orange">WE DO</span>
          </motion.h1>
          <motion.p
            variants={fadeUp(0.12)}
            initial="hidden"
            animate="show"
            className="text-sm sm:text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2"
          >
            From cinematic masterpieces to digital dominance, we provide 
            end-to-end solutions that elevate your brand.
          </motion.p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 rounded-full border border-black/10 bg-black/5">
              <span className="text-black text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                Our Process
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-black mb-4 sm:mb-6 tracking-tight px-2">
              HOW IT <span className="text-brand-orange">WORKS</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black/60 max-w-2xl mx-auto px-2">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8"
          >
            {[
              {
                number: "01",
                icon: Search,
                title: "Discovery & Strategy",
                description: "We begin with in-depth research into your brand, target audience, and market landscape. Through consultation and analysis, we develop a comprehensive strategy tailored to your goals.",
              },
              {
                number: "02",
                icon: PenTool,
                title: "Content Creation",
                description: "Our creative team brings the strategy to life through high-quality video production, web development, and digital content that captures your brand's unique voice and vision.",
              },
              {
                number: "03",
                icon: Rocket,
                title: "Launch & Distribution",
                description: "We deploy your content across all relevant channels, ensuring maximum reach and engagement. From social media to web platforms, we optimize every touchpoint.",
              },
              {
                number: "04",
                icon: TrendingUp,
                title: "Optimize & Scale",
                description: "Continuous monitoring and analysis allows us to refine strategies, improve performance, and scale successful campaigns to drive sustained growth for your brand.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                variants={fadeUp(0, 0.6, 22)}
              >
                <motion.div {...cardHover} className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl border border-black/5 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon size={24} className="sm:w-7 sm:h-7 text-brand-orange" />
                    </div>
                    <span className="text-brand-orange font-display font-bold text-2xl sm:text-3xl opacity-20">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-black mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-black/60 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </motion.div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-brand-orange/30 z-10" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp(0, 0.8, 28)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 w-full lg:w-auto">
                <div className="text-brand-orange font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-2 sm:mb-3">
                  0{index + 1} / Service
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-black mb-4 sm:mb-6 tracking-tight leading-tight">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-black/60 mb-6 sm:mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 sm:gap-3 text-black/80 font-medium text-sm sm:text-base">
                      <CheckCircle2 size={18} className="sm:w-5 sm:h-5 text-brand-orange flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div {...cardHover} className="flex-1 relative aspect-[4/3] w-full lg:w-auto overflow-hidden rounded-2xl group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay group-hover:bg-transparent transition-colors" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
