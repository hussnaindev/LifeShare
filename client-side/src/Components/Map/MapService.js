import React, { useState, useEffect } from "react";
import BingMapsReact from "bingmaps-react";


function IssMap() {


    return (
        <>
            <h1 className="map-heading">
                Lahore
            </h1>
            <BingMapsReact
                bingMapsKey="ArzzxnJL3kIXivIC-8MEX9gdGPx20A5RkAGyQkm23tnJieJJSjDMvZcy1GnNx1gW"
                height="650px"
                pushPins={[
                    {
                        options: {},
                        center: {
                            latitude: 57.2,
                            longitude: 12.8,
                        },

                    },
                ]}
                viewOptions={{
                    zoom: 8,
                    center: {
                        latitude: 57.2,
                        longitude: 12.8,
                    },
                    mapTypeId: "standard",
                }}
            />
        </>
    );
}

export default IssMap;