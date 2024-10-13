import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50 w-full py-3">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to='/'>
          <h1 className="text-xl font-bold">AI</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
