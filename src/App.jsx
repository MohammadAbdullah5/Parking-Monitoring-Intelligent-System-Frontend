import React from 'react';
import VehicleResults from './Components/VehicleResults';
import Navbar from './Components/Navbar'; // Changed to 'Components' for consistency
import Footer from './Components/Footer';
import Dashboard from './Components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WithoutLicenseVehicleResults from './Components/WithoutLicenseVehicles';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import VehicleManagement from './Components/VehicleManagement';
import AddVehicle from './Components/AddVehicle';
import CarsDetails from './Components/CarsDetails';
import Car from './Components/Car'; // Changed to 'Car' for consistency

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <main>
          <Routes>
            <Route path="/vehicleResults" element={<VehicleResults />} />
            <Route path="/vehicleDashboard" element={<VehicleManagement />} />
            <Route path="/addvehicle" element={<AddVehicle />} />
            <Route path="/no-license" element={<WithoutLicenseVehicleResults />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/car" element={<CarsDetails />} />
            <Route path="/car-details" element={<Car />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
