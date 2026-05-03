import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-24 right-4 z-50 p-3 rounded-full bg-navy-light/80 backdrop-blur-md border border-white/10 text-teal shadow-2xl hover:bg-teal hover:text-navy transition-colors duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {theme === 'dark' ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Moon size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Sun size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Tooltip / Label */}
      <span className="absolute right-full mr-4 px-2 py-1 rounded bg-navy-light border border-white/10 text-[10px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {theme === 'dark' ? 'Switch_To_Light' : 'Switch_To_Dark'}
      </span>
    </motion.button>
  );
};
