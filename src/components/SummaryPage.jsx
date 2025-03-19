import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SummaryPage = () => {
    const [showOrderPage, setShowOrderPage] = useState(false);
    const {jeansQuen,shirtsQuen,pantsQuen,jacketsQuen} = useParams()
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        primaryAddress: "",
        alternateAddress: "",
        contactNumber: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const totalClothes =parseInt(jacketsQuen)+parseInt(shirtsQuen)+parseInt(pantsQuen)+parseInt(jacketsQuen);
    const costPerCloth = 10; // Example cost per cloth
    const totalCost = totalClothes * costPerCloth;
    const navigate=useNavigate()
    useEffect(() => {
        axios.get("http://localhost:5000/user-details")
            .then(response => setUserDetails(response.data))
            .catch(error => console.error("Error fetching user details", error));
    }, []);

    const handleOrderSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const orderData = {
            quantities,
            totalClothes,
            totalCost,
            userDetails
        };

        try {
            await axios.post("http://localhost:5000/order", orderData);
            alert("Order placed successfully!");
            setShowOrderPage(false);
        } catch (err) {
            setError("Failed to place order. Please try again.");
            console.error("Order submission error:", err);
        } finally {
            setLoading(false);
        }
    };
    const handlePayment = ()=>{
        navigate(`/payment/${totalCost}`)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md w-96">
                {showOrderPage ? (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-4 ">Order Details</h2>
                        <form className="space-y-4" onSubmit={handleOrderSubmit}>
                            {error && <p className="text-red-500 text-center">{error}</p>}
                            <div>
                                <label className="block font-medium">Name:</label>
                                <input
                                    type="text"
                                    value={userDetails.name}
                                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                     className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Email:</label>
                                <input
                                    type="email"
                                    value={userDetails.email}
                                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                     className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Primary Address:</label>
                                <textarea
                                    value={userDetails.primaryAddress}
                                    onChange={(e) => setUserDetails({ ...userDetails, primaryAddress: e.target.value })}
                                     className="w-full p-2 border rounded-md"
                                ></textarea>
                            </div>
                            <div>
                                <label className="block font-medium">Alternate Address (Optional):</label>
                                <textarea
                                    value={userDetails.alternateAddress}
                                    onChange={(e) => setUserDetails({ ...userDetails, alternateAddress: e.target.value })}
                                    className="w-full p-2 border rounded-md"
                                ></textarea>
                            </div>
                            <div>
                                <label className="block font-medium">Contact Number:</label>
                                <input
                                    type="tel"
                                    value={userDetails.contactNumber}
                                    onChange={(e) => setUserDetails({ ...userDetails, contactNumber: e.target.value })}
                                     className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="p-3 bg-blue-100 text-center font-semibold rounded-md">
                                Total Cost: ₹{totalCost}
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-green-500 text-white py-2 rounded-md shadow-md hover:bg-green-600"
                                onClick={handlePayment}
                            >
                                {loading ? "Processing..." : "Confirm Order"}
                            </button>
                        </form>
                        <button onClick={() => setShowOrderPage(false)} className="mt-2 w-full bg-gray-500 text-white py-2 rounded-md shadow-md hover:bg-gray-600">
                            Back
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-center mb-4">Order Summary</h2>
                        <div className="space-y-2">
                            {[
                                {
                                    category:"jens",
                                    qunatity:jeansQuen
                                },
                                {
                                    category:"Jacket",
                                    qunatity:jacketsQuen
                                },
                                {
                                    category:"Pant",
                                    qunatity:pantsQuen
                                },
                                {
                                    category:"Shirt",
                                    qunatity:shirtsQuen
                                }
                            ].map((items,index) => (
                                <div key={index} className="flex justify-between bg-gray-100 p-3 rounded-md shadow-sm">
                                    <span className="font-medium">{items.category}</span>
                                    <span className="font-semibold">{items.qunatity}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 p-3 bg-blue-100 text-center font-semibold rounded-md">
                            Total Clothes: {totalClothes}
                        </div>
                        <button onClick={() => setShowOrderPage(true)} className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600">
                            Proceed to Order
                        </button>
                        <button  className="mt-2 w-full bg-gray-500 text-white py-2 rounded-md shadow-md hover:bg-gray-600">
                            Back to Services
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default SummaryPage;
