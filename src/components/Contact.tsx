
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Linkedin, Github, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct Email content
    const subject = encodeURIComponent(`Portfolio Message from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nikunjdhakad@gmail.com&su=${subject}&body=${body}`;
    
    // Open Gmail compose window
    window.open(gmailUrl, '_blank');
    
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-transparent text-offwhite overflow-hidden relative border-t border-glass-border">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-0 opacity-10 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-teal rounded-full blur-[120px] -mr-64 -mt-64"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <span className="text-teal font-bold text-[10px] uppercase tracking-[0.4em] block mb-4 font-mono">Status: AWAITING_INPUT</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter">
              Let's build something <br />
              <span className="text-teal italic">meaningful.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed font-light">
              Interested in collaboration or just want to chat about system design? 
              I'm always open to discussing new projects or creative ideas.
            </p>
            
            <div className="space-y-6">
              {[
                { 
                  icon: Mail, 
                  label: "Electronic_Mail", 
                  value: "nikunjdhakad@gmail.com", 
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=nikunjdhakad@gmail.com" 
                },
                { 
                  icon: MapPin, 
                  label: "Geo_Location", 
                  value: "Indore, India", 
                  href: "https://www.google.com/maps/place/Indore,+Madhya+Pradesh" 
                },
              ].map((item, idx) => (
                <div key={idx} className="group flex items-center gap-6">
                  <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-14 h-14 bg-glass-bg rounded-2xl flex items-center justify-center text-teal border border-glass-border group-hover:border-teal group-hover:bg-teal group-hover:text-navy transition-all duration-300 shadow-lg shadow-teal/5"
                  >
                    <item.icon size={22} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold font-mono mb-1">{item.label}</div>
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg font-medium hover:text-teal transition-colors tracking-tight"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-16 border-t border-glass-border flex gap-5">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/nikunjdhakad" },
                { icon: Github, href: "https://github.com/Nikunjdhakad" },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-glass-bg rounded-2xl hover:bg-teal hover:text-navy transition-all duration-500 border border-glass-border shadow-inner"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-teal/10 via-indigo/10 to-navy-light/10 rounded-[3rem] blur-2xl opacity-50"></div>
            <div className="relative bg-navy-light/60 backdrop-blur-3xl rounded-[3rem] p-10 md:p-14 text-offwhite border border-glass-border shadow-2xl overflow-hidden group transition-colors duration-500">
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-3 px-2 font-mono">input_name_ref</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-6 py-5 bg-navy/40 border border-glass-border rounded-2xl focus:outline-none focus:border-teal transition-all text-offwhite placeholder:text-slate-400/50 shadow-inner"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-3 px-2 font-mono">input_email_ref</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-6 py-5 bg-navy/40 border border-glass-border rounded-2xl focus:outline-none focus:border-teal transition-all text-offwhite placeholder:text-slate-400/50 shadow-inner"
                      placeholder="Enter Gateway Address"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-3 px-2 font-mono">input_payload</label>
                    <textarea
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-6 py-5 bg-navy/40 border border-glass-border rounded-2xl focus:outline-none focus:border-teal transition-all text-offwhite min-h-[160px] resize-none placeholder:text-slate-400/50 shadow-inner"
                      placeholder="Write Communication Message..."
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-teal text-navy font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#00f7ff] shadow-[0_20px_50px_rgba(0,240,255,0.15)] transition-all flex items-center justify-center gap-4 disabled:opacity-50 text-xs"
                >
                  {isSubmitting ? 'Transmitting...' : 'Transmit Signal'}
                  <Send size={18} className="animate-flicker" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-navy via-teal to-indigo opacity-50"></div>
    </section>
  );
};
