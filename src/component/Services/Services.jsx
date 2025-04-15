import React, { useEffect } from 'react';
import Banner from './components/Banner';
import ChooseSection from './components/ChooseSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import TestimonialSection from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
const Services = () => {
  useEffect(() => {
    document.title = '';
  }, []);

  return (
    <>
      <Banner />
      <ChooseSection />
      <ServicesSection />
      <ContactSection/>
      <TestimonialSection/>
      <PricingSection/>
    </>
  );
};

export default Services;
