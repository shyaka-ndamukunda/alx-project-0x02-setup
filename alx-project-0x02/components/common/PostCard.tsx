import React from 'react';
import { type Post } from '@/interfaces';
import Link from 'next/link';

const PostCard: React.FC<Post> = ({ id, title, body }) => {
  return (
    <Link href={`/posts/${id}`} passHref>
      <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-80 cursor-pointer hover:shadow-xl transition-shadow">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{body.substring(0, 100)}...</p>
      </div>
    </Link>
  );
};

export default PostCard;
