
import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { Award, Calendar, Users } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-offwhite mb-4">Leadership & <span className="text-teal">Community</span></h2>
          <div className="w-20 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AnimatedCard className="p-10 bg-white/[0.03] backdrop-blur-xl flex flex-col items-start border-white/10" glowColor="rgba(0, 240, 255, 0.1)">
                <div className="w-14 h-14 bg-white/5 rounded-2xl shadow-sm flex items-center justify-center text-teal border border-white/10 mb-8 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                  {index === 0 ? <Users size={28} /> : <Award size={28} />}
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-maroon uppercase tracking-widest mb-4">
                  <Calendar size={14} />
                  Recent Highlight
                </div>
                <h3 className="text-2xl font-bold text-offwhite mb-4 leading-tight group-hover:text-teal transition-colors">
                  {exp.title}
                </h3>
                <div className="text-teal font-bold text-sm mb-6 pb-2 border-b-2 border-teal/10">
                  Role: {exp.role}
                </div>
                <p className="text-slate-400 leading-relaxed italic">
                  "{exp.description}"
                </p>
                
                {/* Architectural Accent */}
                <div className="absolute top-4 right-4 text-white/5 text-6xl font-black select-none pointer-events-none">
                  0{index + 1}
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
