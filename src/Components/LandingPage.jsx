import React from "react";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const data = [
    { carNumber: "ABC123", arrivalTime: "08:00 AM", departureTime: "09:00 AM" },
    { carNumber: "XYZ456", arrivalTime: "09:30 AM", departureTime: "10:30 AM" },
    { carNumber: "LMN789", arrivalTime: "11:00 AM", departureTime: "12:00 PM" },
    { carNumber: "PQR012", arrivalTime: "01:00 PM", departureTime: "02:00 PM" },
    { carNumber: "STU345", arrivalTime: "03:00 PM", departureTime: "04:00 PM" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-10">
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
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 hover:bg-blue-100 transition duration-200"
              >
                <td className="py-4 px-6">{item.carNumber}</td>
                <td className="py-4 px-6">{item.arrivalTime}</td>
                <td className="py-4 px-6">{item.departureTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* button */}
      <div>
        <Link to="/results">
          <button className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
            Cars which have no number plate
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
