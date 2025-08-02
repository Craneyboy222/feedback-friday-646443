import React from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal' }) => {
  return (
    <div
      className={
        orientation === 'horizontal'
          ? 'border-t border-gray-300'
          : 'border-l border-gray-300 h-full'
      }
      role="separator"
    ></div>
  );
};

export default Divider;