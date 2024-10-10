import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <div className="container mx-auto h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">GT Performance & Design</h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300">Elevating exotic and sports cars with precision engineering and artistic design.</p>
            <a href="#contact" className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
              Start Your Transformation
              <ChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;