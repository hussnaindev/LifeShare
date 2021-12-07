import React from 'react';
import SideBar from './SideBar';

function Home() {
    return (
        <section className="home">
            <SideBar listItems={["Login", "Register", "Countinue as a Guest", "Hospitals"]} />
            <div className="home__page">
                <h1 className="home__page__heading">
                    Welcome to LifeShare
                </h1>
            </div>
        </section>
    )
}

export default Home