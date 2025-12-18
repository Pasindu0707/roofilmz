"use client";

import { motion } from "framer-motion";
import { Video, Cpu, Code, Megaphone } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Video Production",
    description: "High-end cinematic production for commercials, brand films, and storytelling.",
    icon: Video,
  },
  {
    title: "Video Production (AI)",
    description: "Cutting-edge AI-enhanced video creation for next-generation visual experiences.",
    icon: Cpu,
  },
  {
    title: "Web Development",
    description: "Modern, high-performance websites and web applications built with the latest tech.",
    icon: Code,
  },
  {
    title: "Social Media Marketing",
    description: "Strategic content handling and marketing to dominate your digital presence.",
    icon: Megaphone,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-40 px-6 bg-brand-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-black/10 bg-black/5">
              <span className="text-black text-xs font-bold uppercase tracking-widest">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black tracking-tight leading-[1.1]">
              SERVICES DESIGNED <br />
              <span className="text-brand-orange">TO DOMINATE</span>
            </h2>
          </div>
          <Link 
            href="/services" 
            className="text-black/40 font-bold hover:text-black transition-colors border-b border-black/20 pb-1"
          >
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="/work" className="group block p-10 bg-white border border-black/5 rounded-2xl h-full transition-all hover:shadow-2xl hover:shadow-brand-orange/5 hover:-translate-y-2">
                <div className="w-14 h-14 bg-brand-gray-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-black transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-black/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="w-10 h-0.5 bg-black/10 group-hover:w-full group-hover:bg-brand-orange transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
