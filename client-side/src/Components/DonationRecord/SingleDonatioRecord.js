import { HealingRounded } from "@material-ui/icons";
import { BloodtypeRounded, EventAvailableRounded, MedicationRounded } from "@mui/icons-material";
import React from "react";
import './SingleDonationRecord.css';

const SingleDonationRecord = ({name, bloodCase, noOfBottles, date}) =>
{
    return(
        <div className="single-donation-container">
            <div className="single-donation-child">
                <div className="record-info">
                    <BloodtypeRounded fontSize="small"/>
                    <p className="record-info-text"> Donated To: {name}</p>
                </div>

                <div className="record-info">
                    <HealingRounded fontSize="small"/>
                    <p className="record-info-text"> Case: {bloodCase}</p>
                </div>

                <div className="record-info">
                    <MedicationRounded fontSize="small"/>
                    <p className="record-info-text"> Number of Bottles: {noOfBottles}</p>
                </div>

                <div className="record-info">
                    <EventAvailableRounded fontSize="small"/>
                    <p className="record-info-text">  Date: {date}</p>
                </div>
                
            </div>
        </div>
    )


}

export default SingleDonationRecord