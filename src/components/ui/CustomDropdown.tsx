"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export default function CustomDropdown({ options, value, onChange, label }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative" ref={containerRef}>
      <label className="text-xs font-bold uppercase tracking-widest text-black/40">{label}</label>
      
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-brand-gray-50 rounded-xl flex items-center justify-between transition-all border-2 text-sm sm:text-base",
          isOpen ? "border-brand-orange ring-2 sm:ring-4 ring-brand-orange/10" : "border-transparent hover:bg-black/5"
        )}
      >
        <span className={cn("flex-1 text-left", !value && "text-black/40")}>
          {value || "Select a service"}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "circOut" }}
          className="flex-shrink-0 ml-2"
        >
          <ChevronDown size={18} className={cn("sm:w-5 sm:h-5 transition-colors", isOpen ? "text-brand-orange" : "text-black/40")} />
        </motion.div>
      </button>

      {/* Options Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden p-1.5 sm:p-2"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors mb-1 last:mb-0",
                  value === option 
                    ? "bg-brand-orange text-black font-bold" 
                    : "hover:bg-brand-gray-50 text-black/70 hover:text-black"
                )}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

