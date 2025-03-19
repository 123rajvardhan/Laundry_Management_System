import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTshirt, FaHandsWash, FaSteam } from "react-icons/fa";

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceType) => {
    navigate(`/service-category/${serviceType}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-blue-100">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Our Comprehensive Laundry Services
      </h2>
      <p className="text-center max-w-2xl mb-8 text-gray-600">
        Discover a variety of services tailored to meet all your laundry needs. From traditional washing and drying to specialized garment care, SparkleWash has got you covered.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center cursor-pointer"
          onClick={() => handleServiceClick("Dry Cleaning")}
        >
          <FaTshirt className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold">Dry Cleaning</h3>
          <p className="text-center text-gray-600 mt-2">
            Expert dry cleaning for your delicate fabrics and special-occasion wear, using eco-friendly methods and careful attention to detail.
          </p>
        </div>

        <div
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center cursor-pointer"
          onClick={() => handleServiceClick("Wash & Fold")}
        >
          <FaHandsWash className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold">Wash & Fold</h3>
          <p className="text-center text-gray-600 mt-2">
            Convenient wash and fold service for your everyday laundry. We handle your garments with the utmost care, returning them clean, folded, and ready for use.
          </p>
        </div>
      </div>

      <div className="mt-6 w-full max-w-md">
        <div
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center cursor-pointer"
          onClick={() => handleServiceClick("Ironing Services")}
        >
          <FaSteam className="text-4xl text-red-500 mb-4" />
          <h3 className="text-xl font-semibold">Ironing Services</h3>
          <p className="text-center text-gray-600 mt-2">
            Professional ironing services to give your clothes a crisp, wrinkle-free appearance. Perfect for your business attire and casual wear.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
