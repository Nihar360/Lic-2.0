import { UserCheck, ShieldCheck, Clock, Shield, FileText, Award } from 'lucide-react';
import { advisor } from '../config/advisor';

interface ConsultationBenefitsProps {
  onClaimClick: () => void;
}

export const ConsultationBenefits: React.FC<ConsultationBenefitsProps> = () => {
  const icons = [
    <UserCheck key="1" className="w-5 h-5 sm:w-7 sm:h-7 text-gold-400" />,
    <ShieldCheck key="2" className="w-5 h-5 sm:w-7 sm:h-7 text-gold-400" />,
    <Clock key="3" className="w-5 h-5 sm:w-7 sm:h-7 text-gold-400" />,
    <Shield key="4" className="w-5 h-5 sm:w-7 sm:h-7 text-gold-400" />,
    <FileText key="5" className="w-5 h-5 sm:w-7 sm:h-7 text-gold-400" />,
    <Award key="6" className="w-5 h-5 sm:w-7 sm:h-7 text-gold-400" />,
  ];

  return (
    <section id="why-choose" className="py-14 sm:py-20 lg:py-32 bg-navy-900 text-white relative border-t border-gold-600/30">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="gold-flourish-divider">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight">
              Why Choose Me?
            </h2>
          </div>
        </div>

        {/* 6 Benefit Cards in 2-Column Mobile Grid / 3-Column Desktop Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
          {advisor.whyChoose.map((item, index) => (
            <div
              key={index}
              className="bg-navy-800/80 border border-gold-400/30 rounded-2xl p-4 sm:p-6 lg:p-7 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 hover:border-gold-400/60 transition-all duration-300 group shadow-md"
            >
              <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl bg-navy-950 border border-gold-400/40 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                {icons[index]}
              </div>

              <div>
                <h3 className="font-heading text-sm sm:text-lg lg:text-xl font-bold text-white mb-1 group-hover:text-gold-400 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
