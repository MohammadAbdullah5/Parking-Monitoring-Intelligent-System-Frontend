import React from 'react';
import VehicleResults from './Components/VehicleResults';
import Navbar from './components/Navbar';
import Footer from './Components/Footer';
import Dashboard from './Components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import WithoutLicenseVehicleResults from './Components/WithoutLicenseVehicles'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/vehicle-results' element={<VehicleResults />} />
        <Route path='/no-license' element={<WithoutLicenseVehicleResults />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
      <Footer />      
    </Router>
  );
}

export default App;
