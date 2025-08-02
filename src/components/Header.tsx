import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Enterprise App</h1>
      <nav aria-label="Main navigation">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/profile" className="hover:underline">Profile</a></li>
          <li><a href="/admin" className="hover:underline">Admin</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;