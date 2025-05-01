import { useEffect, useRef } from 'react';

class QuantumParticle {
  x: number;
  y: number;
  baseRadius: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
  originalSpeed: number;

  constructor(x: number, y: number, color: string, speed: number) {
    this.x = x;
    this.y = y;
    this.baseRadius = Math.random() * 2 + 1;
    this.radius = this.baseRadius;
    this.dx = (Math.random() - 0.5) * 2 * speed;
    this.dy = (Math.random() - 0.5) * 2 * speed;
    this.color = color;
    this.originalSpeed = speed;
  }

  update(width: number, height: number, delta = 16) {
    const normalizedDelta = delta / 16;
    this.x += this.dx * normalizedDelta;
    this.y += this.dy * normalizedDelta;

    if (this.x < 0 || this.x > width) {
      this.dx *= -1;
      this.x = Math.max(0, Math.min(width, this.x));
    }
    if (this.y < 0 || this.y > height) {
      this.dy *= -1;
      this.y = Math.max(0, Math.min(height, this.y));
    }
  }

  draw(ctx: CanvasRenderingContext2D, glowIntensity: number) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.shadowBlur = glowIntensity;
    ctx.shadowColor = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

const QuantumParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<QuantumParticle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      const particleCount = 35;
      const particles: QuantumParticle[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(
          new QuantumParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            `hsla(${Math.random() * 60 + 220}, 80%, 60%, 0.6)`,
            0.5
          )
        );
      }
      
      particlesRef.current = particles;
    };

    const drawConnections = (particles: QuantumParticle[], connectionRadius: number) => {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.15)';
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (distance < connectionRadius) {
            const opacity = 1 - (distance / connectionRadius);
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.2})`;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.stroke();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      drawConnections(particlesRef.current, 150);

      // Update and draw particles
      for (const particle of particlesRef.current) {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx, 15);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default QuantumParticles;