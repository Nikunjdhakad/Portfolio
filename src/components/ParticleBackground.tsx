
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  originX: number;
  originY: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const scrollOffset = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const initParticles = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const particleCount = window.innerWidth < 768 ? 200 : 500;
      particles.current = [];
      
      const colors = ['#00F0FF', '#39FF14', '#ffffff', '#0088A3', '#22C55E'];
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.current.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 1.8,
          vy: (Math.random() - 0.5) * 1.8,
          size: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.2
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };

    const handleScroll = () => {
      scrollOffset.current = window.scrollY;
    };

    window.addEventListener('resize', initParticles);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    initParticles();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const parallax = scrollOffset.current * 0.3;

      particles.current.forEach(p => {
        // Organic float
        p.x += p.vx;
        p.y += p.vy;

        // Effective position with parallax
        const displayY = (p.y - parallax + canvas.height) % canvas.height;

        // Interaction
        if (mouse.current.active) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - displayY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 200) {
            const angle = Math.atan2(dy, dx);
            const force = (200 - dist) / 200;
            
            p.vx -= Math.cos(angle) * force * 0.2;
            p.vy -= Math.sin(angle) * force * 0.2;
          }
        }

        // Return to origin (gentle pull)
        p.vx += (p.originX - p.x) * 0.0001;
        p.vy += (p.originY - p.y) * 0.0001;

        // Friction
        p.vx *= 0.95;
        p.vy *= 0.95;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, displayY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', initParticles);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};
