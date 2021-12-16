import {collection, onSnapshot, query} from "firebase/firestore";
import React, {useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {Link} from "react-router-dom";
import {auth, firestore} from "../../Firebase";
import "./MapService.css";

function IssMap() {
    // const [latitude, setLatitude] = useState(51.505);
    // const [longitude, setLongitude] = useState(-0.09);
    // const [lon, setL] = useState(false);
    
    // const hello = () => {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    //     setL(true)
    //   } else { 
    //     console.log("Geolocation is not supported by this browser.");
    //   }
    // }
    // const showPosition = (position) => {
    //   setLatitude(position.coords.latitude);
    //   setLongitude(position.coords.longitude);
    // }
    
    const [location, setLocation] = useState([{pos: [51.505, -0.09], name: "Hello"}]);
    const [userLocation, setUserLocation] = useState({pos: [51.505, -0.09], name: "Hello"});
    
    onSnapshot(query(collection(firestore, "Users")),
        (col) => {
            setLocation(
                col.docs.map(
                    (doc) => (
                        {
                            pos: [doc.data().location["_lat"], doc.data().location["_long"]],
                            name: doc.data().name
                        }
                    )
                )
            )
            
            col.docs.map(
                (doc) => {
                    if (doc.data().username === auth.currentUser.displayName) {
                        setUserLocation(
                            {
                                pos: [doc.data().location["_lat"], doc.data().location["_long"]],
                                name: doc.data().name
                            }
                        )
                    }
                }
            )
        }
    )
    
    return (
        <>
            <MapContainer center={userLocation["pos"]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={userLocation["pos"]} >
                    <Popup>
                        Your Location
                    </Popup>
                </Marker>
                {location.map((item, i) => (
                    <Marker
                        position={
                            item.pos
                        }
                        key={i}

                    >
                        <Popup>
                            {item.name}
                            <br />
                            <Link to="/chat" >Chat</Link>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
                    
}

export default IssMap;