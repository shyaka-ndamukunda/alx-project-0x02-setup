    // components/layout/Header.tsx

    import React from 'react';
    import Link from 'next/link'; // Import Link for navigation

    const Header: React.FC = () => {
      return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">ALX App</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:text-blue-200 transition-colors duration-200">
                    Home (Root)
                  </Link>
                </li>
                <li>
                  <Link href="/home" className="hover:text-blue-200 transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-200 transition-colors duration-200">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
    };

    export default Header;
    