import {InputAdornment, MenuItem, TextField} from '@material-ui/core';
import {AccountCircleRounded, HomeRounded, LocalPhoneRounded} from '@material-ui/icons';
import {DriveFileRenameOutlineRounded} from '@mui/icons-material';
import {updateProfile} from 'firebase/auth';
import {collection, onSnapshot, updateDoc} from "firebase/firestore";
import React, {useState} from 'react';
import {auth, firestore} from "../../Firebase";
import SideBar from "../SideBar/SideBar";
import './UpdateProfile.css';

const UpdateProfile = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [bloodGroup, setBloodGroup] = useState("A+");
    
    const bloodGroups = [
        {
          value: 'Aplus',
          label: 'A+',
        },
        {
          value: 'Oplus',
          label: 'O+',
        },
        {
          value: 'Bplus',
          label: 'B+',
        },
        {
          value: 'ABplus',
          label: 'AB+',
        },
        {
          value: 'Aminus',
          label: 'A-',
        },
        {
          value: 'Ominus',
          label: 'O-',
        },
        {
          value: 'Bminus',
          label: 'B-',
        },
        {
          value: 'ABminus',
          label: 'AB-',
        },
      ];
      
      const updateUserInfo = () => {
          onSnapshot(collection(firestore, "Users"),
              (users) => {
                users.docs.map(
                    (user) => {
                        if (user.data().username === auth.currentUser.displayName) {
                            updateDoc(user.ref,
                                {
                                    username: username,
                                    name: name,
                                    phoneNumber: phoneNumber,
                                    address: address,
                                    bloodGroup: bloodGroup
                                }
                            )
                            
                            updateProfile(auth.currentUser,
                                {
                                    displayName: username,
                                }
                            )
                            
                            console.log(auth.currentUser.displayName)
                        }
                    }
                )
              }
          )
      }

    return(
        <>
        <SideBar profile={auth.currentUser.displayName} />
        <div className='update-profile-page'>
            <div className='update-profile-container'>
                <div className='profile-image'>
                    <AccountCircleRounded style={{fontSize:"60"}}></AccountCircleRounded>
                </div>

                <div className='text-fields-container'>
                    <TextField className='picknDrop-field' label="Name" value={name} onChange={(e) => setName(e.target.value)} variant="outlined" required
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <DriveFileRenameOutlineRounded/>
                                    </InputAdornment>
                                }}  style={{borderRadius:'50px', backgroundColor:"white"}} >   
                    </TextField>

                    <TextField className='picknDrop-field' label="Username" value={username} onChange={(e) => setUsername(e.target.value)} variant="outlined" required
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <AccountCircleRounded/>
                                    </InputAdornment>
                                }}  style={{borderRadius:'50px', backgroundColor:"white"}} >   
                    </TextField>

                    <TextField className='picknDrop-field' label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} variant="outlined" required
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <LocalPhoneRounded/>
                                    </InputAdornment>
                                }}  style={{borderRadius:'50px', backgroundColor:"white"}} >   
                    </TextField>

                    <TextField className='picknDrop-field' label="Address" value={address} onChange={(e) => setAddress(e.target.value)} variant="outlined" required
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <HomeRounded/>
                                    </InputAdornment>
                                }}  style={{borderRadius:'50px', backgroundColor:"white"}} >   
                    </TextField>

                    <TextField className='picknDrop-field' label="Blood Group" variant="outlined" required select
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <DriveFileRenameOutlineRounded/>
                                    </InputAdornment>
                                }}  style={{borderRadius:'50px', backgroundColor:"white"}}  >  
                                {bloodGroups.map((option) => (
                        <MenuItem           
                        key={option.value} value={option.label}>
                        {option.label}
                        </MenuItem>
                        ))} 
                    </TextField>
                </div>

            
                <div className='update-button-container'>        
                   <button className = 'update-button' onClick={() => updateUserInfo()} >Update Profile</button>
                </div>
                


            </div>
            

        </div>
        </>
    )
}

export default UpdateProfile