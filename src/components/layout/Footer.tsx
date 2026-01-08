import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin, MessageCircle } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "61400000000"; // Replace with actual number if different
  const whatsappMessage = encodeURIComponent("Hi Roo Filmz! I saw your website and would love to chat about a potential project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-black text-white pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
        {/* Brand Column */}
        <div className="sm:col-span-2 lg:col-span-2">
          <Link href="/" className="mb-4 sm:mb-5 block">
            <Logo />
          </Link>
          <p className="text-white/60 max-w-sm mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
            <span className="font-bold text-white">Roofilmz Australia</span>
            <br />
            Video & AI Content Studio for Business Growth. Cinematic video and AI-powered content 
            helping Australian businesses attract attention, build trust, and generate enquiries. 
            Australia-wide. Strategy led, Performance focused.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a href="https://www.instagram.com/roofilmz/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-brand-orange hover:border-brand-orange hover:text-black">
              <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="https://www.facebook.com/roofilmz/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-brand-orange hover:border-brand-orange hover:text-black">
              <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="https://www.youtube.com/@roofilmz" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-brand-orange hover:border-brand-orange hover:text-black">
              <Youtube size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="https://www.linkedin.com/company/roofilmzaustralia/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-brand-orange hover:border-brand-orange hover:text-black">
              <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="https://www.tiktok.com/@roofilmzaustralia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-brand-orange hover:border-brand-orange hover:text-black">
              <svg 
                viewBox="0 0 24 24" 
                width="16" 
                height="16" 
                className="sm:w-[18px] sm:h-[18px]"
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 text-brand-orange">Explore</h4>
          <ul className="space-y-2 sm:space-y-3">
            <li><Link href="/" className="text-white/60 hover:text-brand-orange transition-colors text-xs sm:text-sm">Home</Link></li>
            <li><Link href="/about" className="text-white/60 hover:text-brand-orange transition-colors text-xs sm:text-sm">Who We Are</Link></li>
            <li><Link href="/services" className="text-white/60 hover:text-brand-orange transition-colors text-xs sm:text-sm">What We Do</Link></li>
            <li><Link href="/work" className="text-white/60 hover:text-brand-orange transition-colors text-xs sm:text-sm">Our Work</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display font-bold text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 text-brand-orange">Contact</h4>
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-start gap-2 text-white/60 group text-xs sm:text-sm">
              <Mail size={16} className="sm:w-[18px] sm:h-[18px] mt-0.5 text-brand-orange shrink-0" />
              <a href="mailto:admin@roofilmz.com.au" className="group-hover:text-brand-orange transition-colors break-all">admin@roofilmz.com.au</a>
            </li>
            <li className="flex items-start gap-2 text-white/60 group text-xs sm:text-sm">
              <Phone size={16} className="sm:w-[18px] sm:h-[18px] mt-0.5 text-brand-orange shrink-0" />
              <a href="tel:+61452645805" className="group-hover:text-brand-orange transition-colors">0452 645 805</a>
            </li>
            <li className="flex items-start gap-2 text-white/60 group text-xs sm:text-sm">
              <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px] mt-0.5 text-brand-orange shrink-0" />
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group-hover:text-brand-orange transition-colors"
              >
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-start gap-2 text-white/60 text-xs sm:text-sm">
              <MapPin size={16} className="sm:w-[18px] sm:h-[18px] mt-0.5 text-brand-orange shrink-0" />
              <span>Australia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-white/40">
        <p className="text-center sm:text-left">© 2025 Roo Filmz Australia pvt ltd. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
