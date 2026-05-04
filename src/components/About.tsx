
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-offwhite mb-6">
              About <span className="text-teal">Me</span>
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
              <p>
                I am a passionate explorer of technical systems based in <a href="https://www.google.com/maps/place/Indore,+Madhya+Pradesh" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline decoration-teal/30 underline-offset-4 transition-all">Indore</a>, India. 
                Currently pursuing my B.Tech in <span className="text-offwhite font-medium">Computer Science & Engineering</span>, I focus on 
                creating <span className="text-teal/90">robust full-stack applications</span> and intuitive UI/UX experiences.
              </p>
              <p>
                I have experience working with <span className="text-teal/90 font-medium">frontend technologies like React and Tailwind CSS</span>, and 
                I am gradually expanding into <span className="text-indigo/80 font-medium italic underline underline-offset-4 decoration-indigo/20">backend development and system design</span>. Beyond coding, I am
                interested in learning how real-world systems work, including DevOps and deployment processes. 
                I believe in continuous learning and building <span className="text-teal/90 font-medium">projects that actually matter</span>.
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="bg-navy-light/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
              {/* Technical Header */}
              <div className="flex justify-between items-center mb-10 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal/10 rounded-lg">
                    <Terminal size={20} className="text-teal animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-offwhite tracking-tight">Technical Arsenal</h3>
                    <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">system_expertise.v1</div>
                  </div>
                </div>
                <div className="flex gap-1.5 grayscale opacity-30">
                  <div className="w-2 h-2 rounded-full bg-indigo"></div>
                  <div className="w-2 h-2 rounded-full bg-teal"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {SKILLS.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.6, ease: "backOut" }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`p-5 rounded-2xl border transition-all duration-500 group/skill cursor-default shadow-xl relative overflow-hidden backdrop-blur-sm
                      ${skill.category === 'Backend' 
                        ? 'bg-indigo/5 border-indigo/20 hover:border-indigo/50 hover:bg-indigo/10' 
                        : 'bg-glass-bg border-glass-border hover:border-teal/30 hover:bg-teal/[0.02]'}`}
                  >
                    {/* Background Shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex items-center mb-4 relative z-10">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg
                        ${skill.category === 'Backend' 
                          ? 'bg-indigo/20 text-indigo group-hover/skill:bg-indigo group-hover/skill:text-white' 
                          : 'bg-teal/10 text-teal group-hover/skill:bg-teal group-hover/skill:text-navy'}`}
                      >
                        <Code2 size={18} />
                      </div>
                      <div className="flex-1 ml-4">
                        <div className="flex items-center gap-2">
                          <div className="text-sm font-bold text-offwhite group-hover/skill:text-teal transition-colors tracking-tight slashed-zero">
                            {skill.name}
                          </div>
                          {skill.category === 'Backend' && (
                            <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-indigo/20 text-indigo border border-indigo/30 font-black uppercase tracking-tighter animate-pulse">
                              Learning
                            </span>
                          )}
                        </div>
                        <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold font-mono mt-0.5">
                          {skill.category}
                        </div>
                      </div>
                    </div>
                    
                    {/* Skill Progress Indicator (Aesthetic) */}
                    <div className="h-1 w-full bg-slate-400/10 rounded-full overflow-hidden relative z-10">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.category === 'Backend' ? '45%' : '85%' }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5,
                          delay: 0.5 + (index * 0.1),
                          ease: "circOut"
                        }}
                        className={`h-full rounded-full transition-all duration-1000
                          ${skill.category === 'Backend' 
                            ? 'bg-indigo shadow-[0_0_8px_rgba(99,102,241,0.5)]' 
                            : 'bg-teal shadow-[0_0_8px_rgba(0,240,255,0.5)]'}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Status footer for grid */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-40">
                <div className="text-[9px] font-mono uppercase tracking-[0.2em]">Hardware_Sync: OK</div>
                <div className="text-[9px] font-mono uppercase tracking-[0.2em]">0 errors detected</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
