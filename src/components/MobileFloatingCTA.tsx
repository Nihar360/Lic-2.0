import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { advisor } from '../config/advisor';

interface MobileFloatingCTAProps {
  onClaimClick: () => void;
}

export const MobileFloatingCTA: React.FC<MobileFloatingCTAProps> = ({ onClaimClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 pb-safe bg-navy-900/95 backdrop-blur-md border-t border-gold-400/30 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center gap-2.5">
        <a
          href={`tel:${advisor.phone}`}
          className="bg-navy-800 border border-gold-400/40 text-gold-400 p-3 rounded-xl flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform"
          aria-label="Call Advisor"
        >
          <Phone className="w-5 h-5" />
        </a>

        <button
          onClick={onClaimClick}
          className="flex-1 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-900 font-extrabold py-3 px-4 rounded-xl text-sm shadow-gold-glow flex items-center justify-center gap-2 transform active:scale-95 font-heading"
        >
          <Calendar className="w-4 h-4 text-navy-900" />
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
  );
};
