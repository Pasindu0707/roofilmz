"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import { buttonMicro, mobileMenu, mobileMenuItem, underline } from "@/animations/motionVariants";

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Determine navbar background with responsive padding
  // More padding on mobile/tablet, standard on desktop
  const navBg = (isDarkTopPage && !scrolled) 
    ? "bg-transparent py-3 sm:py-4 md:py-5 lg:py-6" 
    : "bg-black/90 backdrop-blur-md py-2.5 sm:py-3 md:py-4";

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[50] transition-all duration-500 px-4 sm:px-5 md:px-6 lg:px-8",
          navBg
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-[51] gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Logo */}
          <Link href="/" className="group flex-shrink-0">
            <Logo className="transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="relative"
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-xs xl:text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-orange",
                    pathname === link.href ? "text-brand-orange" : "text-white/90"
                  )}
                >
                  {link.name}
                  <motion.span
                    variants={underline}
                    animate={pathname === link.href ? "hover" : "rest"}
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-orange origin-left"
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div {...buttonMicro}>
              <Link
                href="/contact"
                className="bg-brand-orange text-black px-5 xl:px-6 py-2 rounded-full font-bold text-xs xl:text-sm uppercase tracking-wider shadow-lg shadow-brand-orange/20 inline-flex whitespace-nowrap"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white relative z-[51] flex-shrink-0 p-2 -mr-2 sm:p-2.5 sm:-mr-2.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Outside nav to avoid stacking context issues */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 w-full h-screen bg-black z-[100] flex flex-col items-center justify-center gap-5 sm:gap-6 md:gap-8 lg:hidden px-4 sm:px-6"
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={mobileMenuItem(navLinks.findIndex((l) => l.href === link.href))}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter transition-colors text-center",
                    pathname === link.href ? "text-brand-orange" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={mobileMenuItem(navLinks.length)} {...buttonMicro}>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 sm:mt-4 bg-brand-orange text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg uppercase tracking-wider shadow-xl shadow-brand-orange/20 inline-flex"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
