    // components/layout/Header.tsx

    import React from 'react';

    const Header: React.FC = () => {
      return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">ALX App</h1>
            {/* Navigation links will go here later */}
          </div>
        </header>
      );
    };

    export default Header;
    