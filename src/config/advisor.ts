export interface AdvisorConfig {
  name: string;
  title: string;
  heroHeadlineMain: string;
  heroHeadlineSub: string;
  heroSupportingText: string;
  heroPositioning: string;
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  googleReviewLink: string;
  calendlyUrl: string;
  stats: {
    families: string;
    experience: string;
    service: string;
  };
  ctaPrimary: string;
  ctaSecondary: string;
  urgencyText: string;
  ctaAppointmentText: string;
  emotionalStatement: {
    hindi: string;
    english: string;
    subtext: string;
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
    iconName: 'Shield' | 'GraduationCap' | 'Sun' | 'HeartPulse' | 'IndianRupee' | 'FileCheck2';
    highlighted?: boolean;
  }>;
  whyChoose: Array<{
    title: string;
    description: string;
  }>;
  bio: {
    subtitle: string;
    highlight: string;
    paragraphs: string[];
    bulletPoints: string[];
  };
  testimonials: Array<{
    name: string;
    role: string;
    text: string;
    rating: number;
  }>;
}

export const advisor: AdvisorConfig = {
  name: "Deepak Gholap",
  title: "LIC Advisor & Financial Planner",
  heroHeadlineMain: "Secure Today",
  heroHeadlineSub: "Assured Tomorrow",
  heroSupportingText: "Reliable Guidance. Transparent Advice. Long-Term Security for You & Your Family.",
  heroPositioning: "TRUSTED LIC ADVISOR",
  phone: "+91 98921 64068",
  whatsapp: "+919892164068",
  email: "licdeepakgholap@gmail.com",
  location: "Kutwal Colony, Nagpur, Maharashtra",
  googleReviewLink: "https://g.co/kgs/example",
  calendlyUrl: "https://calendly.com/nikunaik2003/30min",
  stats: {
    families: "Trusted Guidance",
    experience: "Personalized Service",
    service: "Long-Term Support",
  },
  ctaPrimary: "Book Your Appointment Now",
  ctaSecondary: "Get Expert Guidance for Your Financial Future",
  urgencyText: "Limited Slots – Book Early!",
  ctaAppointmentText: "Book a 1-on-1 consultation with Deepak Gholap and get personalized guidance for your LIC and financial planning needs.",
  emotionalStatement: {
    hindi: "आपकी और आपके परिवार की आर्थिक सुरक्षा हमारी पहली प्राथमिकता है। सही योजना आज, सुकून भरा कल।",
    english: "Helping you build a secure future with the right plan today, so you and your loved ones can live tomorrow with confidence and peace of mind.",
    subtext: "आपकी ज़रूरत, सही सलाह, और जीवन भर का अटूट साथ।",
  },
  services: [
    {
      id: "life-insurance",
      title: "Life Insurance",
      description: "Secure your family's future with the right LIC life insurance plan.",
      iconName: "Shield",
    },
    {
      id: "child-future",
      title: "Child Future Plans",
      description: "Smart planning for your child's education, dreams and bright tomorrow.",
      iconName: "GraduationCap",
    },
    {
      id: "retirement-plans",
      title: "Retirement Plans",
      description: "Enjoy a worry-free retirement with financial freedom and stability.",
      iconName: "Sun",
    },
    {
      id: "health-insurance",
      title: "Health Insurance",
      description: "Protect your family from medical emergencies with the right coverage.",
      iconName: "HeartPulse",
    },
    {
      id: "tax-saving",
      title: "Tax Saving Plans",
      description: "Save tax and grow wealth with trusted LIC savings and investment plans.",
      iconName: "IndianRupee",
    },
    {
      id: "policy-services",
      title: "Policy Services",
      description: "Policy review, loan, revival, maturity and all LIC service support.",
      iconName: "FileCheck2",
      highlighted: true,
    },
  ],
  whyChoose: [
    {
      title: "Customer First",
      description: "Your goals are my priority.",
    },
    {
      title: "Trusted Advisor",
      description: "Honest advice focused on your benefit.",
    },
    {
      title: "Quick Support",
      description: "Always available for your queries.",
    },
    {
      title: "End-to-End Service",
      description: "From policy to claim, I'm with you.",
    },
    {
      title: "Transparent Process",
      description: "Clear information, no hidden terms.",
    },
    {
      title: "Experienced & Reliable",
      description: "Years of trust and commitment.",
    },
  ],
  bio: {
    subtitle: "LIC Advisor & Financial Planner",
    highlight: "Your dreams. My commitment.",
    paragraphs: [
      "With extensive experience in LIC, I help families and individuals secure their financial future with the right insurance and investment plans. My mission is simple – to provide honest guidance, transparent services, and lifelong support.",
    ],
    bulletPoints: [
      "Personalized Financial Guidance",
      "LIC Policy Assistance",
      "Expert in LIC Plans & Services",
      "Claim & Policy Assistance",
      "Long-Term Customer Support",
    ],
  },
  testimonials: [
    {
      name: "Saurav Purkayastha",
      role: "Verified Client",
      text: "I am very pleased with the support provided by Deepak sir. He is courteous, professional, and reliable. He made the entire paperwork process easy and hassle-free.",
      rating: 5,
    },
    {
      name: "Raju Konar",
      role: "Verified Client",
      text: "Deepak is very polite and appreciate his behavior towards customer. Highly recommended for all with regards to any help related to LIC policies.",
      rating: 5,
    },
    {
      name: "Amit Kumar Chandel",
      role: "Verified Client",
      text: "Mr. Deepak is a reliable and professional LIC agent. He explains policies clearly and is always supportive during queries or claims.",
      rating: 5,
    },
    {
      name: "Daksh Gaikwad",
      role: "Verified Client",
      text: "Very impressed with the efficiency and professionalism. The entire process was completed quickly and I received timely updates at every stage.",
      rating: 5,
    },
  ],
};
