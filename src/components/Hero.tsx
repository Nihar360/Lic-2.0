import React from 'react';
import { Calendar, ShieldCheck, Award, Users, Sparkles } from 'lucide-react';
import { advisor } from '../config/advisor';

interface HeroProps {
  onClaimClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onClaimClick }) => {
  return (
    <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 bg-navy-900 text-white min-h-[720px] lg:min-h-[760px] flex items-center overflow-hidden">
      
      {/* Background Decorative Gold Geometry & Glow Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-navy-700/40 rounded-full blur-3xl" />
        
        {/* Subtle decorative concentric vector swoosh geometry */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1400 900" fill="none">
          <circle cx="1050" cy="450" r="320" stroke="#C8942E" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="1050" cy="450" r="440" stroke="#C8942E" strokeWidth="1" />
          <circle cx="1050" cy="450" r="560" stroke="#E8C66A" strokeWidth="0.8" opacity="0.6" />
          <path d="M-100 250 Q 400 120 850 450 T 1500 680" stroke="#E8C66A" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT CONTENT COLUMN (approx 55-60% width) */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-left">
            
            {/* Top Positioning Pill Badge */}
            <div className="inline-flex items-center gap-2.5 bg-navy-800/90 border border-gold-400/50 rounded-full px-4 py-1.5 shadow-md">
              <div className="w-5 h-5 rounded-full bg-gold-DEFAULT flex items-center justify-center text-navy-900 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-navy-900" />
              </div>
              <span className="text-gold-400 text-xs sm:text-sm font-extrabold uppercase tracking-wider font-heading">
                {advisor.heroPositioning}
              </span>
            </div>

            {/* Main Display Headline (64–82px on desktop) */}
            <div className="space-y-1">
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.08]">
                <span className="text-gold-400 drop-shadow-sm block">{advisor.heroHeadlineMain}</span>
                <span className="text-white block">{advisor.heroHeadlineSub}</span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <div className="text-slate-200 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl space-y-1">
              <p className="font-semibold text-white">Reliable Guidance. Transparent Advice.</p>
              <p className="text-slate-300">Long-Term Security for You &amp; Your Family.</p>
            </div>

            {/* 3 Key Trust Indicators (Non-Numerical) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1 max-w-2xl">
              <div className="bg-navy-800/90 border border-gold-400/30 rounded-xl p-3 text-left flex items-center gap-3 shadow-sm">
                <Users className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {advisor.stats.families}
                </div>
              </div>

              <div className="bg-navy-800/90 border border-gold-400/30 rounded-xl p-3 text-left flex items-center gap-3 shadow-sm">
                <Award className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {advisor.stats.experience}
                </div>
              </div>

              <div className="bg-navy-800/90 border border-gold-400/30 rounded-xl p-3 text-left flex items-center gap-3 shadow-sm">
                <Sparkles className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {advisor.stats.service}
                </div>
              </div>
            </div>

            {/* Consultation Panel CTA Box */}
            <div className="bg-navy-800/95 border border-gold-400/40 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-sm max-w-2xl space-y-4">
              <div>
                <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-gold-300">
                  Get Expert Guidance for Your Financial Future
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Book a 1-on-1 consultation with Deepak Gholap and get personalized guidance for your LIC and financial planning needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                <button
                  onClick={onClaimClick}
                  className="bg-gold-gradient hover:bg-gold-gradient-hover text-navy-900 font-extrabold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-gold-glow hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 font-heading"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Your Appointment Now</span>
                </button>
                <span className="text-xs text-gold-300/90 font-semibold italic text-center sm:text-left">
                  Limited Slots – Book Early!
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT VISUAL COLUMN - FRAMELESS INTEGRATED DEEPAK PORTRAIT (approx 45% desktop width) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end pt-4 lg:pt-0">
            
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto flex items-end justify-center">
              
              {/* Radial Gold Ambient Glow & SVG Geometry Behind Advisor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-gold-400/20 rounded-full blur-3xl pointer-events-none" />
              
              {/* Clean Edge-to-Edge Transparent Cutout Portrait */}
              <div className="relative w-full overflow-hidden flex items-end justify-center">
                <img
                  src="/assets/vivek_portrait.png"
                  alt="Deepak Gholap - LIC Advisor & Financial Planner"
                  className="w-full h-auto max-h-[460px] sm:max-h-[540px] lg:max-h-[640px] object-contain object-bottom filter drop-shadow-2xl z-10"
                />
                
                {/* Subtle Bottom Edge Fade into Hero Floor */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none z-20" />
              </div>

              {/* OVERLAPPING GOLD LAUREL COMMITMENT SEAL BADGE */}
              <div className="absolute bottom-4 right-2 sm:right-4 w-32 h-32 sm:w-36 sm:h-36 z-20 pointer-events-none">
                <div className="w-full h-full rounded-full bg-navy-900/95 border-2 border-gold-400 p-2 shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden backdrop-blur-md">
                  <div className="absolute inset-1.5 rounded-full border border-gold-400/40 border-dashed" />
                  
                  {/* 3 Gold Stars */}
                  <div className="flex items-center gap-1 text-gold-400 mb-1 z-10">
                    <span className="text-xs">★</span>
                    <span className="text-sm">★</span>
                    <span className="text-xs">★</span>
                  </div>

                  <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-tighter text-gold-300 leading-tight z-10 px-1 font-heading">
                    YOUR TRUST<br />
                    <span className="text-white text-[9px]">IS MY</span><br />
                    COMMITMENT
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
