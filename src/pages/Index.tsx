import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Directions from '../components/Directions';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Directions />
      <Footer />
    </div>
  );
};

export default Index;