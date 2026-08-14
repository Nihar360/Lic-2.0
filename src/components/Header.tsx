import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { advisor } from '../config/advisor';

interface HeaderProps {
  onClaimClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onClaimClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why Plan Now', href: '#why-plan' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#why-choose' },
    { name: 'About', href: '#about-advisor' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-xl border-b border-gold-600/30 py-2'
          : 'bg-navy-900 border-b border-gold-600/20 py-2.5'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          
          {/* Left Logo & Advisor Branding */}
          <div className="flex items-center gap-3.5">
            {/* Razor-Sharp Crystal Clear LIC Logo Container */}
            <div className="bg-white rounded-md p-1 border border-gold-400/50 shadow-md flex items-center justify-center transition-transform hover:scale-105">
              <img
                src="/assets/lic_logo.png"
                srcSet="/assets/lic_logo.png 2x, /assets/lic_logo.svg 3x"
                alt="Life Insurance Corporation of India (LIC)"
                className="h-9 sm:h-11 w-auto object-contain max-w-[140px] sm:max-w-[170px]"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            
            <div className="border-l-2 border-gold-400/40 pl-3">
              <span className="block font-serif text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                {advisor.name}
              </span>
              <span className="block text-[10px] sm:text-xs text-gold-400 font-semibold tracking-wide">
                {advisor.title}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-slate-200 hover:text-gold-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={onClaimClick}
              className="bg-gold-gradient hover:bg-gold-gradient-hover text-navy-900 font-bold px-4 lg:px-5 py-2 rounded-lg text-xs lg:text-sm transition-all duration-300 shadow-gold-glow hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onClaimClick}
              className="bg-gold-gradient text-navy-900 text-xs font-bold px-3 py-1.5 rounded shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-200 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-900 border-b border-gold-600/30 px-4 pt-2 pb-4 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-200 hover:text-gold-400 py-1.5 border-b border-navy-700/50"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onClaimClick();
            }}
            className="w-full mt-2 bg-gold-gradient text-navy-900 font-bold px-4 py-2.5 rounded-lg text-center text-sm shadow-gold-glow"
          >
            Book Appointment
          </button>
        </div>
      )}
    </header>
  );
};
