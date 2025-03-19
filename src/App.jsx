import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ServiceCategory from "./components/ServiceCategory";
import SummaryPage from "./components/SummaryPage";
import Payment from "./components/Payment";

const App = () => {
  
  return (
    
    <Router>
      
      <div className="p-4">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-category/:serviceType" element={<ServiceCategory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order-category/:jeansQuen/:shirtsQuen/:pantsQuen/:jacketsQuen" element={<SummaryPage/>} />
          <Route path="/payment/:totalAmount" element={<Payment/>} />
        </Routes>

      </div>
      <Footer/>
    </Router>
  );
};

export default App;
