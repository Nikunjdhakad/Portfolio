import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const HeroDots: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      const isMobile = window.innerWidth < 768;
      const spacing = isMobile ? 50 : 30; // Increase spacing on mobile
      const rows = Math.ceil(canvas.height / spacing);
      const cols = Math.ceil(canvas.width / spacing);

      const dotColor = theme === 'dark' ? '255, 255, 255' : '15, 23, 42';

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * spacing;
          const y = i * spacing;
          
          // Wave logic
          const distX = x - canvas.width / 2;
          const distY = y - canvas.height / 2;
          const dist = Math.sqrt(distX * distX + distY * distY);
          const wave = Math.sin(dist * 0.01 - time * 2) * 2;
          
          ctx.beginPath();
          ctx.arc(x, y + wave, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dotColor}, ${0.1 + Math.sin(time + j * 0.1) * 0.05})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />;
};
