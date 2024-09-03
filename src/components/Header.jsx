import React from "react";
import { FaBars, FaSearch, FaBell, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import pic from "../assets/pic.jpg";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <button
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={toggleSidebar}
        >
          <FaBars className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <div className="flex-1 min-w-0">
          <div className="relative rounded-md shadow-sm">
            <input
              type="text"
              className="form-input w-full sm:text-sm sm:leading-5 pl-10 pr-3 py-2 hidden md:block"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="ml-4 flex items-center space-x-4">
          <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100">
            <FaBell className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100">
            <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <div className="ml-3 flex items-center space-x-2">
            <img className="h-8 w-8 rounded-full" src={pic} alt="Profile" />
            <span className="font-medium text-gray-700 hidden md:block">Aditya Shukla</span>
            <FaChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
