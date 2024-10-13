import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const data = [
    { arrivalTime: '08:00 AM', imageUrl: 'https://via.placeholder.com/30' },
    { arrivalTime: '09:30 AM', imageUrl: 'https://via.placeholder.com/30' },
    { arrivalTime: '11:00 AM', imageUrl: 'https://via.placeholder.com/30' },
    { arrivalTime: '01:00 PM', imageUrl: 'https://via.placeholder.com/30' },
    { arrivalTime: '03:00 PM', imageUrl: 'https://via.placeholder.com/30' },
  ];

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
                <tr key={index} className="border-b border-gray-300 hover:bg-blue-100 transition duration-200">
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
    </div>
  );
};

export default ResultPage;
