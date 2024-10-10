import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">GT Performance & Design</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#gallery" className="hover:text-gray-300">Gallery</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Header;