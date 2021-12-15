import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from "react-router-dom";
import "./MapService.css";

function IssMap() {

    const location = [
        {
            pos: [51.505, -0.09],
            name: "hello world"
        },
        {
            pos: [51.400, -0.09],
            name: "hello world12345"
        },]
    const position = [51.505, -0.09]
    return (
        <>
            <h1 className="map-heading">
                Lahore
            </h1>

            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
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