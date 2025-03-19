import React from "react";
import { Clock, Package } from "lucide-react";

const Middle = () => {
  return (
    
    <div className="flex flex-col space-y-16">
      {/* Pickup and Delivery Section */}
      <div className="flex flex-col md:flex-row items-center justify-between  p-8 rounded-2xl shadow-lg">
        {/* Left Side Image */}
        <div className="md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1630961046/photo/man-at-self-service-laundry-stop.jpg?s=612x612&w=0&k=20&c=DW1iBAhORprriRc4B6eDaD6d01lTS_Z6rzBuHWdnHeg="
            alt="Stacked Laundry"
            className="rounded-xl shadow-md hover:scale-105 transition-transform"
          />
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/2 pl-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Seamless Pick-Up and Delivery at
            <span className="text-blue-600"> Your Convenience</span>
          </h2>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <Clock className="text-blue-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Easy Scheduling</h3>
                <p className="text-gray-600">
                  Schedule your laundry pick-up at a time that suits you best.
                  Our flexible scheduling allows you to choose a time slot that
                  works around your busy lifestyle.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <Package className="text-blue-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Contactless Delivery</h3>
                <p className="text-gray-600">
                  Enjoy the safety and convenience of our contactless delivery
                  service. Your laundry will be delivered to your preferred
                  location, ensuring a safe and hassle-free experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex items-center justify-center bg-gray-100 py-10">
  {/* Card Container */}
  <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden w-[90%] md:w-[70%] lg:w-[60%] p-6 md:p-10 flex flex-col items-center text-center">
    
    {/* Background Image */}
    <div className="absolute inset-0 w-full h-full">
      <img
        src="https://cdn.pixabay.com/photo/2019/12/15/04/58/shirts-4696379_1280.jpg"
        alt="Quality Guarantee"
        className="w-full h-full object-cover opacity-20"
      />
    </div>

    {/* Content */}
    <div className="relative z-10">
      {/* Badge */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86U7yIWtjlZ0xgYd6JC8udsaamafttX2qGA&s"
        alt="Guaranteed Badge"
        className="w-20 h-20 mx-auto mb-4"
      />

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900">Our Quality Guarantee</h2>

      {/* Description */}
      <p className="text-lg text-gray-700 mt-2 max-w-2xl">
        If you are not 100% satisfied with our quality, we will re-do or
        re-fund free of charge.
      </p>

      {/* CTA Button (Optional) */}
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
        Learn More
      </button>
    </div>
  </div>
</div>

    </div>
    
    
  );
};

export default Middle;
