import React from 'react';
import { Award, Users, FileCheck, Lightbulb, HeartHandshake } from 'lucide-react';
import { advisor } from '../config/advisor';

export const HostSection: React.FC = () => {
  const bulletIcons = [
    <Award key="1" className="w-5 h-5 text-navy-900" />,
    <Users key="2" className="w-5 h-5 text-navy-900" />,
    <FileCheck key="3" className="w-5 h-5 text-navy-900" />,
    <Lightbulb key="4" className="w-5 h-5 text-navy-900" />,
    <HeartHandshake key="5" className="w-5 h-5 text-navy-900" />,
  ];

  return (
    <section id="about-advisor" className="py-14 sm:py-20 lg:py-32 bg-cream relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="gold-flourish-divider">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[46px] font-extrabold text-navy-900 tracking-tight">
              Meet Your Advisor
            </h2>
          </div>
        </div>

        {/* Main Content Grid (Mobile flow: Photo -> Name -> Title -> Bio -> Expertise) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Frameless Integrated Advisor Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none flex justify-center">
              
              {/* Subtle Gold Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-gold-400/20 rounded-full blur-3xl pointer-events-none" />
              
              {/* Large Frameless Integrated Transparent Portrait Container */}
              <div className="relative rounded-3xl overflow-hidden bg-navy-900/95 p-3 border border-gold-400/40 shadow-2xl">
                <img
                  src="/assets/vivek_portrait.png"
                  alt="Vivek Gholap - LIC Advisor & Financial Planner"
                  className="w-full h-[380px] sm:h-[480px] lg:h-[520px] object-contain object-bottom"
                />
              </div>

            </div>
          </div>

          {/* Bio & Feature Bullets Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            <div>
              <p className="text-xs sm:text-sm uppercase font-extrabold text-gold-DEFAULT tracking-widest mb-1.5 font-heading">
                MEET YOUR ADVISOR
              </p>
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight">
                {advisor.name}
              </h3>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-navy-800 mt-1">
                {advisor.title}
              </p>
            </div>

            {/* Biography Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-brandText-muted leading-relaxed font-medium">
              {advisor.bio.paragraphs[0]}
            </p>

            {/* Bold Highlight Statement */}
            <div className="pt-1 border-l-4 border-gold-DEFAULT pl-4 py-1">
              <p className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-navy-900">
                {advisor.bio.highlight}
              </p>
            </div>

            {/* Bullet Points List with Circular Icons */}
            <div className="space-y-3.5 sm:space-y-4 pt-2">
              {advisor.bio.bulletPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gold-100/90 border border-gold-400/50 flex items-center justify-center flex-shrink-0 shadow-sm">
                    {bulletIcons[index]}
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-navy-900">
                    {point}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
