import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;