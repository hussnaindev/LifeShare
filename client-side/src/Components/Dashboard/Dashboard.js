import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import BookIcon from '@mui/icons-material/Book';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import React from "react";
import {auth} from '../../Firebase';
import './Dashboard.css';


const Dashboard = () => {
    const logout = () => {
        auth.signOut()
    }
    
    
    return(
        <div className='dashboard-page' >
            <div className='dashboard-container'>
                <div className='dashboard'>
                    <button className='dashboard-button'>
                        <div className='dashboard-button-content'>
                            <div>
                              <PersonSearchIcon style={{fontSize:'50px'}}/>
                            </div>
                            Find Donor
                        </div>
                    </button>

                    <button className='dashboard-button'>
                        <div className='dashboard-button-content'>
                            <div>
                              <BloodtypeIcon style={{fontSize:'50px'}}/>
                            </div>
                            Blood Request
                        </div>
                    </button>

                    <button className='dashboard-button'>
                        <div className='dashboard-button-content'>
                            <div>
                              <BookIcon style={{fontSize:'50px'}}/>
                            </div>
                            Donation Records
                        </div>
                    </button>

                    <button className='dashboard-button'>
                        <div className='dashboard-button-content'>
                            <div>
                              <LocationOnIcon style={{fontSize:'50px'}}/>
                            </div>
                            Locate Donor
                        </div>
                    </button>

                    <button className='dashboard-button'>
                        <div className='dashboard-button-content'>
                            <div>
                              <AccountCircleIcon style={{fontSize:'50px'}} />
                            </div>
                            Update Account
                        </div>
                    </button>

                    <button className='dashboard-button' onClick={logout}>
                        <div className='dashboard-button-content'>
                            <div>
                              <LogoutIcon style={{fontSize:'50px'}}/>
                            </div>
                            Log out
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard