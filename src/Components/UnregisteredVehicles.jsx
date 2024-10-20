import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WithoutLicenseVehicleResults = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const data = [
    { arrivalTime: '08:00 AM', imageUrl: 'https://via.placeholder.com/30' },
    { arrivalTime: '09:30 AM', imageUrl: 'https://via.placeholder.com/30' },
    { arrivalTime: '11:00 AM', imageUrl: 'https://via.placeholder.com/30' },
    { arrivalTime: '01:00 PM', imageUrl: 'https://via.placeholder.com/30' },
    { arrivalTime: '03:00 PM', imageUrl: 'https://via.placeholder.com/30' },
  ];

  const handleRowClick = (car) => {
    setSelectedCar(car);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedCar(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-lg rounded-md">
        <h1 className="text-2xl font-bold mb-6">Arrival Information (No Number Plates)</h1>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
                <th className="py-4 px-6 text-left">Arrival Time</th>
                <th className="py-4 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {data.map((item, index) => (
                <tr 
                  key={index}
                  className="border-b border-gray-300 hover:bg-blue-100 transition duration-200"
                  onClick={() => handleRowClick(item)}>
                  <td className="py-4 px-6">{item.arrivalTime}</td>
                  <td className="py-4 px-6">
                    <button onClick={() => alert(`Viewing details for car arriving at ${item.arrivalTime}`)}>
                      <img src={item.imageUrl} alt="View Details" className="w-8 h-8" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          onClick={() => navigate('/')}
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
