"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Roo Filmz offer?",
    answer: "We offer comprehensive video production services including cinematic storytelling, AI-enhanced video production, modern web development, and strategic social media marketing. Our team handles everything from concept to final delivery.",
  },
  {
    question: "How long does a typical video production project take?",
    answer: "Project timelines vary based on scope and complexity. A standard commercial video typically takes 2-4 weeks from pre-production to final delivery, while larger productions like brand films may take 6-8 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with businesses outside of Australia?",
    answer: "While we're based in Australia, we work with clients worldwide. We offer remote collaboration and can travel for on-location shoots. Many of our digital services, including web development and social media marketing, can be delivered globally.",
  },
  {
    question: "What is your pricing structure?",
    answer: "Pricing depends on project scope, complexity, and requirements. We offer tailored quotes for each project to ensure you get the best value. Contact us for a free consultation and detailed quote based on your specific needs.",
  },
  {
    question: "Do you provide both traditional and AI-enhanced video production?",
    answer: "Yes! We offer both traditional high-end cinematography and cutting-edge AI-enhanced video production. Our AI services include video generation, advanced upscaling, deep learning VFX, and automated editing. We can help you choose the best approach for your project.",
  },
  {
    question: "Can you help with post-production and editing?",
    answer: "Absolutely. Post-production is a core part of our service. We handle editing, color grading, sound design, motion graphics, and final delivery. Our team uses industry-standard software and workflows to ensure professional results.",
  },
  {
    question: "Do you offer social media content creation?",
    answer: "Yes, we provide comprehensive social media marketing services including content strategy, account management, content creation, paid advertising, and engagement growth. We create content optimized for each platform to maximize your reach.",
  },
  {
    question: "How do I get started with a project?",
    answer: "Getting started is easy! Reach out through our contact form, email us at admin@roofilmz.com.au, or give us a call at 0452 645 805. We'll schedule a consultation to discuss your project, goals, and timeline, then provide a detailed proposal.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-black/10 bg-black/5">
            <span className="text-black text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-black mb-6 tracking-tight">
            QUESTIONS? <span className="text-brand-orange">WE'VE GOT ANSWERS</span>
          </h2>
          <p className="text-base md:text-lg text-black/60 max-w-2xl mx-auto">
            Everything you need to know about working with Roo Filmz
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-black/10 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
              >
                <span className="font-bold text-base md:text-lg text-black pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-brand-orange transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-sm md:text-base text-black/60 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

