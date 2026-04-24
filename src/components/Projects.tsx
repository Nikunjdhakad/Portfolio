
import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, Layers, ArrowRight } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-teal font-bold text-xs uppercase tracking-widest block mb-2">Featured Work</span>
            <h2 className="text-4xl font-bold text-offwhite italic serif">Recent Projects</h2>
          </div>
          <div className="text-slate-400 max-w-md text-right hidden md:block">
            Exploring the intersection of AI, IoT, and Web Technologies to build systems that matter.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <AnimatedCard glowColor={index % 2 === 0 ? 'rgba(0, 240, 255, 0.15)' : 'rgba(57, 255, 20, 0.15)'}>
                <div className="aspect-video bg-navy/60 relative p-8 flex items-center justify-center overflow-hidden">
                  {/* Abstract graphic background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 border-2 border-teal rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 border border-maroon rounded-full -ml-16 -mb-16"></div>
                  </div>
                  <Layers className="text-teal w-20 h-20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-6 right-6">
                    <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-offwhite mb-4 group-hover:text-teal transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <a href="#" className="inline-flex items-center text-sm font-bold text-teal hover:gap-3 transition-all duration-300">
                    EXPLORE DETAILS <ArrowRight size={16} className="ml-2" />
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
