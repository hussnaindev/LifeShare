import {VolunteerActivism} from '@mui/icons-material';
import React from 'react';
import {auth} from '../../Firebase';
import Dashboard from '../Dashboard/Dashboard';
import SideBar from '../SideBar/SideBar';

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
                        <SideBar />
                        <div className="home__page">
                            <h1 className="home__page__heading">
                                Welcome to LifeShare
                            </h1>
                            <div className="home__page__icon">
                                <VolunteerActivism style={{fontSize: '25vw', color: "#1976d2"}} />
                            </div>
                        </div>
                    </>
                )
            }
        </section>
    )
}

export default Home