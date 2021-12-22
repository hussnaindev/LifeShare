import {BookRounded} from "@material-ui/icons";
import {collection, onSnapshot} from "firebase/firestore";
import React, {useEffect, useState} from "react";
import {auth, firestore} from "../../Firebase";
import SideBar from "../SideBar/SideBar";
import './DonationRecord.css';
import SingleDonationRecord from "./SingleDonatioRecord";

const DonationRecord = () => {
    const [bloodDonations, setBloodDonations] = useState([{patientName: null, bottles: null, case: null, date: null}])
    
    useEffect(
        () => {
            onSnapshot(collection(firestore, "Users"), 
                (users) => {
                    users.docs.map(
                        (user) => {
                            if (user.data().username === auth.currentUser.displayName) {
                                onSnapshot(collection(user.ref, "blood donations"), 
                                    (bloodDons) => {
                                        setBloodDonations(
                                            bloodDons.docs.map(
                                                (bloodDon) => (
                                                    {
                                                        patientName: bloodDon.data().patientName,
                                                        bottles: bloodDon.data().bottles,
                                                        case: bloodDon.data().bloodCase,
                                                        date: bloodDon.data().date
                                                    }
                                                )
                                            )
                                        )
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
        <>
        <SideBar profile={auth.currentUser.displayName} />
        <div className="donation-record-page">
            <div className="record-container">
                <div className="record-heading">
                    <p>Donation Records</p>
                    <BookRounded />
                </div>
                <div className="record-child-container">
                    {
                        React.Children.toArray(
                            bloodDonations.map(
                                bloodDonation => <SingleDonationRecord name={bloodDonation.patientName} bloodCase={bloodDonation.case} noOfBottles="2" date="21-12-2012"/>
                            )
                        )
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default DonationRecord