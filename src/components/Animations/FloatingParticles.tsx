import React, { useEffect, useRef } from 'react';
import { useChakra } from '../../ui/useChakra';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  update: () => void;
}

const createParticle = (width: number, height: number, radius: number): Particle => {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius,
    speedX: (Math.random() - 0.5) * 1,
    speedY: (Math.random() - 0.5) * 1,
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < this.radius || this.x > width - this.radius) this.speedX *= -1;
      if (this.y < this.radius || this.y > height - this.radius) this.speedY *= -1;
    },
  };
};

interface FloatingParticlesProps {
  width: number;
  height: number;
  particleCount: number;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({ width, height, particleCount }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { effectColor  } = useChakra();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    let animationFrameId: number;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(width, height, 2));
    }

    const render = () => {
      context.clearRect(0, 0, width, height);
      context.filter = 'blur(2px)';

      particles.forEach(particle => {
        particle.update();
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = effectColor;
        context.fill();
      });
      context.filter = 'none';

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [width, height, particleCount]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};
