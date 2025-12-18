"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Who We Are", href: "/about" },
  { name: "What We Do", href: "/services" },
  { name: "Our Work", href: "/work" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Pages that have a dark section at the very top (Hero or Dark Section)
  const isDarkTopPage = ["/", "/about", "/services", "/contact"].includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar background
  // Transparent only on dark top pages when at the very top
  const navBg = (isDarkTopPage && !scrolled) 
    ? "bg-transparent py-6" 
    : "bg-black/90 backdrop-blur-md py-4";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6",
        navBg
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <Logo className="transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-orange",
                pathname === link.href ? "text-brand-orange" : "text-white/90"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-orange"
                />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-brand-orange text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/20"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-3xl font-display font-bold uppercase tracking-tighter transition-colors",
                  pathname === link.href ? "text-brand-orange" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-brand-orange text-black px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider shadow-xl shadow-brand-orange/20"
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
