import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddVehicle = () => {
  const [vehicleData, setVehicleData] = useState({
    licensePlate: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({
      ...vehicleData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation checks
    if (!vehicleData.licensePlate || !vehicleData.email || !vehicleData.password) {
      toast.error('All fields are required.');
      return;
    }

    // Simulate API request (You can replace this with an actual API call)
    console.log('Vehicle Registered:', vehicleData);
    toast.success('Vehicle registered successfully!');

    // After success, navigate back to the vehicle dashboard
    setTimeout(() => {
      navigate('/vehicleDashboard');
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Vehicle</h1>
        <form onSubmit={handleSubmit}>
          {/* License Plate Number Input */}
          <div className="mb-4">
            <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700">License Plate Number</label>
            <input
              type="text"
              id="licensePlate"
              name="licensePlate"
              value={vehicleData.licensePlate}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter License Plate Number"
              required
            />
          </div>

          {/* User Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">User Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={vehicleData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter User Email"
              required
            />
          </div>

          {/* User Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">User Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={vehicleData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter User Password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-md w-full hover:bg-indigo-700"
            >
              Register Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicle;
