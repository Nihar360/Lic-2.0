import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { advisor } from '../config/advisor';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-400 py-12 sm:py-16 border-t border-gold-600/30 text-sm">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-navy-800">
          
          {/* Left Brand info */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="bg-white rounded-lg p-1 border border-gold-400/40 flex items-center justify-center">
              <img
                src="/assets/lic_logo.png"
                alt="LIC Logo"
                className="h-10 w-auto object-contain max-w-[140px]"
              />
            </div>
            <div>
              <div className="font-heading text-lg font-bold text-white">{advisor.name}</div>
              <div className="text-xs sm:text-sm text-gold-400 font-semibold">{advisor.title}</div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm sm:text-base font-medium text-slate-300">
            <a href="#why-plan" className="hover:text-gold-400 transition-colors">Why Plan Now</a>
            <a href="#services" className="hover:text-gold-400 transition-colors">Services</a>
            <a href="#why-choose" className="hover:text-gold-400 transition-colors">Solutions</a>
            <a href="#about-advisor" className="hover:text-gold-400 transition-colors">About</a>
            <a href="#testimonials" className="hover:text-gold-400 transition-colors">Reviews</a>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-start gap-3 max-w-3xl text-xs sm:text-sm text-slate-400 leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
            <span>
              Insurance is Subject Matter of Solicitation. Insurance is subject to applicable terms and conditions. This website is intended for informational and consultation purposes by independent LIC advisor {advisor.name}.
            </span>
          </div>

          <div className="text-xs sm:text-sm text-slate-400 whitespace-nowrap font-medium">
            &copy; {currentYear} {advisor.name}. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
