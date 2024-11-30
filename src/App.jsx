import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VehicleResults from './Components/VehicleResults';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import UnregisteredVehicles from './Components/UnregisteredVehicles';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import VehicleManagement from './Components/VehicleManagement';
import AddVehicle from './Components/AddVehicle';
import VehicleDetailsShowPage from './Components/VehicleDetails';
import UserDashboard from './Components/UserDashboard';
import PrivateRoutes from './Components/PrivateRoutes';

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <main>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Protected routes wrapped in PrivateRoutes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/vehicleResults" element={<VehicleResults />} />
              <Route path="/vehicleDashboard" element={<VehicleManagement />} />
              <Route path="/addVehicle" element={<AddVehicle />} />
              <Route path="/unregisteredVehicles" element={<UnregisteredVehicles />} />
              <Route path="/vehicleDetails" element={<VehicleDetailsShowPage />} />
              <Route path="/userdashboard" element={<UserDashboard />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
