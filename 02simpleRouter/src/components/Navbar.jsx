// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // To use react-router for navigation

const Navbar = () => {
    
    return (
        <nav className="bg-blue-600 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <Link to="/">Home</Link>
                </div>

                <div className="flex space-x-4">
                   
                    <Link to="/userdetails" className="text-white hover:text-gray-300">User Details</Link>
                    <Link to="/productdetails" className="text-white hover:text-gray-300">Product Details</Link>
                    <Link to="/account" className="text-white hover:text-gray-300">Account</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
