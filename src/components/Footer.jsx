import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111827] py-8 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-secondary text-sm">© 2026 Muhammed Shibin K. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/shibin-k-dev" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/muhammed-shibin-dev" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors"><FaLinkedin size={20} /></a>
          <a href="mailto:shibinkshibi21@gmail.com" className="text-secondary hover:text-primary transition-colors"><FaEnvelope size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
