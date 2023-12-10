import React, { useEffect, useRef } from 'react';

const SmokeCanvasAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        const numParticles = 20;
        const particles: any = [];
        if (canvas) {
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * (canvas?.width || 0),
                    y: Math.random() * (canvas?.height || 0),
                    size: Math.random() * 20 + 10,
                    opacity: Math.random() * 0.5 + 0.2,
                    velocityX: Math.random() * 2 - 1,
                    velocityY: Math.random() * 2 - 1,
                });
            }

            const animate = () => {
                ctx?.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0);

                particles.forEach((particle: any) => {
                    if (ctx) {
                        ctx.beginPath();
                        ctx.arc(
                            particle.x,
                            particle.y,
                            particle.size,
                            0,
                            Math.PI * 2
                        );
                        ctx.fillStyle = `rgba(128, 128, 128, ${particle.opacity})`;
                        ctx.fill();
                    }

                    particle.x += particle.velocityX;
                    particle.y += particle.velocityY;
                    if (
                        particle.x < 0 ||
                        particle.x > canvas?.width ||
                        particle.y < 0 ||
                        particle.y > canvas?.height
                    ) {
                        particle.x = Math.random() * canvas?.width;
                        particle.y = Math.random() * canvas?.height;
                    }
                });

                requestAnimationFrame(animate);
            };

            animate();
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={'300px'}
            height={'400px'}
            style={{ background: 'rgba(255, 255, 255, 0.01)' }}></canvas>
    );
};

export default SmokeCanvasAnimation;
