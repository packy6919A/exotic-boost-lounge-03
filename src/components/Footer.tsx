import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">ExoticSpeed Bodyworks</h3>
            <p className="text-sm">Transforming exotic and sports cars since 2005</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><Facebook /></a>
            <a href="#" className="hover:text-gray-300"><Instagram /></a>
            <a href="#" className="hover:text-gray-300"><Twitter /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 ExoticSpeed Bodyworks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;