
import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, Layers, ArrowRight } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-transparent border-t border-glass-border relative overflow-hidden">
      {/* Cinematic Background Drifts */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-teal/5 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo/5 blur-[120px] rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <span className="text-teal font-bold text-[10px] uppercase tracking-[0.6em] block mb-4 font-mono">Module: SYSTEM_EXPLORATION</span>
            <h2 className="text-5xl md:text-7xl font-bold text-offwhite italic tracking-tight">Recent Projects</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-slate-500 max-w-sm text-right hidden md:block text-xs font-mono uppercase tracking-[0.3em] leading-loose border-r-[2px] border-teal/20 pr-8"
          >
            Engineering digital architectures at the intersection of AI, IoT, and Cloud scale.
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8, 
                ease: "circOut"
              }}
            >
              <AnimatedCard glowColor={index % 2 === 0 ? 'rgba(0, 240, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)'}>
                <div className="aspect-video bg-navy relative flex items-center justify-center overflow-hidden group">
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal/5 to-transparent h-[10%] w-full top-0 animate-flicker pointer-events-none"></div>
                  
                  {/* Abstract graphic background */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-5 transition-opacity duration-700">
                    <div className="absolute top-0 right-0 w-80 h-80 border-[0.5px] border-teal rounded-full -mr-40 -mt-40 group-hover:scale-150 group-hover:border-teal/50 transition-all duration-[2000ms]"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 border-[0.5px] border-indigo rounded-full -ml-20 -mb-20 group-hover:scale-150 group-hover:border-indigo/50 transition-all duration-[2000ms]"></div>
                  </div>
                  
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative z-10"
                  >
                    <Layers className="text-teal w-20 h-20 group-hover:scale-110 group-hover:text-teal group-hover:drop-shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-500" />
                  </motion.div>
                  
                  <div className="absolute top-8 right-8 z-20">
                    <motion.a 
                      whileHover={{ scale: 1.1, y: -2 }}
                      href={project.link || "#"} 
                      target={project.link ? "_blank" : undefined}
                      rel={project.link ? "noopener noreferrer" : undefined}
                      className="p-4 bg-glass-bg hover:bg-teal hover:text-navy rounded-2xl text-offwhite backdrop-blur-xl border border-glass-border transition-all shadow-2xl flex items-center justify-center group/link"
                    >
                      <ExternalLink size={20} className="group-hover:animate-pulse" />
                    </motion.a>
                  </div>

                  {/* Character Title emergence effect */}
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-navy to-transparent">
                    <div className="text-[10px] font-bold text-teal font-mono uppercase tracking-[0.4em]">system_active</div>
                  </div>
                </div>

                <div className="p-10 relative overflow-hidden group/content">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-glass-bg text-slate-500 text-[9px] font-bold uppercase tracking-[0.2em] rounded-md border border-glass-border font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-offwhite mb-4 group-hover/content:text-teal transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed font-light">
                    {project.description}
                  </p>
                  <a 
                    href={project.link || "#"} 
                    target={project.link ? "_blank" : undefined}
                    rel={project.link ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center text-xs font-black text-teal hover:translate-x-2 transition-all duration-300 uppercase tracking-[0.3em] font-mono group/btn"
                  >
                    Execute_Detailed_View <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
