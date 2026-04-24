
import { Cpu } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-teal/10 rounded-xl border border-teal/30 flex items-center justify-center">
              <Cpu className="text-teal w-6 h-6" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-maroon rounded-full border-2 border-navy" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter text-offwhite leading-none">
              NIKUNJ<span className="text-teal">.</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-teal/60 leading-none">
              DEV_ENGINEER
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
      </div>
    </footer>
  );
};
