import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
import ChatBox from './Components/ChatBox/ChatBox';
import Dashboard from './Components/Dashboard/Dashboard';
import FindDonor from './Components/FindDonor/FindDonor';
import Home from './Components/Home/Home';
import LoginPage from './Components/LoginPage/LoginPage';
import MapService from './Components/Map/MapService';
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
                            <Route path='/chat' element={<ChatBox />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/locationservice' element={<MapService />} />
                            <Route path='/register' element={<RegisterPage />} />
                            <Route path="/finddonor" element={<FindDonor />} />
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
}

export default App;
