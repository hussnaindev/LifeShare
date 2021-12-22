import {VerifiedUserRounded} from '@material-ui/icons';
import {BloodtypeRounded, EmojiEventsRounded, LocationCityRounded, SecurityRounded} from '@mui/icons-material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import React from 'react';
import {auth} from '../../Firebase';
import Dashboard from '../Dashboard/Dashboard';
import SideBar from '../SideBar/SideBar';
import './Home.css';
import logo from './Icons/bd1.png';
import bg from './Icons/bd2.png';

function Home() {
    return (
        <section className="home">
            {
                (auth.currentUser) ? (
                    <>
                        <SideBar profile={auth.currentUser.displayName} />
                        <Dashboard />
                    </>
                ) : (
                    <>
                    <div className='homepage'>
                        <div className='navbar'>
                            <div className='app-logo'>
                                <img src={logo} height="50px" alt='logo' ></img>
                            </div>
                            <div className='navbar-buttons'>
                                <button className='login-button'onClick={() => window.open('/login', "__self")}>Login</button>
                                <button className='register-button' onClick={() => window.open('/register', "__self")}>Register</button>
                            </div>
                        </div>

                        <div className='homepage-info-container'>
                            <div className='info-container'>
                                <div className='info'>
                                    <p className='info-title-container'>
                                        <div className='info-title'>
                                            LifeShare
                                            <img src={logo} height="40px" alt='logo' ></img>
                                        </div>
                                       
                                        <p className='moto'>"Let's Donate to Save Lives"</p>

                                    </p>
                                    <p className='info-detail'>
                                        Lifeshare is one of the leading platforms
                                        for blood donation services. We aim to make blood services easy, accessible and
                                        efficient.
                                        <button className='readmore-button'>
                                            Read more
                                        </button>
                                    </p>

                                    <div className='achievements'>
                                        <div className='single-ach'>
                                            <AccountCircleRoundedIcon style={{fontSize:'50'}}></AccountCircleRoundedIcon>
                                            <label>1000+ Donors</label>
                                        </div>

                                        <div className='single-ach'>
                                           <LocationCityRounded style={{fontSize:'50'}}></LocationCityRounded>
                                            <label>500+ Hospitals</label>
                                        </div>

                                        <div className='single-ach'>
                                           <BloodtypeRounded style={{fontSize:'50'}}></BloodtypeRounded>
                                            <label>5000+</label>
                                            <label>Donations</label>
                                        </div>

                                        <div className='single-ach'>
                                            <VerifiedUserRounded style={{fontSize:'50'}}></VerifiedUserRounded>
                                            <label>Certified</label>
                                        </div>

                                        <div className='single-ach'>
                                            <EmojiEventsRounded style={{fontSize:'50'}}></EmojiEventsRounded>
                                            <label>Emerging Health</label>
                                            <label>Care App</label> 
                                        </div>

                                        <div className='single-ach'>
                                            <SecurityRounded style={{fontSize:'50'}}></SecurityRounded>
                                            <label>Secure</label>
                                        </div>
                                    
                                    </div>

                                    {/* <p className='info-quote'>
                                    "Opportunities knock the door sometimes, so don’t let it go and donate blood.”
                                    </p> */}
                            
                                </div>
                            </div>

                            <div className='image-container'>
                                <div className='blood-image'>
                                    <img src={bg} alt='logo'></img>
                                </div>
                                
                            </div>
                            


                        </div>
                    </div>
                    </>
                )
            }
        </section>
    )
}

export default Home