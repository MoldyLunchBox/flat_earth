import React, { useState } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const scrollToBottom = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end', // Scroll to the bottom of the element
      });
    }
  };
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white font-bold text-lg">
              Mya 
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
            onClick={(e)=>scrollToBottom("home")}
             
              className="cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
            onClick={(e)=>scrollToBottom("getInvolved")}
             
              className="cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Get Involved
            </a>
            <a
            onClick={(e)=>scrollToBottom("crisis")}
             
              className="cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Statistics
            </a>
            <a
            onClick={(e)=>scrollToBottom("contact")}
             
              className="cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              onClick={(e)=>scrollToBottom("home")}
              className="cursor-pointer text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              onClick={(e)=>scrollToBottom("getInvolved")}
              className="cursor-pointer text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Get Involved
            </a>
            <a
              onClick={(e)=>scrollToBottom("crisis")}
              className="cursor-pointer text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Statistics
            </a>
            <a
              onClick={(e)=>scrollToBottom("contact")}
              className="cursor-pointer text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
