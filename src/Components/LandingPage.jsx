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
            License Plate Detection System for Parking Areas
          </h1>
          <p className="text-lg mb-8">
            Seamlessly monitor and manage vehicle arrivals and departures in your parking lot, with automatic license plate detection and real-time data.
          </p>
          <Link to="/vehicle-results">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition">
              View Vehicle Information
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
              <h3 className="text-2xl font-semibold mb-4">Without License Plate Vehicles Detection</h3>
              <p className="text-gray-600">
                Record vehicles without license plates and notify parking area management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Arrival Detection</h3>
              <p className="text-gray-600">
                As a vehicle enters the parking lot, our system automatically detects the license plate and logs the arrival time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Departure Detection</h3>
              <p className="text-gray-600">
                Upon exit, the system captures the license plate again, logging the departure time and calculating the total stay duration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Get Started</h2>
          <p className="text-lg mb-8">
            Experience the future of parking management with our License Plate Detection System.
          </p>
          <Link to="/vehicle-results">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
              View Vehicle Data
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
