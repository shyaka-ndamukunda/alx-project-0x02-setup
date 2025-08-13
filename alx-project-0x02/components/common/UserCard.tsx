import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-80">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600">Email: {email}</p>
      <div className="text-gray-500 mt-2">
        <p>Address:</p>
        <p>{address.street}, {address.suite}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
