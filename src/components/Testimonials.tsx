import React from 'react';
import { Star } from 'lucide-react';
import { advisor } from '../config/advisor';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24 lg:py-32 bg-cream relative border-t border-gold-400/20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Title */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="gold-flourish-divider">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-navy-900 tracking-tight">
              What My Clients Say
            </h2>
          </div>
        </div>

        {/* Testimonials Container (Horizontal Swipeable Carousel on Mobile, Grid on Tablet/Desktop) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none space-x-4 pb-4 md:space-x-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {advisor.testimonials.map((item, index) => (
            <div
              key={index}
              className="w-[85vw] sm:w-[340px] md:w-auto flex-shrink-0 snap-center bg-white border border-gold-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3 sm:mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base lg:text-lg text-brandText-dark leading-relaxed font-medium mb-4 sm:mb-6">
                  {item.text}
                </p>
              </div>

              {/* Client Name with Dash */}
              <div className="border-t border-gold-200/60 pt-3 sm:pt-4">
                <p className="font-heading text-xs sm:text-sm lg:text-base font-bold text-navy-900">
                  - {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Button */}
        <div className="mt-12 text-center">
          <a
            href={advisor.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-navy-900 border border-slate-300 rounded-full px-7 py-3.5 shadow-sm text-sm font-bold transition-all duration-200 transform hover:-translate-y-0.5"
          >
            {/* Colorful Google G Icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>View More Reviews on Google</span>
          </a>
        </div>

      </div>
    </section>
  );
};
