import React from 'react';
import VehicleResults from './Components/VehicleResults';
import Navbar from './Components/Navbar'; // Changed to 'Components' for consistency
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UnregisteredVehicles from './Components/UnregisteredVehicles';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import VehicleManagement from './Components/VehicleManagement';
import AddVehicle from './Components/AddVehicle';
import VehicleDetailsShowPage from './Components/VehicleDetails'; // Changed to 'Car' for consistency
import UserDashboard from './Components/UserDashboard';


function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <main>
          <Routes>
            <Route path="/vehicleResults" element={<VehicleResults />} />
            <Route path="/vehicleDashboard" element={<VehicleManagement />} />
            <Route path="/addVehicle" element={<AddVehicle />} />
            <Route path="/unregisteredVehicles" element={<UnregisteredVehicles />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/vehicleDetails" element={<VehicleDetailsShowPage />} />
            <Route path="/userdashboard" element={<UserDashboard/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
