import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, className = '', onClick }) => {
  return (
    <i className={`icon-${name} ${className}`} onClick={onClick} role="img" aria-label={name}></i>
  );
};

export default Icon;