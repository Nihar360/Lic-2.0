import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmotionalQuote } from './components/EmotionalQuote';
import { ConsultationTopics } from './components/ConsultationTopics';
import { ConsultationBenefits } from './components/ConsultationBenefits';
import { HostSection } from './components/HostSection';
import { Testimonials } from './components/Testimonials';
import { AppointmentSection } from './components/AppointmentSection';
import { Footer } from './components/Footer';
import { MobileFloatingCTA } from './components/MobileFloatingCTA';
import { SuccessModal } from './components/SuccessModal';
import { AppointmentModal } from './components/AppointmentModal';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<{
    name: string;
    date: string;
    time: string;
  } | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleBookingSuccess = (details: { name: string; date: string; time: string }) => {
    setBookingDetails(details);
    setIsBookingModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream text-brandText-dark flex flex-col font-sans selection:bg-gold-400 selection:text-navy-900">
      
      {/* 1. Sticky Navigation Header */}
      <Header onClaimClick={handleOpenBookingModal} />

      {/* Main Page Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onClaimClick={handleOpenBookingModal} />

        {/* 3. Emotional Family Insurance Statement */}
        <EmotionalQuote />

        {/* 4. Services Section ("How I Can Help You") */}
        <ConsultationTopics />

        {/* 5. Why Choose Deepak ("Why Choose Me?") */}
        <ConsultationBenefits onClaimClick={handleOpenBookingModal} />

        {/* 6. Meet Your Advisor (Deepak Gholap Bio & Recognition) */}
        <HostSection />

        {/* 7. Client Reviews & Google Testimonials */}
        <Testimonials />

        {/* 8 & 9. Final Appointment Section + Contact Details */}
        <AppointmentSection onSuccess={handleBookingSuccess} />
      </main>

      {/* 10. Footer + Regulatory Disclaimer */}
      <Footer />

      {/* Mobile Floating Sticky CTA Bar */}
      <MobileFloatingCTA onClaimClick={handleOpenBookingModal} />

      {/* Booking Form Modal Popup */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSuccess={handleBookingSuccess}
      />

      {/* Interactive Appointment Success Feedback Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        bookingDetails={bookingDetails}
      />
    </div>
  );
}

export default App;
