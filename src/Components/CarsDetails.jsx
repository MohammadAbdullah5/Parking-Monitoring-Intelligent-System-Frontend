import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CarDetails = () => {
    const [numberPlate, setNumberPlate] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate(); // Initialize navigate

    // Mocked car data for demonstration
    const mockCarData = {
        numberPlate: 'ABC1234',
        userEmail: 'owner@example.com',
        arrivals: [
            { date: '2024-10-20', arrivalTime: '09:00 AM', departureTime: '10:00 AM' },
            { date: '2024-10-19', arrivalTime: '11:00 AM', departureTime: '12:00 PM' },
        ],
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate fetching car data and set it
        // Navigate to the car route after submitting the form
        setIsSubmitted(true);
        navigate("/car-details"); // Navigate to the car route with the number plate
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Enter Car Details</h2>
                
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit}>
                        {/* Number Plate Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="numberPlate">Number Plate</label>
                            <input
                                type="text"
                                id="numberPlate"
                                name="numberPlate"
                                value={numberPlate}
                                onChange={(e) => setNumberPlate(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter Car Number Plate"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter Password"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition duration-300"
                        >
                            Search
                        </button>
                    </form>
                ) : (
                    <div className="mt-6">
                        {/* Optionally, you can show a message here after submission */}
                        <h3 className="text-xl font-bold mb-2">Searching for {numberPlate}...</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CarDetails;
