import { Button } from "@material-ui/core";
import React from "react";
import SideBar from "../../Home/JavaScript/SideBar";
import '../Styles/Dashboard.css'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import BookIcon from '@mui/icons-material/Book';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


const Dashboard = () =>
{
    return(
        <div className='dashboard-page' >
            <div className='sidebar'>
                <SideBar listItems={["Login", "Register", "Countinue as a Guest", "Hospitals"]} />
            </div>

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

                    <button className='dashboard-button'>
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