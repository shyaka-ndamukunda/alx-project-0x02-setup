import React from 'react';
import { type Post } from '@/interfaces';

const PostCard: React.FC<Post> = ({ title, body }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-80">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default PostCard;
