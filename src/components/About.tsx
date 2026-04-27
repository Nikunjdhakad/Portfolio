
import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { Code2, Terminal } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-offwhite mb-6">
              About <span className="text-teal">Me</span>
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
              <p>
                I am a passionate explorer of technical systems based in <a href="https://www.google.com/maps/place/Indore,+Madhya+Pradesh" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline decoration-teal/30 underline-offset-4 transition-all">Indore</a>, India. 
                Currently pursuing my B.Tech in Computer Science & Engineering, I focus on 
                creating robust full-stack applications and intuitive UI/UX experiences.
              </p>
              <p>
                My journey is driven by a curiosity for how complex systems integrate—from 
                web architectures to IoT ecosystems. Beyond coding, I am deeply involved in 
                the tech community, organizing workshops and events that bridge the gap 
                between emerging technologies and practical implementation.
              </p>
            </div>
            
            <div className="mt-10 flex gap-6">
              <a 
                href="https://www.google.com/maps/place/Indore,+Madhya+Pradesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col group/loc"
              >
                <span className="text-2xl font-bold text-offwhite group-hover/loc:text-teal transition-colors">Indore</span>
                <span className="text-sm text-slate-400">Current Base</span>
              </a>
              <div className="w-[1px] bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-offwhite">B.Tech</span>
                <span className="text-sm text-slate-400">CSE Specialization</span>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            <div className="bg-navy-light/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
              {/* Animated Scanline Effect */}
              <motion.div 
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-teal/20 to-transparent z-0 pointer-events-none"
              />

              <div className="flex justify-between items-center mb-10 relative z-10">
                <h3 className="text-xl font-bold text-offwhite flex items-center gap-3">
                  <div className="p-2 bg-teal/10 rounded-lg">
                    <Terminal size={20} className="text-teal" />
                  </div>
                  Technical Arsenal
                </h3>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-maroon/40 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-teal/40"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {SKILLS.map((skill, index) => {
                  // Pseudo-random but consistent expertise bar
                  const level = (skill.name.length * 7) % 30 + 70;
                  
                  return (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="p-4 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-teal/30 hover:bg-teal/[0.02] transition-all duration-300 group/skill cursor-default"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-teal mr-4 group-hover/skill:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
                          <Code2 size={16} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-offwhite group-hover/skill:text-teal transition-colors">{skill.name}</div>
                          <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                            {skill.category}
                          </div>
                        </div>
                      </div>
                      
                      {/* Skill "Power" Bar */}
                      <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (0.1 * index) }}
                          className="h-full bg-gradient-to-r from-teal/40 to-teal"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Status indicators for a more "active" look */}
            <div className="mt-6 flex flex-wrap gap-4 px-4">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-teal rounded-full animate-ping"></span>
                System Active
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-maroon rounded-full"></span>
                Uptime: 99.9%
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
