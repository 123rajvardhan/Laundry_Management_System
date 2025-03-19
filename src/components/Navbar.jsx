import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full h-20 px-6  bg-white-100 text-black shadow-lg flex items-center justify-between">
 
 <div className="flex items-center space-x-3">
        <img src="https://st3.depositphotos.com/30226412/32944/v/450/depositphotos_329445800-stock-illustration-initial-letter-sp-or-ps.jpg" alt="SparkleWash Logo" className="h-10 w-10 rounded-b-full" /> 
        <h1 className="text-2xl font-bold bg-white-400 text-black px-3 py-1 rounded-lg shadow-md">SPARKLEWASH</h1>
      </div>
      <div className="flex space-x-6 text-lg">
        <Link to={"/"} className="hover:underline transition duration-300 transform hover:-translate-y-1">Home</Link>
        <Link to={"/about"} className="hover:underline transition duration-300 transform hover:-translate-y-1">About</Link>
        <Link to={"/services"} className="hover:underline transition duration-300 transform hover:-translate-y-1">Services</Link>
        <Link to="/login" className="hover:underline transition duration-300 transform hover:-translate-y-1">Login</Link>
      </div>

      
      
    </nav>
  );
};

export default Navbar;
