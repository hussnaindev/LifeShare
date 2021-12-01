import React from 'react'
import LoginPage from './Components/LoginPage/LoginPage'
import RegisterPage from './Components/RegisterPage/RegisterPage';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>

       <Route exact path='/' element={<RegisterPage />} />
       <Route exact path='/register' element={<RegisterPage />} />
       <Route exact path='/login' element={<LoginPage />} />

      </Routes>
    </Router>
   
    
  );
}

export default App;
