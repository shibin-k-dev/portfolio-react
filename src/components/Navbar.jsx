import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#111620]/90 backdrop-blur-md shadow-lg py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-50">
        {/* Left: Logo */}
        <a href="/" className="text-lg md:text-2xl font-black text-white flex items-center">
          MUHAMMED <span className="text-primary ml-1 md:ml-2">SHIBIN K.</span>
        </a>
        
        {/* Center: Links */}
        <nav className="hidden lg:flex items-center gap-8 bg-[#1A2232]/50 border border-white/5 rounded-full px-8 py-3 backdrop-blur-sm">
          <a href="#about" className="text-sm font-medium text-primary hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-sm font-medium text-secondary hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-sm font-medium text-secondary hover:text-white transition-colors">Projects</a>
          <a href="#education" className="text-sm font-medium text-secondary hover:text-white transition-colors">Education</a>
          <a href="#contact" className="text-sm font-medium text-secondary hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Right: Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <a href="#contact" className="border border-white/20 text-secondary hover:text-white px-6 py-2 rounded-full transition-colors flex items-center gap-2 text-sm font-medium">
              Contact <span className="text-primary">→</span>
            </a>
          </div>
          <button 
            className="lg:hidden text-white focus:outline-none flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#111620] border-b border-white/10 shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-72 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="flex flex-col px-6 gap-4">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-primary hover:text-primary transition-colors">About</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-white hover:text-primary transition-colors">Skills</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-white hover:text-primary transition-colors">Projects</a>
          <a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-white hover:text-primary transition-colors">Education</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-white hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
