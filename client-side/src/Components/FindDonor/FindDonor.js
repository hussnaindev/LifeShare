import React, { useState } from 'react'
import './FindDonor.css'
import { TextField,InputAdornment, MenuItem } from '@mui/material'
import {BloodtypeRounded,BusinessRounded,DirectionsCarRounded,HealingRounded,HourglassBottomRounded, MedicationRounded, PermContactCalendarRounded, PersonRounded } from '@mui/icons-material'

const FindDonor = () =>
{

    const bloodGroups = ['A+','A-','B+','B-','O+','O-','AB+','AB-']
    const picknDrop = ['Yes','No']
    const noOfBottles = ['1','2','3','4','5']

    const [patientName,setPatientName] = useState('')
    const [bloodGroup,setBloodGroup] = useState('')
    const [bloodCase,setBloodCase] = useState('')
    const [timePeriod,setTimePeriod] = useState('')
    const [bottles,setBottles] = useState('')
    const [address,setAddress] = useState('')
    const [pickAndDrop,setPickAndDrop] = useState('')
    const [patientContact,setPatientContact] = useState('')
    

    const handleFindDonorForm = (e) =>
    {
        e.preventDefault()
        console.log(e.target.value)

    }

    return(
        <div className='findDonor-container'>

            <div className='findDonor-form-container'>

                <form className='findDonor-form' onSubmit={handleFindDonorForm}>

                  <div className='flex-container'>
                      
                    <div className='fields-container-1'>
                        
                        <TextField className="blood-group-field" label="Blood Group" variant="outlined" value={bloodGroup} onChange={(e)=>setBloodGroup(e.target.value)} required select
                          InputProps={{
                            endAdornment: <InputAdornment position="start">
                                <BloodtypeRounded  />
                            </InputAdornment>
                        }} style={{borderRadius:'50px'}} >
                            {bloodGroups.map(bg => <MenuItem key={bg} value={bg}>{bg}</MenuItem>)}
                        </TextField>
                        
                        <TextField className='case-field' label="Case/Disease" variant="outlined" value={bloodCase} onChange={(e)=>setBloodCase(e.target.value)} required
                          InputProps={{
                            endAdornment: <InputAdornment position="start">
                                <HealingRounded />
                            </InputAdornment>
                        }} style={{borderRadius:'50px'}} ></TextField>                   
                        
                        <TextField className='bottles-field' label="No. of Bottles" variant="outlined" value={bottles} onChange={(e) => setBottles(e.target.value)} required select
                          InputProps={{
                            endAdornment: <InputAdornment position="start">
                                <MedicationRounded />
                            </InputAdornment>
                        }} style={{borderRadius:'50px'}} >
                            {noOfBottles.map(num => <MenuItem key={num} value={num}>{num}</MenuItem>)}
                        </TextField>

                        <TextField className='time-limit-field' label="Time Limit" variant="outlined" value={timePeriod} onChange={(e)=>setTimePeriod(e.target.value)} required
                          InputProps={{
                            endAdornment: <InputAdornment position="start">
                                <HourglassBottomRounded/>
                            </InputAdornment>
                        }}  style={{borderRadius:'50px'}} ></TextField>
                        
                    </div>

                    <div className='fields-container-2'>

                        <TextField className='patient-name-field' label="Patient Name" variant="outlined" value={patientName} onChange={(e) =>setPatientName(e.target.value)} required
                         InputProps={{
                            endAdornment: <InputAdornment position="start">
                                <PersonRounded/>
                            </InputAdornment>
                        }} style={{borderRadius:'50px'}} />  

                        <TextField className='patient-contact-field' label="Patient Contact" variant="outlined" value={patientContact} onChange={(e) => setPatientContact(e.target.value)} required
                         InputProps={{
                            endAdornment: <InputAdornment position="start">
                                <PermContactCalendarRounded/>
                            </InputAdornment>
                        }}
                        style={{borderRadius:'50px'}}
                         />

                        <TextField className="address-field" label="Hospital/Address" variant="outlined" value={address} onChange={(e)=>setAddress(e.target.value)} required 
                         InputProps={{
                            endAdornment: <InputAdornment position="start">
                                <BusinessRounded/>
                            </InputAdornment>
                        }} style={{borderRadius:'50px'}} />

                        <TextField className='picknDrop-field' label="Pick and Drop Service" variant="outlined" value={pickAndDrop} onChange={(e) => setPickAndDrop(e.target.value)} required select
                        InputProps={{
                            endAdornment: <InputAdornment position="start">
                                <DirectionsCarRounded/>
                            </InputAdornment>
                        }}  style={{borderRadius:'50px'}} >
                            {picknDrop.map(availability => <MenuItem key={availability} value={availability}>{availability}</MenuItem>)}
                        </TextField>

                    </div>
                  
                  </div>

                  <div className='findDonor-form-button-container'>
                     
                      <button className='findDonor-form-button' type='submit'>Find Donor</button>
                  
                  </div>
                  
                </form>


            </div>

        </div>
    )
}

export default FindDonor