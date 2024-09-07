// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-500">
          <Link to="/">MyApp</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link
            to="/signin"
            className="text-gray-600 hover:text-blue-500 font-medium"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="text-gray-600 hover:text-blue-500 font-medium"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
