"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";
import { getAssetPath } from "@/lib/assets";
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportOnce } from "@/animations/motionVariants";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen sm:h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white py-16 sm:py-20 md:py-0">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512121539.jpeg")}
            alt="About Roo Filmz"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.h1
            variants={fadeUp(0)}
            initial="hidden"
            animate="show"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 tracking-tighter px-2"
          >
            WHO <span className="text-brand-orange">WE ARE</span>
          </motion.h1>
          <motion.p
            variants={fadeUp(0.12)}
            initial="hidden"
            animate="show"
            className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto px-2"
          >
            A collective of creators, storytellers, and technical experts 
            dedicated to the art of cinematic production.
          </motion.p>
        </div>
      </section>

      {/* Show Reel Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <motion.div
            variants={slideLeft(0)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 rounded-full border border-black/10 bg-black/5">
              <span className="text-black text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                Our Story
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-black mb-4 sm:mb-6 tracking-tight">
              WHO <span className="text-brand-orange">WE ARE</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-base text-black/60 leading-relaxed">
              <p>
                Roo Filmz was born from a simple belief: every story deserves to be told with cinematic excellence. We're a team of passionate filmmakers, creative strategists, and digital innovators based in Australia.
              </p>
              <p>
                From commercial productions to brand films, music videos to digital content, we bring a unique blend of traditional craftsmanship and cutting-edge technology to every project. Our show reel captures the essence of our work—dynamic, purposeful, and unforgettable.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideRight(0)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative aspect-video rounded-2xl overflow-hidden bg-black order-1 lg:order-2 w-full"
          >
            {/* Video placeholder - replace with actual video path when ready */}
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              poster={getAssetPath("/assets/Ultrarealistic_8k_redcamera_202512121539.jpeg")}
            >
              <source src={getAssetPath("/assets/showreel.mp4")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-center"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-black mb-4 sm:mb-6 tracking-tight px-2">
              OUR MISSION IS <br />
              <span className="text-brand-orange italic">SIMPLE.</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-base text-black/60 leading-relaxed px-2">
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
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-black mb-8 sm:mb-10 md:mb-12 text-center tracking-tight px-2">
            WHAT WE <span className="text-brand-orange">STAND FOR</span>
          </h2>
          
          {/* Values in Gradient Banner */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative mb-12 sm:mb-16 rounded-2xl overflow-hidden"
          >
            <div className="relative bg-gradient-to-r from-brand-orange via-brand-orange/80 to-brand-orange/60 py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
              <motion.div
                variants={staggerContainer(0.12, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
              >
                {[
                  { title: "Excellence", desc: "We strive for perfection in every frame, ensuring the highest production values for every client." },
                  { title: "Innovation", desc: "We embrace new technologies and creative techniques to keep our content fresh and engaging." },
                  { title: "Partnership", desc: "We work closely with our clients to understand their vision and goals, acting as an extension of their team." },
                ].map((value, i) => (
                  <motion.div
                    key={value.title}
                    variants={fadeUp(0)}
                    className="text-center"
                  >
                    <div className="text-black font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">0{i + 1}</div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-2 sm:mb-3 text-black">{value.title}</h3>
                    <p className="text-black/80 leading-relaxed text-xs sm:text-sm md:text-base px-2">{value.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}

