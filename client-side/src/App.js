import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
import Home from './Components/Home/JavaScript/Home';
import LoginPage from './Components/LoginPage/JavaScript/LoginPage';
import RegisterPage from './Components/RegisterPage/JavaScript/RegisterPage';

function App() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<RegisterPage />} />
          <Route exact path='/login' element={<LoginPage />} />
        </Routes>
      </Router>
    );
}

export default App;
