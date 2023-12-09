import React, { useState } from 'react';
import './GlassButton.css'; 

interface GlassButtonProps {
  text: string;
  onClick: () => void;
}

const GlassButton: React.FC<GlassButtonProps> = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => {
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 300); 
  };

  return (
    <button
      className={`glass-button ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default GlassButton;