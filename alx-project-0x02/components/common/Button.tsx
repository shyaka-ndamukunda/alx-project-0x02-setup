import React, { type FC } from 'react';
import { type ButtonProps } from '@/interfaces';

const Button: FC<ButtonProps> = ({ children, size = 'medium', shape = 'rounded-md', onClick, className = '' }) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-lg': 'rounded-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition-colors ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
