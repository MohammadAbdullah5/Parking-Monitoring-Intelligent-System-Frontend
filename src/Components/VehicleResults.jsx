import React, { useState } from "react";
import { Link } from 'react-router-dom';

const VehicleResults = () => {
  // State to handle the visibility of the popup and selected car data
  const [selectedCar, setSelectedCar] = useState(null);

  const data = [
    { carNumber: "ABC123", arrivalTime: "08:00 AM", departureTime: "09:00 AM", imageUrl: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=600&q=60" },
    { carNumber: "XYZ456", arrivalTime: "09:30 AM", departureTime: "10:30 AM", imageUrl: "https://images.unsplash.com/photo-1514869251087-7b1f29f78b2b?auto=format&fit=crop&w=600&q=60" },
    { carNumber: "LMN789", arrivalTime: "11:00 AM", departureTime: "12:00 PM", imageUrl: "https://via.placeholder.com/300?text=Car+LMN789" },
    { carNumber: "PQR012", arrivalTime: "01:00 PM", departureTime: "02:00 PM", imageUrl: "https://via.placeholder.com/300?text=Car+PQR012" },
    { carNumber: "STU345", arrivalTime: "03:00 PM", departureTime: "04:00 PM", imageUrl: "https://via.placeholder.com/300?text=Car+STU345" },
  ];

  // Function to show the popup with the selected car's image
  const handleRowClick = (car) => {
    setSelectedCar(car);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedCar(null);
  };

  return (
    <div className="bg-white-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Car Arrival and Departure Information
      </h1>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
              <th className="py-4 px-6 text-left">Car Number</th>
              <th className="py-4 px-6 text-left">Arrival Time</th>
              <th className="py-4 px-6 text-left">Departure Time</th>
              <th className="py-4 px-6 text-left">Vehicle Image</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 hover:bg-blue-100 transition duration-200 cursor-pointer"
                onClick={() => handleRowClick(item)} // Handle row click
              >
                <td className="py-4 px-6">{item.carNumber}</td>
                <td className="py-4 px-6">{item.arrivalTime}</td>
                <td className="py-4 px-6">{item.departureTime}</td>
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

      {/* Button */}
      <div>
        <Link to="/no-license">
          <button className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
            Cars which have no number plate
          </button>
        </Link>
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
