// components/common/Card.tsx

import React from 'react';
import { type CardProps } from '@/interfaces'; // Changed import to include 'type' keyword

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
};

export default Card;
