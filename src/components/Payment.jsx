import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { loadRazorpay } from "./Razorpay";

function Payment() {
  const { totalAmount } = useParams();

  const handlePayment = async () => {
    try {
      const res = await loadRazorpay();
      if (!res) {
        alert("Razorpay SDK failed to load. Check your internet connection.");
        return;
      }
  
      const options = {
        key: "your_razorpay_key", // Replace with actual key
        amount: Number(totalAmount) * 100,
        currency: "INR",
        name: "Your Company Name",
        description: "Payment for your order",
        image: "your_logo_url", // Optional
        handler: function (response) {
          alert("Payment successful: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "User Name",
          email: "user@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      console.log("Razorpay Options: ", options);
      
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment Error: ", error);
      alert("Something went wrong! Check console for details.");
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-purple-900 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-8 relative overflow-hidden border border-white/20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl" />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Payment Gateway</h2>
          <p className="text-white text-lg mb-6">Total: <span className="font-bold">₹{totalAmount}</span></p>
          <button
            onClick={handlePayment}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
          >
            Pay with Razorpay
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Payment;

// razorpay.js (Create this file in the same folder)
