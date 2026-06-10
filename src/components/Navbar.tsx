import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 md:pt-6 px-4"
    >
      <div className={`flex items-center rounded-full backdrop-blur-md border border-white/10 bg-black/50 text-white px-2 py-2 transition-all duration-300 w-full max-w-fit overflow-x-auto no-scrollbar ${isScrolled ? 'shadow-lg shadow-black/20' : ''}`}>
        
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex-shrink-0 group relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110">
          <div className="absolute inset-0 rounded-full accent-gradient group-hover:rotate-180 transition-transform duration-700" />
          <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
            <span className="font-display italic text-[13px] text-white">A</span>
          </div>
        </a>

        <div className="w-px h-5 bg-white/20 mx-2 md:mx-3 flex-shrink-0" />

        {/* Links */}
        <div className="flex items-center gap-1 mx-1 md:mx-2 overflow-x-auto no-scrollbar flex-nowrap hide-scrollbar">
          {links.map((item) => {
            return (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => handleNavClick(e, item.id)}
                className="flex-shrink-0 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all cursor-pointer text-white/70 hover:text-white hover:bg-white/20"
              >
                {item.label}
              </a>
            );
          })}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="flex-shrink-0 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all ml-1 md:ml-2 font-medium bg-white/10 text-white hover:bg-white/20"
          >
            Contact
          </a>
        </div>

        <div className="w-px h-5 bg-white/20 mx-2 md:mx-3 flex-shrink-0" />

        {/* Say Hi Button */}
        <a href="mailto:Ayanhabib.28s@gmail.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group relative text-xs sm:text-sm rounded-full cursor-pointer flex items-center">
           <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
           <div className="relative flex items-center gap-2 bg-black/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md text-white whitespace-nowrap">
              Say hi <ArrowUpRight className="w-3.5 h-3.5" />
           </div>
        </a>
      </div>
    </motion.nav>
  );
};
