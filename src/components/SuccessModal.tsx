import React from 'react';
import { CheckCircle2, Calendar, Clock, X } from 'lucide-react';
import { advisor } from '../config/advisor';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: {
    name: string;
    date: string;
    time: string;
  } | null;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, bookingDetails }) => {
  if (!isOpen || !bookingDetails) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border-2 border-gold-DEFAULT relative text-center text-brandText-dark space-y-4 my-auto">
        
        {/* High-visibility Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 rounded-full bg-navy-900 text-gold-400 border border-gold-400/40 shadow-lg hover:bg-navy-800 hover:text-white transition-all transform active:scale-90 flex items-center justify-center cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Success Icon */}
        <div className="w-14 h-14 rounded-full bg-gold-100 border-2 border-gold-DEFAULT text-navy-800 flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-9 h-9 text-gold-DEFAULT" />
        </div>

        {/* Header */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-navy-800">
            Appointment Requested!
          </h3>
          <p className="text-xs sm:text-sm text-brandText-muted mt-1">
            Thank you, <strong className="text-navy-800 font-bold">{bookingDetails.name}</strong>. Your consultation slot has been reserved.
          </p>
        </div>

        {/* Reserved Slot Box */}
        <div className="bg-cream border border-gold-400/30 rounded-xl p-3.5 text-left space-y-1.5 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-navy-800 font-semibold">
            <Calendar className="w-4 h-4 text-gold-DEFAULT" />
            <span>Date: {bookingDetails.date}</span>
          </div>
          <div className="flex items-center gap-2 text-navy-800 font-semibold">
            <Clock className="w-4 h-4 text-gold-DEFAULT" />
            <span>Time Slot: {bookingDetails.time}</span>
          </div>
        </div>

        <p className="text-xs text-brandText-muted leading-relaxed font-medium">
          {advisor.name} will reach out to you shortly to confirm your meeting details.
        </p>

        {/* OK Button */}
        <button
          onClick={onClose}
          className="w-full bg-navy-800 hover:bg-navy-900 text-gold-400 font-bold py-3 rounded-xl shadow-md transition-all text-sm font-heading"
        >
          Great, Thank You!
        </button>

      </div>
    </div>
  );
};
