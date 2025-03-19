import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const categories = ["Jeans", "Shirts", "Pants", "Jackets"];

const ServiceCategory = () => {
    const navigate=useNavigate()
    const { serviceType } = useParams();
    const [quantities, setQuantities] = useState(
        categories.reduce((acc, category) => ({ ...acc, [category]: 0 }), {})
    );
    const [totalCount, setTotalCount] = useState(0);

    const updateTotalCount = (updatedQuantities) => {
        const newTotal = Object.values(updatedQuantities).reduce((sum, qty) => sum + qty, 0);
        setTotalCount(newTotal);
    };

    const increment = (category) => {
        const updatedQuantities = { ...quantities, [category]: quantities[category] + 1 };
        setQuantities(updatedQuantities);
        updateTotalCount(updatedQuantities);
    };

    const decrement = (category) => {
        const updatedQuantities = { ...quantities, [category]: Math.max(quantities[category] - 1, 0) };
        setQuantities(updatedQuantities);
        updateTotalCount(updatedQuantities);
    };

    const handleSubmit = () => {
        // axios.post("http://localhost:5000/order", { serviceType, quantities })
        //     .then(() => alert("Order submitted successfully!"))
        //     .catch(error => console.error("Error submitting order", error));
        console.log(serviceType,quantities)
        navigate(`/order-category/${quantities.Jeans}/${quantities.Shirts}/${quantities.Pants}/${quantities.Jackets}`)
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-4">{serviceType} Categories</h2>
                <div className="space-y-4">
                    {categories.map(category => (
                        <div key={category} className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm">
                            <span className="text-lg font-medium">{category}</span>
                            <div className="flex items-center">
                                <button onClick={() => decrement(category)} className="bg-blue-500 text-white w-8 h-8 rounded-full">-</button>
                                <span className="px-4">{quantities[category]}</span>
                                <button onClick={() => increment(category)} className="bg-blue-500 text-white w-8 h-8 rounded-full">+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 p-3 bg-blue-100 text-center font-semibold rounded-md">
                    Total Clothes: {totalCount}
                </div>
                <button onClick={handleSubmit} className="mt-4 bg-green-500 text-white w-full py-2 rounded-md shadow-md hover:bg-green-600">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ServiceCategory;
