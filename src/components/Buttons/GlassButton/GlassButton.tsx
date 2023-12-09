import React, { ButtonHTMLAttributes, useState } from 'react';
import './GlassButton.css'; 

interface GlassButtonProps {
  text: string;
  onClick?: () => void;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const GlassButton: React.FC<GlassButtonProps> = ({ text, buttonProps, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => {
    setIsClicked(true);
    onClick && onClick();
    setTimeout(() => setIsClicked(false), 300); 
  };

  return (
    <button
      style={{minWidth: "240px"}}
      className={`glass-button ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...buttonProps}
    >
      {text}
    </button>
  );
};

export default GlassButton;