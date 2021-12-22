import {LocalHospitalRounded} from "@material-ui/icons";
import {AssignmentRounded, BloodtypeRounded, BookRounded, EventRounded, LocationOnRounded, MedicationRounded, MilitaryTechRounded, PersonSearchRounded, VolunteerActivismRounded} from "@mui/icons-material";
import {collection, onSnapshot} from "firebase/firestore";
import React, {useEffect, useState} from "react";
import {auth, firestore} from "../../Firebase";
import './Dashboard.css';
import logo from './Icons/bd1.png';
import bg from './Icons/bd4.png';

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState({bloodGroup: null, donations: null, bloodReqest: null});
    
    useEffect(
        () => {
            onSnapshot(collection(firestore, "Users"),
                (users) => {
                    users.docs.map(
                        (user) => {
                            if (user.data().username === auth.currentUser.displayName) {
                                setUserInfo(
                                    {
                                        bloodGroup: user.data().bloodGroup,
                                        donations: user.data().donations,
                                        bloodRequests: user.data().bloodRequests
                                    }
                                )
                            }
                        }
                    )
                }
            )
        }, []
    )
    
    return(
        <div className="dashboard-page">
            <div className='bg-logo'>
                <img src={bg} height="150px" alt='logo' ></img>
            </div>
            <div className="dashboard-content">
                <div className="greeting-text">
                   <div className='logo'>
                        <img src={logo} height="30px" alt='logo' ></img>
                    </div>
                    <p>Welcome, {auth.currentUser.displayName}</p>
                </div>
                <div className="info-box-parent">
                    <div className="info-box-container">
                        <div className="dashboard-info-box">
                           <div className='info-box-content'>
                                <div>
                                <BloodtypeRounded style={{fontSize:'30px'}}/>
                                </div>
                                Blood Group: {userInfo.bloodGroup}
                            </div>            
                        </div>
                        <div className="dashboard-info-box">
                           <div className='info-box-content'>
                                <div>
                                <VolunteerActivismRounded style={{fontSize:'30px'}}/>
                                </div>
                                Donations: {userInfo.donations}
                            </div>     
                        </div>
                        <div className="dashboard-info-box">
                           <div className='info-box-content'>
                                <div>
                                <MedicationRounded style={{fontSize:'30px'}}/>
                                </div>
                                Blood Requests: {userInfo.bloodRequests}
                            </div>        
                        </div>
                        <div className="dashboard-info-box">
                           <div className='info-box-content'>
                                <div>
                                <MilitaryTechRounded style={{fontSize:'30px'}}/>
                                </div>
                                Badges: 2
                            </div>            
                        </div>
                    </div>
                </div>
               <div className="actions-parent">
                    <div className="actions-container">
                        <button className="action-btn" onClick={() => window.open("/finddonor", "__self")}>
                            <div className='dashboard-button-content'>
                                <div>
                                <PersonSearchRounded style={{fontSize:'30px'}}/>
                                </div>
                                Find Donor
                            </div>
                        </button>
                        <button className="action-btn" onClick={() => window.open("/locationservice", "__self")}>
                            <div className='dashboard-button-content'>
                                <div>
                                <LocationOnRounded style={{fontSize:'30px'}}/>
                                </div>
                                Nearby Donors
                            </div>
                        </button>
                        <button className="action-btn" onClick={() => window.open("/locationservice", "__self")}>
                           <div className='dashboard-button-content'>
                                <div>
                                <LocalHospitalRounded style={{fontSize:'30px'}}/>
                                </div>
                                Nearby Hospitals
                            </div>
                        </button>
                        <button className="action-btn">
                           <div className='dashboard-button-content'>
                                <div>
                                <AssignmentRounded style={{fontSize:'30px'}}/>
                                </div>
                                Appointments
                            </div>
                        </button>
                        <button className="action-btn" onClick={() => window.open("/donationrecord", "__self")}>
                           <div className='dashboard-button-content'>
                                <div>
                                <BookRounded style={{fontSize:'30px'}}/>
                                </div>
                                Donation Records
                            </div>

                        </button>
                        <button className="action-btn">
                           <div className='dashboard-button-content'>
                                <div>
                                <EventRounded style={{fontSize:'30px'}}/>
                                </div>
                                Events
                            </div>
                        </button>
                    </div>

               </div>

            </div>
            <div className='bg-logo'>
                <img src={bg} height="150px" alt='logo' ></img>
            </div>


        </div>
    )
}

export default Dashboard