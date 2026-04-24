
import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { Code2, Terminal } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative spinning ring of dots like in the video */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -right-20 top-20 w-80 h-80 border border-white/5 rounded-full pointer-events-none opacity-20 hidden lg:block"
      >
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-teal rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 30}deg) translate(160px)`
            }}
          />
        ))}
      </motion.div>

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
                I am a passionate explorer of technical systems based in Indore, India. 
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
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-offwhite">Indore</span>
                <span className="text-sm text-slate-400">Current Base</span>
              </div>
              <div className="w-[1px] bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-offwhite">B.Tech</span>
                <span className="text-sm text-slate-400">CSE Specialization</span>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-offwhite mb-8 flex items-center gap-2">
              <Terminal size={20} className="text-teal" />
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center p-4 bg-white/5 rounded-xl shadow-sm border border-white/10 hover:border-teal/50 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal/20 flex items-center justify-center text-teal mr-4 group-hover:bg-teal group-hover:text-white transition-colors">
                    <Code2 size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-offwhite">{skill.name}</div>
                    <div className="text-[10px] uppercase tracking-wider text-teal font-semibold opacity-70">
                      {skill.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
