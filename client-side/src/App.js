import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
import ChatBox from './Components/ChatBox/ChatBox';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import LoginPage from './Components/LoginPage/LoginPage';
import MapService from './Components/Map/MapService';
<<<<<<< HEAD
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import {auth} from './Firebase';

function App() {
    const [user, setUser] = useState(null);
    
    useEffect(
        () => {
            const unsubscribe = auth.onAuthStateChanged(
                (authUser) => {
                    if (authUser) {
                        setUser(authUser);
                    }
                    else {
                        setUser(null);
                    }
                }
            )
            
            return () => {
                unsubscribe();
            }
        }, []
    )
    
    return (
        <section className='app'>
            {
                (user) ? (
                    <Router>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Home />} />
                            <Route path='/chat' element={<ChatBox />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/locationservice' element={<MapService />} />
                            <Route path='/register' element={<RegisterPage />} />
                        </Routes>
                    </Router>
                ) : (
                    <Router>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<LoginPage />} />
                        </Routes>
                    </Router>
                )
            }
        </section>
    );
=======
import Dashboard from './Components/Dashboard/Dashboard';
import ChatBox from './Components/ChatBox/ChatBox'
import FindDonor from './Components/FindDonor/FindDonor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/findDonor' element={<FindDonor />} />
        <Route path='/chat' element={<ChatBox />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/locationservice' element={<MapService />} />
      </Routes>
    </Router>
  );
>>>>>>> 3f4b16440656e986cddde7cc5090372933a2f2c1
}

export default App;
