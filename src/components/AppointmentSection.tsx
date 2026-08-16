import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, Send } from 'lucide-react';
import { advisor } from '../config/advisor';
import { CalendlyWidget } from './CalendlyWidget';

interface AppointmentSectionProps {
  onSuccess: (data: { name: string; date: string; time: string }) => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ onSuccess }) => {
  const [activeTab, setActiveTab] = useState<'calendly' | 'form'>('calendly');
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
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.date) newErrors.date = 'Preferred date is required';
    if (!formData.time) newErrors.time = 'Preferred time slot is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess({ name: formData.name, date: formData.date, time: formData.time });
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
    <section id="appointment-section" className="bg-navy-900 text-white py-14 sm:py-20 lg:py-32 relative overflow-hidden border-t border-gold-600/30">
      
      {/* Background Decorative Gold Waves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1400 900" fill="none">
          <circle cx="200" cy="450" r="300" stroke="#C8942E" strokeWidth="1.5" strokeDasharray="6 6" />
          <path d="M-100 650 Q 500 400 1200 800" stroke="#E8C66A" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Dark Navy Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="space-y-3.5 sm:space-y-5">
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Ready to Secure Your Future?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-medium">
                Book your 1-on-1 consultation today!
              </p>

              {/* Contact Details List */}
              <div className="space-y-4 sm:space-y-5 pt-2 sm:pt-4">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-800 border border-gold-400/40 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-md">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-bold uppercase tracking-wider">Phone</div>
                    <a href={`tel:${advisor.phone}`} className="text-sm sm:text-base lg:text-lg font-bold text-white hover:text-gold-300 transition-colors">
                      {advisor.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-800 border border-gold-400/40 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-md">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-bold uppercase tracking-wider">Email</div>
                    <a href={`mailto:${advisor.email}`} className="text-sm sm:text-base lg:text-lg font-bold text-white hover:text-gold-300 transition-colors break-all">
                      {advisor.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-800 border border-gold-400/40 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5 shadow-md">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-bold uppercase tracking-wider">Office</div>
                    <div className="text-xs sm:text-sm lg:text-base font-medium text-slate-200">
                      {advisor.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TRUSTED BY FAMILIES Circular Laurel Emblem */}
            <div className="pt-2 sm:pt-4">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-gold-400/60 p-1 flex flex-col items-center justify-center text-center bg-navy-800/90 shadow-xl">
                <div className="text-[9px] sm:text-[10px] font-extrabold uppercase text-gold-300 tracking-tighter leading-tight font-heading">
                  TRUSTED<br />
                  <span className="text-white text-xs font-black">CONSULTATION</span><br />
                  ADVISOR
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Clean White Booking Card with Calendly Embed */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 shadow-2xl text-navy-900 border border-gold-400/40 max-w-2xl mx-auto">
              
              {/* Header Title */}
              <div className="text-center mb-5">
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy-900">
                  Book Your Appointment
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                  Choose your preferred booking option below:
                </p>

                {/* Tab Switcher */}
                <div className="flex items-center justify-center p-1 bg-slate-100 rounded-xl mt-3 max-w-md mx-auto border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setActiveTab('calendly')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'calendly'
                        ? 'bg-navy-900 text-gold-400 shadow-md'
                        : 'text-slate-600 hover:text-navy-900'
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    <span>Calendly Live Slots</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('form')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'form'
                        ? 'bg-navy-900 text-gold-400 shadow-md'
                        : 'text-slate-600 hover:text-navy-900'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Quick Message</span>
                  </button>
                </div>
              </div>

              {/* TAB 1: CALENDLY WIDGET */}
              {activeTab === 'calendly' && (
                <div className="animate-fadeIn">
                  <CalendlyWidget height="660px" minHeight="560px" />
                </div>
              )}

              {/* TAB 2: MANUAL FORM */}
              {activeTab === 'form' && (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-navy-900 mb-1 sm:mb-1.5 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-xs sm:text-sm lg:text-base focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-gold-DEFAULT'
                        }`}
                      />
                      {errors.name && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-navy-900 mb-1 sm:mb-1.5 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-xs sm:text-sm lg:text-base focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-gold-DEFAULT'
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-navy-900 mb-1 sm:mb-1.5 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-xs sm:text-sm lg:text-base focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-gold-DEFAULT'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-navy-900 mb-1 sm:mb-1.5 uppercase tracking-wide">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-xs sm:text-sm lg:text-base focus:outline-none transition-colors ${
                          errors.date ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-gold-DEFAULT'
                        }`}
                      />
                      {errors.date && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.date}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-navy-900 mb-1 sm:mb-1.5 uppercase tracking-wide">
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-xs sm:text-sm lg:text-base focus:outline-none transition-colors ${
                          errors.time ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-gold-DEFAULT'
                        }`}
                      >
                        <option value="">Select Time</option>
                        {timeOptions.map((option, idx) => (
                          <option key={idx} value={option}>{option}</option>
                        ))}
                      </select>
                      {errors.time && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.time}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-navy-900 mb-1 sm:mb-1.5 uppercase tracking-wide">
                        Your Message (Optional)
                      </label>
                      <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Brief requirement"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-300 focus:border-gold-DEFAULT text-xs sm:text-sm lg:text-base focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-navy-900 font-extrabold py-3.5 sm:py-4 px-6 rounded-xl sm:rounded-2xl text-sm sm:text-base lg:text-lg shadow-gold-glow hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 transform active:scale-95 disabled:opacity-75 font-heading mt-3 sm:mt-4"
                  >
                    {isSubmitting ? (
                      <span>Processing Appointment...</span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Book My Appointment Now</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
