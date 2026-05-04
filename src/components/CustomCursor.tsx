
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const CustomCursor = () => {
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text' | 'card'>('default');
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth movement springs
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable custom cursor logic on devices that don't support hover (mobile)
    if (!window.matchMedia('(hover: hover)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      if (!target) return;

      // Determine cursor type based on element
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('cursor-pointer')
      ) {
        setCursorType('pointer');
      } else if (
        target.closest('p') || 
        target.closest('span') || 
        target.closest('h1') || 
        target.closest('h2') || 
        target.closest('h3')
      ) {
        setCursorType('text');
      } else if (target.closest('[data-cursor="card"]')) {
        setCursorType('card');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: 'rgba(20, 184, 166, 0.4)', // Teal/40
      border: '1px solid rgba(20, 184, 166, 0.6)',
      borderRadius: '50%',
    },
    pointer: {
      width: 64,
      height: 64,
      backgroundColor: 'rgba(20, 184, 166, 0.1)',
      border: '2px solid rgba(20, 184, 166, 0.5)',
      borderRadius: '50%',
    },
    text: {
      width: 4,
      height: 24,
      backgroundColor: 'rgba(20, 184, 166, 0.8)',
      borderRadius: '2px',
      border: 'none',
    },
    card: {
      width: 100,
      height: 100,
      backgroundColor: 'rgba(20, 184, 166, 0.05)',
      border: '1px dashed rgba(20, 184, 166, 0.3)',
      borderRadius: '20px',
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        x: '-50%',
        y: '-50%',
      }}
      animate={variants[cursorType]}
      transition={{ type: 'spring', damping: 20, stiffness: 150 }}
    >
      {cursorType === 'pointer' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-1 h-1 bg-teal rounded-full" />
        </motion.div>
      )}
    </motion.div>
  );
};
