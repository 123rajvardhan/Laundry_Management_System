import React from 'react';
import p4 from '../assets/p4.jpg';

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-10 py-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight animate-fade-in">
            Welcome to <span className="text-blue-600">SparkelWash</span> Laundry Services
          </h1>
          
          <p className="mt-4 font-light text-gray-700 leading-relaxed animate-slide-in">
          We're redefining laundry with convenience and quality at the heart of our service. 
          Experience the ease of premium laundry services right from your doorstep.
          </p>

          <ul className="mt-4 space-y-2 text-gray-800 animate-slide-in">
            <li>✅ Free Pickup & Delivery</li>
            <li>✅ 24-Hour Express Service Available</li>
            <li>✅ High-Quality, Eco-Friendly Cleaning</li>
            <li>✅ Affordable & Transparent Pricing</li>
          </ul>

          <div className="mt-6 flex justify-center md:justify-start space-x-4 animate-fade-in">
            <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Discover More
            </button>
            <button className="px-6 py-3 bg-gray-900 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={p4}
            alt="Laundry Service" 
            className="w-full max-w-lg rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
