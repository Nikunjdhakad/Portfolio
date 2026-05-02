
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
  type: 'star' | 'leaf';
  rotation: number;
  rotationSpeed: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const scrollOffset = useRef(0);

    const lastMouse = useRef({ x: 0, y: 0 });
    const lastScroll = useRef(0);
    const activity = useRef(0); // 0 to 1

    useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;

    const initParticles = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const particleCount = window.innerWidth < 768 ? 150 : 400;
      particles.current = [];
      
      const colors = ['#00F0FF', '#ffffff', '#6366F1'];
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.current.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 5,
          vy: (Math.random() - 0.5) * 5,
          size: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.4 + 0.1,
          type: Math.random() > 0.8 ? 'leaf' : 'star',
          rotation: Math.random() * Math.PI,
          rotationSpeed: (Math.random() - 0.5) * 0.05
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dx = Math.max(-10, Math.min(10, e.clientX - lastMouse.current.x));
      const dy = Math.max(-10, Math.min(10, e.clientY - lastMouse.current.y));
      
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      lastMouse.current = { x: e.clientX, y: e.clientY };
      
      activity.current = Math.min(activity.current + 0.15, 1);

      particles.current.forEach(p => {
        const distDx = p.x - e.clientX;
        const distDy = p.y - e.clientY;
        const distSq = distDx * distDx + distDy * distDy;
        const radius = 250;
        
        if (distSq < radius * radius) {
          const dist = Math.sqrt(distSq);
          const power = (radius - dist) / radius;
          p.vx += dx * power * 0.08;
          p.vy += dy * power * 0.08;
        }
      });
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const dy = Math.max(-20, Math.min(20, currentScroll - lastScroll.current));
      lastScroll.current = currentScroll;
      scrollOffset.current = currentScroll;
      
      activity.current = Math.min(activity.current + 0.1, 1);

      particles.current.forEach(p => {
        p.vy -= dy * 0.03;
      });
    };

    window.addEventListener('resize', initParticles);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    initParticles();

    const draw = () => {
      ctx.fillStyle = '#05060A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      activity.current *= 0.98; // Fade activity

      particles.current.forEach(p => {
        // Apply velocity with activity damping
        p.x += p.vx * activity.current;
        p.y += p.vy * activity.current;
        p.rotation += p.rotationSpeed * activity.current;

        // Friction
        p.vx *= 0.96;
        p.vy *= 0.96;

        // Wrap
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;

        if (p.type === 'star') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 2, p.size / 2, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
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
