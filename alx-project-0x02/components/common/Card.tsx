import React from 'react';
import { UserProps } from '../../interfaces';

const Card: React.FC<UserProps> = ({ image, name, email }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-80 text-center">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
      />
      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default Card;
