"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <Image
          src="/assets/Ultrarealistic_8k_redcamera_202512121539.jpeg"
          alt="About Roo Filmz"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter"
          >
            WHO <span className="text-brand-orange">WE ARE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed"
          >
            A collective of creators, storytellers, and technical experts 
            dedicated to the art of cinematic production.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-8 tracking-tight">
              OUR MISSION IS <br />
              <span className="text-brand-orange italic">SIMPLE.</span>
            </h2>
            <div className="space-y-6 text-lg text-black/60 leading-relaxed">
              <p>
                At Roo Filmz, we believe that every project is an opportunity to push the boundaries of visual storytelling. We don't just capture footage; we weave narratives that resonate with audiences on a visceral level.
              </p>
              <p>
                Our team brings together years of experience in high-end commercial work, music videos, and digital content. We combine technical precision with creative intuition to deliver results that exceed expectations.
              </p>
              <p>
                We are obsessed with quality. From the choice of lens to the final color grade, every detail is considered to ensure your brand's message is delivered with maximum impact.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src="/assets/IMG_7416.JPG" alt="Behind the scenes" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image src="/assets/IMG_7418.JPG" alt="Behind the scenes" fill className="object-cover" />
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image src="/assets/IMG_7419.JPG" alt="Behind the scenes" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src="/assets/IMG_7425.JPG" alt="Behind the scenes" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-40 px-6 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-20 text-center tracking-tight">
            WHAT WE <span className="text-brand-orange">STAND FOR</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Excellence", desc: "We strive for perfection in every frame, ensuring the highest production values for every client." },
              { title: "Innovation", desc: "We embrace new technologies and creative techniques to keep our content fresh and engaging." },
              { title: "Partnership", desc: "We work closely with our clients to understand their vision and goals, acting as an extension of their team." },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-12 rounded-3xl border border-black/5"
              >
                <div className="text-brand-orange font-display font-bold text-5xl mb-6">0{i + 1}</div>
                <h3 className="text-2xl font-display font-bold mb-4 text-black">{value.title}</h3>
                <p className="text-black/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}

