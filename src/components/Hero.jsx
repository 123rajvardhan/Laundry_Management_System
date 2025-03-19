import React from 'react';
import p4 from '../assets/p4.jpg'
const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-blue-100 px-10 py-2">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center">
       
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to SparkelWash Laundry Services
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We're redefining laundry with convenience and quality at the heart of our service. 
            Experience the ease of premium laundry services right from your doorstep.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Discover
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img 
            src={p4}
            alt="Laundry Service" 
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
