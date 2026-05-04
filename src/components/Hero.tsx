
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
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "circOut" }}
            >
              <h1 className="text-5xl md:text-8xl font-bold text-offwhite mb-10 tracking-tighter uppercase leading-[0.9]">
                <div className="overflow-hidden mb-2">
                  <motion.span 
                    initial={{ y: "100%", skewY: 10 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="block relative py-2"
                  >
                    Building modern
                    <motion.div 
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                      className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-teal/10 to-transparent skew-x-[-25deg] pointer-events-none"
                    />
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%", skewY: 10 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="block text-teal italic drop-shadow-[0_0_20px_rgba(0,240,255,0.25)] text-[0.75em] py-2 pr-4 normal-case"
                  >
                    web applications with intelligent design.
                  </motion.span>
                </div>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
              className="text-lg md:text-2xl text-slate-400 mb-12 leading-relaxed font-light max-w-2xl border-l-[2px] border-teal/30 pl-8"
            >
              Computer Science student focused on building <span className="text-teal/90 font-medium uppercase tracking-[0.15em] text-[0.65em] md:text-[0.6em] align-middle mb-1 inline-block">modern web applications</span> with <span className="text-offwhite font-semibold">clean UI</span> and <span className="text-indigo/80 font-medium italic">scalable backend systems</span>. <br className="hidden md:block" /> Currently developing full-stack skills through real-world projects.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-6"
          >
            <a 
              href="#projects" 
              className="group px-10 py-5 bg-teal text-navy font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-[#00f7ff] transition-all flex items-center shadow-[0_20px_50px_rgba(0,240,255,0.2)]"
            >
              Explore Manifest
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-10 py-5 bg-glass-bg text-offwhite border border-glass-border hover:bg-teal/10 rounded-2xl transition-all font-bold uppercase tracking-widest text-xs backdrop-blur-md"
            >
              Establish Link
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20 flex gap-8 text-slate-500"
          >
            {[
              { icon: Github, href: "https://github.com/Nikunjdhakad" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/nikunjdhakad" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=nikunjdhakad@gmail.com" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-teal transition-all hover:scale-125 duration-300"
              >
                <social.icon size={22} className="animate-flicker" style={{ animationDelay: `${idx * 0.5}s` }} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};
