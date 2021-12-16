import React from 'react';
import './Home.css'
import logo from './Icons/bd3.png'
import bg from './Icons/bd2.png'

function Home() {
    return (
        <div className='homepage'>
            
            <div className='navbar'>
                <div className='app-logo'>
                    <img src={logo} height="50px" alt='logo-image' ></img>
                </div>
                <div className='navbar-buttons'>
                    <button className='login-button'>Login</button>
                    <button className='register-button'>Register</button>
                </div>
            </div>

            <div className='homepage-info-container'>
                <div className='info-container'>
                    <div className='info'>
                        <h1 className='info-title'>
                            LifeShare
                            <img src={logo} height="40px" alt='logo-image' ></img>
                        </h1>
                        <p className='info-detail'>
                            Let's Donate to Save Lifes. LifeShare is a platform to help people
                            in blood arrangement and also provide opportunites to volunteers for
                            this charity act. 
                        </p>

                  

                        <p className='info-quote'>
                        "Opportunities knock the door sometimes, so don’t let it go and donate blood.”
                        </p>

                        <div className='readmore-button-container'>
                            <button className='readmore-button'>
                                Read more
                            </button>
                        </div>
                       

                    </div>
                </div>

                <div className='image-container'>
                    <div className='blood-image'>
                        <img src={bg} alt='logo'></img>
                    </div>
                    
                </div>
                


            </div>
        </div>
    )
}

export default Home