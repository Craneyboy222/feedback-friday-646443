import React from 'react';
import classNames from 'classnames';

type BadgeProps = {
  text: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
};

const Badge: React.FC<BadgeProps> = ({ text, variant = 'primary' }) => {
  const badgeClass = classNames('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', {
    'bg-indigo-100 text-indigo-800': variant === 'primary',
    'bg-gray-100 text-gray-800': variant === 'secondary',
    'bg-green-100 text-green-800': variant === 'success',
    'bg-red-100 text-red-800': variant === 'danger',
    'bg-yellow-100 text-yellow-800': variant === 'warning',
  });

  return <span className={badgeClass}>{text}</span>;
};

export default Badge;
