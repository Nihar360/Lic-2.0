import React, { useState } from 'react';
import { X, Calendar, CheckCircle } from 'lucide-react';
import { advisor } from '../config/advisor';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: { name: string; date: string; time: string }) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const timeOptions = [
    '10:00 AM - 11:00 AM',
    '11:30 AM - 12:30 PM',
    '03:00 PM - 04:00 PM',
    '05:00 PM - 06:00 PM',
    '07:00 PM - 08:00 PM',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Valid phone number required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email required';
    }
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time slot is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess({ name: formData.name, date: formData.date, time: formData.time });
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-900/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      
      {/* Modal Dialog Card */}
      <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-7 shadow-2xl border-2 border-gold-DEFAULT relative text-brandText-dark space-y-4 my-auto">
        
        {/* Prominent High-Visibility Close Button (Mobile & Desktop) */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 rounded-full bg-navy-900 text-gold-400 border border-gold-400/40 shadow-lg hover:bg-navy-800 hover:text-white transition-all transform active:scale-90 flex items-center justify-center cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Modal Header */}
        <div className="text-center pr-8 sm:pr-0">
          <div className="inline-flex items-center gap-1.5 bg-gold-100 border border-gold-400/40 text-navy-900 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full mb-1.5 uppercase tracking-wider font-heading">
            <Calendar className="w-3.5 h-3.5 text-gold-DEFAULT" />
            <span>1-On-1 Personal Consultation</span>
          </div>
          <h3 className="font-heading text-xl sm:text-3xl font-extrabold text-navy-800">
            BOOK YOUR APPOINTMENT
          </h3>
          <p className="text-xs text-brandText-muted mt-0.5 font-medium">
            Choose a date and time slot to secure your 1-on-1 appointment with {advisor.name}.
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="space-y-3 pt-1">
          
          {/* Name */}
          <div>
            <label className="block text-[11px] font-bold text-navy-800 uppercase tracking-wider mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rajesh Kumar"
              className={`w-full px-3.5 py-2 rounded-lg border text-xs sm:text-sm focus:outline-none transition-colors ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-gold-DEFAULT'
              }`}
            />
            {errors.name && <p className="text-red-500 text-[11px] mt-0.5">{errors.name}</p>}
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-navy-800 uppercase tracking-wider mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@domain.com"
                className={`w-full px-3.5 py-2 rounded-lg border text-xs sm:text-sm focus:outline-none transition-colors ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-gold-DEFAULT'
                }`}
              />
              {errors.email && <p className="text-red-500 text-[11px] mt-0.5">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-[11px] font-bold text-navy-800 uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile"
                className={`w-full px-3.5 py-2 rounded-lg border text-xs sm:text-sm focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-gold-DEFAULT'
                }`}
              />
              {errors.phone && <p className="text-red-500 text-[11px] mt-0.5">{errors.phone}</p>}
            </div>
          </div>

          {/* Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-navy-800 uppercase tracking-wider mb-1">
                Preferred Date *
              </label>
              <input
                type="date"
                name="date"
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={handleChange}
                className={`w-full px-3.5 py-2 rounded-lg border text-xs sm:text-sm focus:outline-none transition-colors ${
                  errors.date ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-gold-DEFAULT'
                }`}
              />
              {errors.date && <p className="text-red-500 text-[11px] mt-0.5">{errors.date}</p>}
            </div>

            <div>
              <label className="block text-[11px] font-bold text-navy-800 uppercase tracking-wider mb-1">
                Preferred Time *
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`w-full px-3.5 py-2 rounded-lg border text-xs sm:text-sm focus:outline-none transition-colors ${
                  errors.time ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-gold-DEFAULT'
                }`}
              >
                <option value="">Select Time Slot</option>
                {timeOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.time && <p className="text-red-500 text-[11px] mt-0.5">{errors.time}</p>}
            </div>
          </div>

          {/* Message / Concerns */}
          <div>
            <label className="block text-[11px] font-bold text-navy-800 uppercase tracking-wider mb-1">
              Any specific goals or questions?
            </label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Planning retirement corpus for age 55..."
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:border-gold-DEFAULT text-xs sm:text-sm focus:outline-none resize-none"
            ></textarea>
          </div>

          {/* Confidentiality indicator */}
          <div className="flex items-center gap-2 text-[11px] text-brandText-muted">
            <CheckCircle className="w-3.5 h-3.5 text-gold-DEFAULT flex-shrink-0" />
            <span>Strictly confidential. No spam or third-party sharing.</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-navy-900 font-extrabold py-3 px-5 rounded-xl text-sm shadow-gold-glow hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-75 font-heading"
          >
            {isSubmitting ? (
              <span>Confirming Booking...</span>
            ) : (
              <>
                <span>Secure My Appointment</span>
                <Calendar className="w-4 h-4" />
              </>
            )}
          </button>

        </form>
      </div>
    </div>
  );
};
