import React from 'react';

type AvatarProps = {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-10 w-10',
    large: 'h-16 w-16',
  };

  return (
    <img
      className={`rounded-full ${sizeClasses[size]}`}
      src={src}
      alt={alt}
      aria-label={alt}
    />
  );
};

export default Avatar;
