import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      {/* Top Section */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-blue-400">SparkleWash</h1>
          <p className="text-gray-400 mt-2">Your Clothes, Our Care</p>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/" className="text-gray-400 hover:text-blue-400 transition">
            <i className="fab fa-facebook-square text-2xl"></i>
          </a>
          <a href="/" className="text-gray-400 hover:text-pink-500 transition">
            <i className="fab fa-instagram-square text-2xl"></i>
          </a>
          <a href="/" className="text-gray-400 hover:text-blue-300 transition">
            <i className="fab fa-behance-square text-2xl"></i>
          </a>
          <a href="/" className="text-gray-400 hover:text-blue-500 transition">
            <i className="fab fa-twitter-square text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-6 md:px-12 mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-3">Project</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-blue-400 transition">Changelog</a></li>
            <li><a href="/" className="hover:text-blue-400 transition">Status</a></li>
            <li><a href="/" className="hover:text-blue-400 transition">License</a></li>
            <li><a href="/" className="hover:text-blue-400 transition">All Versions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-3">Community</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-blue-400 transition">GitHub</a></li>
            <li><a href="/" className="hover:text-blue-400 transition">Issues</a></li>
            <li><a href="/" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="/" className="hover:text-blue-400 transition">Twitter</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-3">Help</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-blue-400 transition">Support</a></li>
            <li><a href="/" className="hover:text-blue-400 transition">Troubleshooting</a></li>
            <li><a href="/" className="hover:text-blue-400 transition">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-3">Others</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-blue-400 transition">Terms of Service</a></li>
            <li><a href="/" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="/" className="hover:text-blue-400 transition">License</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © 2025 SparkleWash. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
