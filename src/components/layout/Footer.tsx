import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin, MessageCircle } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "61400000000"; // Replace with actual number if different
  const whatsappMessage = encodeURIComponent("Hi Roo Filmz! I saw your website and would love to chat about a potential project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-2">
          <Link href="/" className="mb-5 block">
            <Logo />
          </Link>
          <p className="text-white/60 max-w-sm mb-6 leading-relaxed text-sm">
            Capturing stories that resonate. We are a results-driven creative house based in Australia, 
            delivering high-impact video, web development, and digital marketing strategies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.instagram.com/roofilmz/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-brand-orange hover:border-brand-orange hover:text-black">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/roofilmz/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-brand-orange hover:border-brand-orange hover:text-black">
              <Facebook size={18} />
            </a>
            <a href="https://www.youtube.com/@roofilmz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-brand-orange hover:border-brand-orange hover:text-black">
              <Youtube size={18} />
            </a>
            <a href="https://www.linkedin.com/company/roofilmzaustralia/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-brand-orange hover:border-brand-orange hover:text-black">
              <Linkedin size={18} />
            </a>
            <a href="https://www.tiktok.com/@roofilmzaustralia" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-brand-orange hover:border-brand-orange hover:text-black">
              <svg 
                viewBox="0 0 24 24" 
                width="18" 
                height="18" 
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
          <h4 className="font-display font-bold text-base uppercase tracking-wider mb-5 text-brand-orange">Explore</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-white/60 hover:text-brand-orange transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-white/60 hover:text-brand-orange transition-colors">Who We Are</Link></li>
            <li><Link href="/services" className="text-white/60 hover:text-brand-orange transition-colors">What We Do</Link></li>
            <li><Link href="/work" className="text-white/60 hover:text-brand-orange transition-colors">Our Work</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display font-bold text-base uppercase tracking-wider mb-5 text-brand-orange">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-white/60 group text-sm">
              <Mail size={18} className="mt-0.5 text-brand-orange shrink-0" />
              <a href="mailto:admin@roofilmz.com.au" className="group-hover:text-brand-orange transition-colors">admin@roofilmz.com.au</a>
            </li>
            <li className="flex items-start gap-2 text-white/60 group text-sm">
              <Phone size={18} className="mt-0.5 text-brand-orange shrink-0" />
              <a href="tel:+61452645805" className="group-hover:text-brand-orange transition-colors">0452 645 805</a>
            </li>
            <li className="flex items-start gap-2 text-white/60 group text-sm">
              <MessageCircle size={18} className="mt-0.5 text-brand-orange shrink-0" />
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group-hover:text-brand-orange transition-colors"
              >
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-start gap-2 text-white/60 text-sm">
              <MapPin size={18} className="mt-0.5 text-brand-orange shrink-0" />
              <span>Australia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© 2025 Roo Filmz Australia pvt ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
