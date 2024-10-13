import React from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import ResultPage from './Components/ResultPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/results' element={<ResultPage />} />

      </Routes>
      <Footer />      
    </Router>
  );
}

export default App;
