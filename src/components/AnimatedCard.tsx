import React, { useState } from 'react';
import { motion } from 'motion/react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'rgba(217, 70, 239, 0.3)' 
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`relative group rounded-[2.5rem] overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow Following Mouse */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent)`,
        }}
      />

      {/* Animated Border Tracing (Simulation with white border and gradient) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `conic-gradient(from 0deg at ${mousePos.x}px ${mousePos.y}px, transparent 0deg, white 20deg, transparent 40deg)`
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};
