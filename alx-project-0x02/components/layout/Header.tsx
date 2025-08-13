import Link from 'next/link';
import { type HeaderProps } from '@/interfaces';
import React from 'react';

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/home" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
