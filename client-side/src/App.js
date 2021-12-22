import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
import Chat from './Components/Chat/Chat';
import DonationRecord from './Components/DonationRecord/DonationRecord';
import FindDonor from './Components/FindDonor/FindDonor';
import Home from './Components/Home/Home';
import LoginPage from './Components/LoginPage/LoginPage';
import MapService from './Components/Map/MapService';
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
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
                            <Route path='/chat' element={<Chat />} />
                            <Route path="/donationrecord" element={<DonationRecord />} />
                            <Route path="/settings" element={<UpdateProfile />} />
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
                            <Route path='/register' element={<RegisterPage />} />
                        </Routes>
                    </Router>
                )
            }
        </section>
    );
}

export default App;
