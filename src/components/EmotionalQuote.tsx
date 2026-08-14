import React from 'react';
import { advisor } from '../config/advisor';

export const EmotionalQuote: React.FC = () => {
  return (
    <section id="why-plan" className="bg-cream py-18 sm:py-24 lg:py-28 relative overflow-hidden border-y border-gold-400/30">
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          
          {/* Left Gold Accent Lines */}
          <div className="hidden sm:flex flex-col items-end gap-1.5 text-gold-DEFAULT opacity-80 flex-shrink-0">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gold-DEFAULT" />
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-gold-DEFAULT" />
            <div className="w-14 h-0.5 bg-gradient-to-r from-transparent to-gold-DEFAULT" />
          </div>

          {/* Left Quote Icon */}
          <div className="text-gold-DEFAULT text-6xl sm:text-7xl lg:text-8xl font-serif leading-none opacity-90 select-none flex-shrink-0">
            “
          </div>

          {/* Quote Text Statement */}
          <blockquote className="text-navy-900 font-serif font-semibold text-xl sm:text-2xl lg:text-3xl leading-relaxed max-w-4xl tracking-wide">
            {advisor.emotionalStatement.english}
          </blockquote>

          {/* Right Quote Icon */}
          <div className="text-gold-DEFAULT text-6xl sm:text-7xl lg:text-8xl font-serif leading-none opacity-90 select-none flex-shrink-0">
            ”
          </div>

        </div>
      </div>

    </section>
  );
};
