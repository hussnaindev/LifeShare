import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './Components/Home/Home';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import MapService from './Components/Map/MapService';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/locationservice' element={<MapService />} />
      </Routes>
    </Router>
  );
}

export default App;
