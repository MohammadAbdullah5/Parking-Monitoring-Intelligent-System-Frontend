import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const CarDetailShowPage = () => {
  const { state } = useLocation(); // Retrieve car details from navigation state
  const { carDetails } = state || {}; // Destructure carDetails from state
  const [logs, setLogs] = useState([]); // State to store logs
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors
  const licensePlate = carDetails?._id; // Get license plate from car details

  useEffect(() => {
    if (licensePlate) {
      // Make the API call to fetch logs based on license plate
      axios
        .get(`https://aiparkingsystem-0ihqbt7l.b4a.run/api/v1/vehicles/logs/${licensePlate}`, {
          headers: {
            Authorization: `Bearer ${state.t}`, // Include the token for authorization
          },
        })
        .then((response) => {
          setLogs(response.data); // Store the logs in state
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch((err) => {
          setError("Failed to fetch logs"); // Handle error
          setLoading(false); // Set loading to false if there's an error
        });
    }
  }, [licensePlate]); // Dependency on licensePlate, so it runs when licensePlate changes

  if (loading) {
    return <div>Loading...</div>; // Show loading text while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Show error message if fetching fails
  }

  if (!carDetails) {
    return <div>Car details not available.</div>;
  }

  return (
    <div className="container mx-auto mt-5 px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Car Details</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Owner Information</h2>
          <p className="mt-2">
            <span className="font-medium">Number Plate:</span>{" "}
            {carDetails.licensePlate}
          </p>
          <p className="mt-2">
            <span className="font-medium">Email:</span> {carDetails.ownerEmail}
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-2">Schedule</h2>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
                <th className="py-4 px-6 text-left">Date</th>
                <th className="py-4 px-6 text-left">Arrival Time</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {logs.map((item, index) => {
                // Convert the string to a Date object
                const arrivalDate = new Date(item.arrivalTime);

                // Extract the date and time in a readable format
                const formattedDate = arrivalDate.toLocaleDateString("en-US"); // Formats the date (e.g., "12/15/2024")
                const formattedTime = arrivalDate.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                }); // Formats the time (e.g., "11:54 AM")

                return (
                  <tr
                    key={index}
                    className="border-b border-gray-300 hover:bg-blue-100 transition duration-200"
                  >
                    <td className="py-4 px-6">{formattedDate}</td>{" "}
                    {/* Display formatted date */}
                    <td className="py-4 px-6">{formattedTime}</td>{" "}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CarDetailShowPage;
