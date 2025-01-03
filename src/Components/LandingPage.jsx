import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a separate component
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            License Plate Detection System for UET Parking
          </h1>
          <p className="text-lg mb-8">
            Seamlessly monitor and manage vehicle arrivals and departures in your parking lot, with automatic license plate detection and real-time data.
          </p>
          <Link to="/signin">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition">
              Get Started
            </button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Real-time License Plate Detection</h3>
              <p className="text-gray-600">
                Automatically detect the license plates of all arriving and departing vehicles, recording their entry and exit times.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Accurate Time Tracking</h3>
              <p className="text-gray-600">
                Record exact timestamps for every vehicle, ensuring accurate time-based recording and better parking management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Reading Unregistered Vehicles</h3>
              <p className="text-gray-600">
                Record vehicles not registered in the system.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
