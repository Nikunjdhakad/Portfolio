
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Linkedin, Github, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate send
    setTimeout(() => {
      alert('Message sent successfully!');
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-transparent text-offwhite overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in <span className="text-teal">Touch</span></h2>
            <p className="text-slate-400 text-lg mb-12">
              Interested in collaboration or just want to chat about system design and development? 
              Feel free to reach out.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <a href="mailto:nikunjdhakad@gmail.com" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-teal border border-white/10 hover:bg-teal hover:text-navy transition-all">
                  <Mail size={20} />
                </a>
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Email</div>
                  <a href="mailto:nikunjdhakad@gmail.com" className="text-lg font-medium hover:text-teal transition-colors">nikunjdhakad@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-teal border border-white/10">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Location</div>
                  <div className="text-lg font-medium">Indore, India</div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-white/10 flex gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl hover:bg-teal hover:text-navy transition-all duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl hover:bg-teal hover:text-navy transition-all duration-300">
                <Github size={24} />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 text-offwhite border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 px-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all text-offwhite placeholder:text-slate-600"
                  placeholder="Nikunj Dhakad"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 px-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all text-offwhite placeholder:text-slate-600"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 px-2">Your Message</label>
                <textarea
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all text-offwhite min-h-[150px] resize-none placeholder:text-slate-600"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-teal text-navy font-bold rounded-2xl hover:bg-teal-dark shadow-xl shadow-teal/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Transmit Message'}
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-navy via-teal to-maroon opacity-50"></div>
    </section>
  );
};
