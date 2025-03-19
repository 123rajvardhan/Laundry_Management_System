import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaRegSmile, FaQuestionCircle, FaHandsHelping, FaLeaf, FaCheckCircle } from "react-icons/fa";
import p2 from '../assets/p2.avif';
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="relative w-full  flex flex-col items-center justify-center bg-gray-100 py-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={p2}
          alt="Laundry Background"
          className="w-full h-350 object-cover blur-md brightness-75"
        />
      </div>

      {/* Main About Card */}
      <motion.div
        className="relative bg-white p-12 rounded-3xl shadow-2xl max-w-4xl text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)" }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-gray-900 drop-shadow-lg">
          About <span className="text-blue-600">SparkleWash</span>
        </h1>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Where we blend modern convenience with traditional care. Our journey
          began with a simple mission: to provide exceptional laundry services
          that cater to the unique needs of each customer.
        </p>

        {/* CTA Button */}
        <motion.button
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          Browse Services
        </motion.button>
      </motion.div>

      {/* Additional Sections with Large Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-16 w-[85%]">
        {/* Card 1 - Our Mission */}
        <motion.div
          className="bg-white p-10 rounded-2xl shadow-lg text-center flex flex-col items-center"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        >
          <FaRocket className="text-blue-600 text-6xl mb-4" />
          <h2 className="text-3xl font-bold text-blue-600">Our Mission</h2>
          <p className="text-gray-700 mt-3 text-lg">
            To make laundry stress-free, efficient, and affordable while maintaining high-quality standards in every wash.
          </p>
        </motion.div>

        {/* Card 2 - Our Vision */}
        <motion.div
          className="bg-white p-10 rounded-2xl shadow-lg text-center flex flex-col items-center"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        >
          <FaHandsHelping className="text-blue-600 text-6xl mb-4" />
          <h2 className="text-3xl font-bold text-blue-600">Our Vision</h2>
          <p className="text-gray-700 mt-3 text-lg">
            To be the most trusted name in the laundry industry, ensuring cleanliness, freshness, and convenience for all our customers.
          </p>
        </motion.div>

        {/* Card 3 - Customer Satisfaction */}
        <motion.div
          className="bg-white p-10 rounded-2xl shadow-lg text-center flex flex-col items-center"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        >
          <FaRegSmile className="text-blue-600 text-6xl mb-4" />
          <h2 className="text-3xl font-bold text-blue-600">Customer Satisfaction</h2>
          <p className="text-gray-700 mt-3 text-lg">
            Your satisfaction is our top priority. We ensure every order is handled with care and precision.
          </p>
        </motion.div>

        {/* Card 4 - FAQs */}
        <motion.div
          className="bg-white p-10 rounded-2xl shadow-lg text-center flex flex-col items-center"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        >
          <FaQuestionCircle className="text-blue-600 text-6xl mb-4" />
          <h2 className="text-3xl font-bold text-blue-600">FAQs</h2>
          <p className="text-gray-700 mt-3 text-lg">
            Have questions? We’ve got answers! Check out our frequently asked questions to learn more about our services.
          </p>
        </motion.div>

        {/* New Card 5 - Eco-Friendly Practices */}
        <motion.div
          className="bg-white p-10 rounded-2xl shadow-lg text-center flex flex-col items-center"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        >
          <FaLeaf className="text-green-600 text-6xl mb-4" />
          <h2 className="text-3xl font-bold text-green-600">Eco-Friendly Practices</h2>
          <p className="text-gray-700 mt-3 text-lg">
            We use environmentally friendly detergents and energy-efficient processes to reduce our carbon footprint.
          </p>
        </motion.div>

        {/* New Card 6 - Premium Quality Assurance */}
        <motion.div
          className="bg-white p-10 rounded-2xl shadow-lg text-center flex flex-col items-center"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        >
          <FaCheckCircle className="text-yellow-600 text-6xl mb-4" />
          <h2 className="text-3xl font-bold text-yellow-600">Premium Quality Assurance</h2>
          <p className="text-gray-700 mt-3 text-lg">
            Every item is inspected and handled with care to ensure top-tier quality in every wash and fold.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default About;
