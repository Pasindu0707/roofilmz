"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Video Production",
    description: "Our core expertise lies in high-end cinematography. We use industry-standard gear to capture breathtaking visuals that tell a story.",
    features: ["Cinematic Storytelling", "Professional Lighting", "Directing & Scripting", "Sound Design"],
    image: "/assets/Ultrarealistic_8k_redcamera_202512101411_(1).jpeg",
  },
  {
    title: "Video Production (AI)",
    description: "Leveraging the power of artificial intelligence to push the boundaries of film. From AI-assisted editing to synthetic media creation.",
    features: ["AI Video Generation", "Advanced Upscaling", "Deep Learning VFX", "Automated Editing"],
    image: "/assets/Ultrarealistic_8k_redcamera_202512121551.jpeg",
  },
  {
    title: "Web Development",
    description: "We build modern, fast, and responsive websites that serve as the digital foundation for your brand's growth.",
    features: ["Next.js & React", "E-commerce Solutions", "Custom Web Apps", "SEO Optimization"],
    image: "/assets/Ultrarealistic_8k_redcamera_202512101418.jpeg",
  },
  {
    title: "Social Media Marketing",
    description: "Strategic content handling and marketing to ensure your brand dominates the social conversation and reaches the right audience.",
    features: ["Account Management", "Content Strategy", "Paid Advertising", "Engagement Growth"],
    image: "/assets/Use_blue_mob_202512101840.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-black text-white py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter"
          >
            WHAT <span className="text-brand-orange">WE DO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            From cinematic masterpieces to digital dominance, we provide 
            end-to-end solutions that elevate your brand.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 md:py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="text-brand-orange font-bold text-sm uppercase tracking-[0.3em] mb-4">
                  0{index + 1} / Service
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-8 tracking-tight leading-tight">
                  {service.title}
                </h2>
                <p className="text-xl text-black/60 mb-10 leading-relaxed">
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
              <div className="flex-1 relative aspect-[4/3] w-full overflow-hidden rounded-3xl group">
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
