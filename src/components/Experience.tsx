
import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { Award, Calendar, Users } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-transparent border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-offwhite mb-4">Leadership & <span className="text-teal">Community</span></h2>
          <div className="w-20 h-1 bg-indigo mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8, 
                ease: "circOut"
              }}
            >
              <AnimatedCard className="p-10 flex flex-col items-start border-glass-border overflow-hidden" glowColor="rgba(0, 240, 255, 0.15)">
                {/* Decorative Tech Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo/5 rounded-full blur-[60px] pointer-events-none" />
                
                {/* Numbered Index */}
                <div className="absolute top-8 right-10 flex flex-col items-end opacity-20 group-hover:opacity-40 transition-opacity">
                  <span className="text-6xl font-black font-mono leading-none tracking-tighter text-teal">0{index + 1}</span>
                  <div className="w-12 h-px bg-teal mt-2" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full">
                  <div className="w-16 h-16 bg-navy-light border border-glass-border rounded-2xl flex items-center justify-center text-teal mb-8 group-hover:scale-110 group-hover:bg-teal group-hover:text-navy transition-all duration-500 shadow-xl">
                    {index === 0 ? <Users size={32} /> : <Award size={32} />}
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo/10 border border-indigo/20 text-[10px] font-bold text-indigo uppercase tracking-[0.2em] mb-6">
                    <Calendar size={12} className="animate-pulse" />
                    <span>Active Deployment</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-offwhite mb-3 tracking-tight group-hover:text-teal transition-colors">
                    {exp.title}
                  </h3>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-6 bg-teal/40" />
                    <span className="text-teal font-black text-xs uppercase tracking-widest">
                      {exp.role}
                    </span>
                  </div>

                  <p className="text-slate-400 leading-relaxed font-light text-lg mb-8 border-l-2 border-glass-border pl-6 group-hover:border-teal/30 transition-colors">
                    {exp.description}
                  </p>

                  <div className="flex gap-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-teal/30 group-hover:bg-teal transition-colors" style={{ transitionDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-teal rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-teal rounded-br-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4" />
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
