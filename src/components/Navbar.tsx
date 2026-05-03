
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Code2 } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <div className="w-10 h-10 bg-teal/10 rounded-xl border border-teal/30 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Cpu className="text-teal w-6 h-6" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo rounded-full border-2 border-navy animate-pulse" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-lg font-bold tracking-tight text-offwhite leading-none">
              Nikunj <span className="text-teal font-black">Dhakad</span>
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-300 hover:text-teal transition-colors relative group/nav py-1 px-3"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute bottom-0 left-3 right-3 w-0 h-[2px] bg-teal transition-all duration-300 group-hover/nav:w-[calc(100%-1.5rem)]" />
              <div className="absolute inset-0 bg-teal/5 blur-sm rounded-lg opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-offwhite hover:text-teal transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-4">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-bold text-white hover:text-teal transition-all border-l-4 border-transparent hover:border-teal pl-6 hover:pl-8 py-2 relative group/mobile-nav"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal/10 to-transparent opacity-0 group-hover/mobile-nav:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
