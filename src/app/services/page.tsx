"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";
import { CheckCircle2, Search, PenTool, Rocket, TrendingUp } from "lucide-react";
import { getAssetPath } from "@/lib/assets";

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
      <section className="bg-black text-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tighter"
          >
            WHAT <span className="text-brand-orange">WE DO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            From cinematic masterpieces to digital dominance, we provide 
            end-to-end solutions that elevate your brand.
          </motion.p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-6 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-black/10 bg-black/5">
              <span className="text-black text-xs font-bold uppercase tracking-widest">
                Our Process
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-black mb-6 tracking-tight">
              HOW IT <span className="text-brand-orange">WORKS</span>
            </h2>
            <p className="text-base md:text-lg text-black/60 max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-2xl border border-black/5 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center">
                      <step.icon size={28} className="text-brand-orange" />
                    </div>
                    <span className="text-brand-orange font-display font-bold text-3xl opacity-20">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-black/60 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-brand-orange/30 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="text-brand-orange font-bold text-sm uppercase tracking-[0.3em] mb-3">
                  0{index + 1} / Service
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-6 tracking-tight leading-tight">
                  {service.title}
                </h2>
                <p className="text-base md:text-lg text-black/60 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-black/80 font-medium">
                      <CheckCircle2 size={20} className="text-brand-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 relative aspect-[4/3] w-full overflow-hidden rounded-2xl group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay group-hover:bg-transparent transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
