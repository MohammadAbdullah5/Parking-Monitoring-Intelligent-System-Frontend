import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const WithoutLicenseVehicleResults = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation();
  const currentUser = location.state?.user;
  const token = currentUser.token;

  const [vehicleLogs, setVehicleLogs] = useState([]);

  // Fetch unregistered vehicle logs from the API
  useEffect(() => {
    const fetchUnregisteredVehicleLogs = async () => {
      try {
        const response = await axios.get('https://aiparkingsystem-0ihqbt7l.b4a.run/api/v1/vehicles/unregistered-logs', {
          headers: {
            'Authorization': `Bearer ${token}`, // Include the token for authorization
          },
        });

        // Set the vehicle logs state with the fetched data
        setVehicleLogs(response.data); // Assuming the API returns an array of logs
      } catch (error) {
        console.error("Error fetching unregistered vehicle logs:", error);
      }
    };

    fetchUnregisteredVehicleLogs(); // Call the function to fetch data
  }, [token]);

  const handleRowClick = (car) => {
    setSelectedCar(car);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedCar(null);
  };

  // Helper function to format the arrivalTime into a readable format
  const formatArrivalTime = (arrivalTime) => {
    const dateObj = new Date(arrivalTime);

    if (isNaN(dateObj)) {
      return 'Invalid Date'; // Fallback for invalid date
    }

    const formattedDate = dateObj.toLocaleDateString('en-US'); // MM/DD/YYYY format
    const formattedTime = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }); // HH:mm AM/PM format

    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-lg rounded-md">
        <h1 className="text-2xl font-bold mb-6">Arrival Information</h1>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
                <th className="py-4 px-6 text-left">Arrival Time</th>
                <th className="py-4 px-6 text-left">License Plate</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {vehicleLogs.map((item, index) => {
                const formattedArrivalTime = formatArrivalTime(item.arrivalTime); // Format arrival time
                return (
                  <tr
                    key={index}
                    className="border-b border-gray-300 hover:bg-blue-100 transition duration-200"
                  >
                    <td className="py-4 px-6">{formattedArrivalTime}</td> {/* Display formatted arrival time */}
                    <td className="py-4 px-6">{item.licensePlate}</td> {/* Display license plate */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button
          className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          onClick={() => navigate('/vehicleDashboard', { state: { user: currentUser } })}
        >
          Go Back to Dashboard
        </button>
      </div>
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

export default WithoutLicenseVehicleResults;
