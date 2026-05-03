
import { motion } from 'motion/react';
import { Cpu } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-16 bg-navy border-t border-white/5 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-teal/10 rounded-xl border border-teal/30 flex items-center justify-center">
              <Cpu className="text-teal w-6 h-6" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo rounded-full border-2 border-navy" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-lg font-bold tracking-tight text-offwhite leading-none">
              Nikunj <span className="text-teal font-black">Dhakad</span>
            </span>
          </div>
        </div>
        <div className="text-sm text-slate-500 font-medium">
          © {new Date().getFullYear()} Nikunj Dhakad. Built with React & Tailwind.
        </div>
        <div className="flex gap-8">
          <a href="#home" className="text-xs uppercase tracking-widest font-bold text-slate-500 hover:text-teal transition-colors">Home</a>
          <a href="#about" className="text-xs uppercase tracking-widest font-bold text-slate-500 hover:text-teal transition-colors">About</a>
          <a href="#contact" className="text-xs uppercase tracking-widest font-bold text-slate-500 hover:text-teal transition-colors">Contact</a>
        </div>
      </motion.div>
    </footer>
  );
};
