import React from "react";
import { FaTshirt, FaHandsWash, FaSteam } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-blue-100">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Our Comprehensive Laundry Services
      </h2>
      <p className="text-center max-w-2xl mb-8 text-gray-600">
        Discover a variety of services tailored to meet all your laundry needs. From traditional washing and drying to specialized garment care, SparkleWash has got you covered.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Link to={`/service-category/${"Dry Cleaning"}`}>
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
        <a href="#" className="cursor-pointer"> <FaTshirt className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold">Dry Cleaning</h3>
          <p className="text-center text-gray-600 mt-2">
            Expert dry cleaning for your delicate fabrics and special-occasion wear, using eco-friendly methods and careful attention to detail.
          </p>
          </a>
        </div>
        </Link>
        <Link to={`/service-category/${"Wash & Fold"}`}>
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
         <a href="#" className="cursor-pointer"> <FaHandsWash className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold">Wash & Fold</h3>
          <p className="text-center text-gray-600 mt-2">
            Convenient wash and fold service for your everyday laundry. We handle your garments with the utmost care, returning them clean, folded, and ready for use.
          </p>
          </a>
        </div>
        </Link>
      </div>
      <Link to={`/service-category/${"Ironing Services"}`}>
      <div className="mt-6 w-full max-w-md">
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
        <a href="#" className="cursor-pointer"> <FaSteam className="text-4xl text-red-500 mb-4" />
          <h3 className="text-xl font-semibold">Ironing Services</h3>
          <p className="text-center text-gray-600 mt-2">
            Professional ironing services to give your clothes a crisp, wrinkle-free appearance. Perfect for your business attire and casual wear.
          </p>
          </a>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Services;
