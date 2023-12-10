import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const PlaceholderImage: React.FC = () => {
  const [rotation] = useSpring(() => ({
    rotation: 360,
    from: { rotation: 0 },
    config: { duration: 1000 },
    reset: true,
    loop: true,
  }));

  const [borderColor, setBorderColor] = useState(getRandomColor());

  const handleColorChange = () => {
    setBorderColor(getRandomColor());
  };

  return (
    <div
      style={{
        margin: '5px',
        borderRadius: '20px',
        width: '300px',
        height: '400px',
        filter: "blur(2px)",
        background: 'rgba(113, 113, 113, 0.2)', // Монотонный фон
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        position: 'relative', // Необходимо для абсолютно позиционированного блика
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={handleColorChange}
      >
        <animated.div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'transparent',
            borderTop: `8px solid ${borderColor}`,
            borderBottom: `8px solid ${borderColor}`,
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderRadius: '50%',
            transform: rotation.rotation.interpolate((r) => `rotate(${r}deg)`),
          }}
        ></animated.div>
      </div>
    </div>
  );
};

export default PlaceholderImage;