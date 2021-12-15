import {VolunteerActivism} from '@mui/icons-material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import React from "react";
import './Dashboard.css';


const Dashboard = () => {
    return(
        <section className='dashboard__page' >
            <div className='dashboard'>
                <div className="dashboard__left">
                    <div className="dashboard__heading">
                        Help is just a Click Away
                    </div>
                    <button className='dashboard__button' onClick={() => window.open("/finddonor", "__self")}>
                        <div className='dasboard-button-icon'>
                            <PersonSearchIcon style={{fontSize:'25px'}}/>
                        </div>
                        <p className='dashboard__button-text'>Find Donor</p>
                    </button>
                </div>
                <div className="dashboard__right">
                    <VolunteerActivism style={{fontSize: '25vw', color: "#1976d2"}} />
                </div>
            </div>
        </section>
    )
}

export default Dashboard