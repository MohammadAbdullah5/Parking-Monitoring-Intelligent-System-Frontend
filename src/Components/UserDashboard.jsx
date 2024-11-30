import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const [cars, setCars] = useState([]);
    const { user } = useSelector((state) => state.user);
    const location = useLocation();
    const navigate = useNavigate();
    const currentUser = location.state?.user;

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.post('https://aiparkingsystem-0ihqbt7l.b4a.run/api/v1/users/getCars', {
                    id: currentUser?._id,
                });
                setCars(response.data.data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };
        fetchCars();
    }, []);

    const handleVehicleClick = async (plate) => {
        try {
            // Sending request to the vehicle details API
            console.log(plate)
            const response = await axios.get(`https://aiparkingsystem-0ihqbt7l.b4a.run/api/v1/users/vehicle-details/${plate}`)
            navigate('/vehicleDetails', { state: { carDetails: response.data } });
        } catch (error) {
            console.error('Error fetching vehicle details:', error);
            alert('Error fetching vehicle details');
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">User's Cars</h1>
            <table className="w-full table-auto border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-indigo-600 text-white">
                        <th className="py-2 px-4 border border-gray-300">Plate Number</th>
                        <th className="py-2 px-4 border border-gray-300">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.length > 0 ? (
                        cars.map((car) => (
                            <tr
                                key={car.id}
                                className="hover:bg-gray-100 transition-colors"
                            >
                                <td className="py-2 px-4 border border-gray-300 text-center">{car.licensePlate}</td>
                                <td className="py-2 px-4 border border-gray-300 text-center">
                                    <button
                                        className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600 transition-all"
                                        onClick={() => handleVehicleClick(car.licensePlate)}
                                    >
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="2"
                                className="py-4 px-4 text-center text-gray-500"
                            >
                                No cars found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserDashboard;
