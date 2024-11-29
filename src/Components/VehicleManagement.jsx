import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const vehicles = [
  { id: 1, licensePlate: "ABC 123", userEmail: "abc123@gmail.com" },
  { id: 2, licensePlate: "DEF 456", userEmail: "def456@gmail.com" },
  { id: 3, licensePlate: "GHI 789", userEmail: "ghi789@gmail.com" },
];

const ManageVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState({
    show: false,
    vehicleLicensePlate: null,
  });
  const [editVehicle, setEditVehicle] = useState({
    show: false,
    vehicle: null,
  });
  const [newLicensePlate, setNewLicensePlate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get(
        "https://aiparkingsystem-0ihqbt7l.b4a.run/api/v1/users/view-vehicles"
      );
      setVehicles(response.data); // Adjust 'vehicles' based on API response structure
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      toast.error("Failed to fetch vehicles.");
    }
  };

  const handleDeleteClick = (vehicleLicensePlate) => {
    setConfirmDelete({ show: true, vehicleLicensePlate });
  };

  const handleConfirmDelete = async () => {
    if (confirmDelete.vehicleLicensePlate) {
        console.log("Deleting vehicle with license plate:", confirmDelete.vehicleLicensePlate);
      try {
        await axios.delete(
          `https://aiparkingsystem-0ihqbt7l.b4a.run/api/v1/users/delete-vehicle?licensePlate=${confirmDelete.vehicleLicensePlate}`);
        toast.success("Vehicle deleted successfully!");
        setConfirmDelete({ show: false, vehicleId: null });
        fetchVehicles(); // Refresh the list
      } catch (error) {
        console.error("Error deleting vehicle:", error);
        toast.error("Failed to delete vehicle.");
        setConfirmDelete({ show: false, vehicleId: null })
      }
    }
  };

  const handleEditClick = (vehicle) => {
    setEditVehicle({ show: true, vehicle });
    setNewLicensePlate(vehicle.licensePlate);
  };

  const handleConfirmEdit = async () => {
    if (editVehicle.vehicle) {
      try {
        const updatedVehicle = {
          licensePlate: newLicensePlate,
          ownerEmail: editVehicle.vehicle.ownerEmail,
        };
        await axios.put(
          "https://aiparkingsystem-0ihqbt7l.b4a.run/api/v1/users/update-vehicle",
          updatedVehicle
        );
        toast.success("Vehicle updated successfully!");
        setEditVehicle({ show: false, vehicle: null });
        fetchVehicles(); // Refresh the list
      } catch (error) {
        console.error("Error updating vehicle:", error);
        setEditVehicle({ show: false, vehicle: null });
        toast.error("Failed to update vehicle.");
      }
    }
  };

  return (
    <div className="p-6">
      <ToastContainer />

      {/* Header and Back Link */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Manage Vehicles</h1>
        <Link
          to="/vehicleResults"
          className="text-custom-violet hover:underline"
        >
          ← Back to Results
        </Link>
      </div>

      {/* Add New Vehicle Button */}
      <div className="mb-6">
        <Link to="/addvehicle">
          <button className="bg-custom-violet text-white py-2 px-4 rounded-lg hover:bg-opacity-90">
            Add New Vehicle
          </button>
        </Link>
      </div>

      {/* Vehicles Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
              <th className="py-4 px-6 text-left">License Plate</th>
              <th className="py-4 px-6 text-left">User Email</th>
              <th className="py-4 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {vehicles.map((vehicle) => (
              <tr
                key={vehicle.id}
                className="border-b border-gray-300 hover:bg-blue-100 transition duration-200"
              >
                <td className="py-4 px-6">{vehicle.licensePlate}</td>
                <td className="py-4 px-6">{vehicle.ownerEmail}</td>
                <td className="py-4 px-6">
                  {/* Edit and Delete Buttons */}
                  <button
                    onClick={() => handleEditClick(vehicle)}
                    className="bg-blue-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(vehicle.licensePlate)}
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Delete Pop-up */}
      {confirmDelete.show && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Are you sure you want to delete this vehicle?
            </h3>
            <div className="flex justify-end">
              <button
                onClick={() =>
                  setConfirmDelete({ show: false, vehicleId: null })
                }
                className="bg-gray-400 text-white py-2 px-4 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit License Plate Pop-up */}
      {editVehicle.show && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Edit Vehicle License Plate
            </h3>
            <input
              type="text"
              value={newLicensePlate}
              onChange={(e) => setNewLicensePlate(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setEditVehicle({ show: false, vehicle: null })}
                className="bg-gray-400 text-white py-2 px-4 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmEdit}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageVehicles;
