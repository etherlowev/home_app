import React, { useState, FC } from "react";

interface HoverButtonProps {
  onClick?: () => void;
}

const HoverButton: FC<HoverButtonProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "#3D89BB" : "#007bff", // default color or hover color
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick} // attach the onClick handler here
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Отправить обращение
    </button>
  );
};

export default HoverButton;
