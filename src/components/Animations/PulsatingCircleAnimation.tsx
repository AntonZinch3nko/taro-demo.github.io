import React, { useEffect, useRef } from 'react';

const PulsatingCircleAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let radius = 20;
    let growing = true;
    const pulsationSpeed = 0.1; // Управляет скоростью пульсации
    let waveRadius = 0;
    let showWave = false;
    let radiusOpacity = 1;
    let waveOpacity = radiusOpacity / 2; // Второй круг в два раза прозрачнее
    let waveColor = '#36393f'; // Цвет волны

    const animate = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0);

        // Рисуем внешний (пульсирующий) круг
        ctx.beginPath();
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          radius,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = '#36393f'; // Цвет, похожий на цвет Discord
        ctx.fill();

        // Рисуем внутренний круг (волну) только после достижения максимального размера пульсирующего круга
        if (showWave) {
          ctx.globalAlpha = waveOpacity; // Прозрачность волны
          ctx.beginPath();
          ctx.arc(
            canvas.width / 2,
            canvas.height / 2,
            waveRadius,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = waveColor; // Цвет волны
          ctx.fill();
          ctx.globalAlpha = 1; // Сбросить прозрачность
        }

        // Изменяем размер пульсирующего круга
        if (growing) {
          radius += pulsationSpeed;
        } else {
          radius -= pulsationSpeed;
        }

        // Переключаем направление пульсации при достижении определенного радиуса
        if (radius >= 30 || radius <= 20) {
          growing = !growing;
          if (radius >= 30) {
            showWave = true; // Показываем волну, когда достигнут максимальный размер
          }
        }

        // Изменяем размер и прозрачность волны
        if (showWave) {
          waveRadius += pulsationSpeed;
          waveOpacity -= 0.005; // Уменьшаем прозрачность волны медленно
        }

        // Сбрасываем волну и параметры при достижении определенных условий
        if (waveRadius >= 30) {
          waveRadius = 0;
          showWave = false;
          radiusOpacity = 1;
          waveOpacity = radiusOpacity / 2; // Второй круг в два раза прозрачнее
        }
      }

      // Запускаем следующий кадр анимации
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={400}
      style={{ background: 'rgba(255, 255, 255, 0.01)' }}
    ></canvas>
  );
};

export default PulsatingCircleAnimation;