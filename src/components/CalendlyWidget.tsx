import React, { useState } from 'react';
import { ExternalLink, Loader2, Calendar } from 'lucide-react';
import { advisor } from '../config/advisor';

interface CalendlyWidgetProps {
  url?: string;
  height?: string;
  minHeight?: string;
}

export const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({
  url = advisor.calendlyUrl,
  height = '650px',
  minHeight = '550px',
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Construct styled Calendly URL with brand colors
  // primary_color: c8942e (Gold)
  // text_color: 0f172a (Navy Dark)
  // background_color: ffffff (White)
  const formattedUrl = React.useMemo(() => {
    if (!url) return '';
    const cleanUrl = url.trim();
    const separator = cleanUrl.includes('?') ? '&' : '?';
    return `${cleanUrl}${separator}hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=c8942e`;
  }, [url]);

  if (!url) {
    return (
      <div className="p-8 text-center bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl">
        <Calendar className="w-12 h-12 text-gold-DEFAULT mx-auto mb-3" />
        <p className="text-navy-900 font-bold text-lg mb-1">Calendly Link Required</p>
        <p className="text-slate-600 text-sm">Please set your Calendly URL in configuration.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-inner">
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center p-6 text-center space-y-3">
          <Loader2 className="w-9 h-9 text-gold-DEFAULT animate-spin" />
          <p className="text-navy-900 font-bold text-sm sm:text-base font-heading">
            Loading Available Consultation Slots...
          </p>
          <p className="text-slate-500 text-xs">Connecting securely to Calendly</p>
        </div>
      )}

      {/* Top Header / Open external link shortcut */}
      <div className="bg-navy-900 text-white px-4 py-2.5 flex items-center justify-between text-xs border-b border-gold-400/30">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-slate-200">Live Calendar Booking</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-400 hover:text-gold-300 flex items-center gap-1 font-bold transition-colors"
        >
          <span>Open Fullscreen</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Iframe widget */}
      <iframe
        src={formattedUrl}
        title="Select a Date & Time - Calendly"
        width="100%"
        height={height}
        style={{ minHeight, border: 0 }}
        onLoad={() => setIsLoading(false)}
        className="w-full transition-opacity duration-300"
      />
    </div>
  );
};
