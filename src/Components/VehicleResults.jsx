import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'

const VehicleResults = () => {
  // State to handle the visibility of the popup and selected car data
  const [selectedCar, setSelectedCar] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate
  const [vehicleLogs, setVehicleLogs] = useState([]);
  const location = useLocation();
  console.log(location.state)
  const currentUser = location.state?.user;
  console.log(currentUser);
  const token = currentUser.token;
  // Function to show the popup with the selected car's image
  const handleRowClick = (car) => {
    setSelectedCar(car);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedCar(null);
  };

  useEffect(() => {
    const fetchVehicleLogs = async () => {
      try {
        // Make the API call to fetch registered vehicle logs
        const response = await axios.get('https://aiparkingsystem-0ihqbt7l.b4a.run/api/v1/vehicles/registered-logs', {
          headers: {
            'Authorization': `Bearer ${token}`, // Include the token for authorization
          },
        });

        // Update state with fetched vehicle logs
        setVehicleLogs(response.data); // Assuming the response data contains the logs
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching vehicle logs:", error);
        setLoading(false);
      }
    };

    fetchVehicleLogs(); // Call the function to fetch the data
  }, [token]);

  return (
    <div className="bg-white-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Car Arrival and Departure Information
      </h1>
      <div className="mb-6 flex justify-center space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-200 transform hover:scale-105"
          onClick={() => navigate('/unregisteredVehicles', { state: { user: currentUser } })}
        >
          Unregistered Vehicles
        </button>
        <button
          className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-200 transform hover:scale-105"
          onClick={() => navigate('/vehicleDashboard', { state: { user: currentUser } })}
        >
          Go to Dashboard
        </button>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
              <th className="py-4 px-6 text-left">Car Number</th>
              <th className="py-4 px-6 text-left">Arrival Time</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
              {vehicleLogs.length > 0 ? (
                vehicleLogs.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-300 hover:bg-blue-100 transition duration-200 cursor-pointer"
                  >
                    <td className="py-4 px-6">{item.licensePlate}</td>
                    <td className="py-4 px-6">{item.arrivalTime}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-4 px-6 text-center">No registered vehicle logs found.</td>
                </tr>
              )}
            </tbody>
        </table>
      </div>


      {/* Popup for displaying the car image */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-xl font-bold text-red-600 hover:text-red-800 transition"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">{selectedCar.carNumber} - Car Image</h2>
            <img
              src={selectedCar.imageUrl}
              alt={`Car ${selectedCar.carNumber}`}
              className="w-96 h-64 object-cover rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleResults;
