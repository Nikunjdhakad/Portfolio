
import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { HeroDots } from './HeroDots';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent">
      {/* Background Dot Wave Pattern */}
      <HeroDots />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-teal uppercase bg-teal/10 rounded-full border border-teal/20">
              Welcome to my portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-offwhite mb-6 leading-tight">
              Hi, I'm <span className="text-teal">Nikunj Dhakad.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed font-light">
              Aspiring Software Developer | B.Tech Computer Science & Engineering
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-teal text-navy font-bold rounded-lg hover:bg-teal-dark transition-all flex items-center shadow-lg shadow-teal/20"
            >
              View Projects
              <ChevronRight className="ml-2" size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/5 text-offwhite border border-white/10 hover:bg-white/10 rounded-lg transition-all font-semibold"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex gap-6 text-slate-500"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nikunjdhakad@gmail.com" className="hover:text-teal transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};
