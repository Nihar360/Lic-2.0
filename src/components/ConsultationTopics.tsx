import React from 'react';
import { Shield, GraduationCap, Sun, HeartPulse, IndianRupee, FileCheck2 } from 'lucide-react';
import { advisor } from '../config/advisor';

export const ConsultationTopics: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-7 h-7 sm:w-10 sm:h-10 text-navy-900 group-hover:text-navy-950 transition-colors" />;
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 sm:w-10 sm:h-10 text-navy-900 group-hover:text-navy-950 transition-colors" />;
      case 'Sun':
        return <Sun className="w-7 h-7 sm:w-10 sm:h-10 text-navy-900 group-hover:text-navy-950 transition-colors" />;
      case 'HeartPulse':
        return <HeartPulse className="w-7 h-7 sm:w-10 sm:h-10 text-navy-900 group-hover:text-navy-950 transition-colors" />;
      case 'IndianRupee':
        return <IndianRupee className="w-7 h-7 sm:w-10 sm:h-10 text-navy-900 group-hover:text-navy-950 transition-colors" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-7 h-7 sm:w-10 sm:h-10 text-navy-900 group-hover:text-navy-950 transition-colors" />;
      default:
        return <Shield className="w-7 h-7 sm:w-10 sm:h-10 text-navy-900 group-hover:text-navy-950 transition-colors" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-32 bg-cream relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="gold-flourish-divider">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[46px] font-extrabold text-navy-900 tracking-tight">
              How I Can Help You
            </h2>
          </div>
        </div>

        {/* 6 Service Cards in Clean 2-Column Mobile Grid / 3-Column Desktop Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-10">
          {advisor.services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gold-400/30 rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-9 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-start text-left group transform hover:-translate-y-1.5 relative h-full justify-between"
            >
              <div>
                {/* Icon Box */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gold-100/80 border border-gold-400/40 flex items-center justify-center mb-3 sm:mb-6 group-hover:bg-gold-gradient transition-all duration-300 shadow-sm flex-shrink-0">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-heading text-sm sm:text-xl lg:text-2xl font-bold text-navy-900 mb-1.5 sm:mb-3 group-hover:text-gold-DEFAULT transition-colors leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-base lg:text-lg text-brandText-muted leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
