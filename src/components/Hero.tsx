import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[60vh] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Unleash Your Car's Potential</h2>
          <p className="text-xl md:text-2xl mb-8">Exotic and Performance Improvements for Sports Cars</p>
          <a href="#contact" className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;