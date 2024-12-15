import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const currentUser = useSelector((state) => state.user.currentUser)
  return (
    <nav className="sticky top-0 bg-white shadow-lg z-50 w-full py-3 transition duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold px-3 text-blue-600">UET Parking System</div>
        <div className="hidden md:flex space-x-6">
        {currentUser ? (
              <a href="/" className="block px-4 py-2 text-blue-600 hover:bg-gray-200 transition duration-300 ease-in-out">Home</a>
            ) : (
              <a href="/" className="block px-4 py-2 text-blue-600 hover:bg-gray-200 transition duration-300 ease-in-out">Logout</a>
            )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 rounded focus:outline-none px-4 focus:ring-2 focus:ring-blue-600">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-blue-600 text-xl" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col space-y-2 py-3">
            <a href="/" className="block px-4 py-2 text-blue-600 hover:bg-gray-200 transition duration-300 ease-in-out">Home</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
