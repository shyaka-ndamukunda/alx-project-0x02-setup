import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-80 text-center">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
