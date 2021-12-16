import {InputAdornment} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {addDoc, collection, GeoPoint} from 'firebase/firestore';
import React, {useState} from 'react';
import {auth, firestore} from '../../Firebase';
import './RegisterPage.css';

const pages = ['Donor', 'Patient', 'Hospital'];

const currencies = [
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


const ResponsiveAppBar = () => {

  // tab function //
  const [tabValue,setTabValue] = React.useState('one');
  const [blood,showBlood] = React.useState('true');
  
  const handleChangeTab = (e, newValue) => {
    if(newValue === 'two' || newValue === 'three')
    {
      showBlood(false);
    }
    else{
      showBlood(true);
    }
    setTabValue(newValue);
  };
  // end of tab function //



  // start of name function //
  const [name,setName] = useState('');
  const handleName = (e,name_text) =>
  {
      // console.log(name_text);
      setName(e.target.value)

  }
  // end of name function //


  // start of username function //
  const [username,setUsername] = useState('');
  const handleUserName = (e,username_text) =>
  {
      // console.log(username_text);
      setUsername(e.target.value)

  }
  // end of username function //




    // start of email function //

  const [email,setEmail] = useState('');
  const handleEmail = (e,email_text) =>
  {
      // console.log(email_text);
      setEmail(e.target.value)

  }

    // end of email function //

  // start of password function //
  const [password,setPassword] = useState('')
  const handlePassword = (e) =>
  {
      setPassword(e.target.value)
  }  

  // password visibilty
  const [showPassword,setShowPassword] = useState(false)
  const handleVisibilty = () => {
      setShowPassword(!showPassword)
  }
  //password visibilty


  const [currency, setCurrency] = React.useState('EUR');
  const [value, setValue] = React.useState(`Aplus`);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrency(event.target.value);
  };

  // var latitude = "";
  // var longitude = "";
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  
  const   getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    
    if (latitude && longitude) {
        setIsLocationGet(true);
    }
  }
  
  const [isLocationGet, setIsLocationGet] = useState(false);
  
  const registerUser = () => {
      getLocation();
      
      if (isLocationGet) {
        createUserWithEmailAndPassword(auth, email, password).then(
            (createUser) => {
                updateProfile(createUser.user,
                    {
                        displayName: username
                    }
                ).then(
                    addDoc(collection(firestore, "Users"),
                        {
                            name: name,
                            username: username,
                            location: new GeoPoint(latitude, longitude),
                            // bloodGroup: value
                        }
                    )
                )
                
                window.open("/", "__self")
            }
        ).catch(
            (err) => {
                window.alert(err);
            }
        )
      }
  }

return (

<div>

    <div className='registerPage'>
      <Container className = 'register-containor'  maxWidth="sm">
        <Box sx={{ width: '100%',hieght:'80vh' }}>
          <h1>Registeration</h1>
          <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example">
          <Tab value="one" label="Donor/Hospital" />
          <Tab value="two" label="Hospital/Organization" />
          <Tab value="three" label="Admininstation"/>
          </Tabs>
        </Box> 
        <form     className ="register-form">
          <div          className = 'field'> 
            <TextField
            inputProps={{style: {fontSize: 14}}}
            className='username'
            id="outlined-number-1"
            label="name"
            type="text"
            value = {name}
            onChange = {handleName}/>
            </div>
 
            <div className = 'field'> 
              <TextField
              inputProps={{style: {fontSize: 14}}}
              className='username'
              id="outlined-number-2"
              label="Username"
              type="username"
              value = {username}
              onChange = {handleUserName}
              InputProps={{ startAdornment: <InputAdornment position="start">
              <AccountCircleIcon /> </InputAdornment>}}/>
            </div>
            <div className = 'field'> 
              <TextField
              inputProps={{style: {fontSize: 14}}}
              className='username'
              id="outlined-number-3"
              label="email"
              type="email"
              value = {email}
              onChange = {handleEmail}
              InputProps={{ startAdornment: <InputAdornment position="start">
              <AccountCircleIcon /> </InputAdornment>}}/>
            </div>
            <div          className = 'field'>
              <TextField
              inputProps={{style: {fontSize: 14}}}
              className='username'
              id="outlined-password-input"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePassword}
              InputProps={{ endAdornment: <InputAdornment position="end">
              <IconButton className='iconbtn' onClick={handleVisibilty}>
              {showPassword ? <Visibility/> : <VisibilityOff/>}
              </IconButton>
              </InputAdornment>,
              startAdornment: <InputAdornment position="start">
              <LockIcon />
              </InputAdornment>}} />
            </div>
            <div className='field'>
              <TextField
              inputProps={{style: {fontSize: 14}}}
              className='username'
              id="outlined-password-input-1"
              label="confirm-Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePassword}
              InputProps={{ endAdornment: <InputAdornment position="end">
              <IconButton className='iconbtn' onClick={handleVisibilty}>
              {showPassword ? <Visibility/> : <VisibilityOff/>}
              </IconButton>
              </InputAdornment>,
              startAdornment: <InputAdornment position="start">
              <LockIcon />
              </InputAdornment>}} />
              </div>
              <div className='field'>
                <TextField
                inputProps={{style: {fontSize: 14}}}
                className='username'
                id="outlined-number-6"
                label="phone-Number"
                type="text"/>
              </div>
              {blood && <div className='field'>
                <TextField className='username'
                inputProps={{style: {fontSize: 11}}}
                InputLabelProps={{style: {fontSize: 11}}}
                id="outlined-select-currency"
                select
                label="Select Blood Group"
                value={currency}
                onChange={handleChange}>
                  {currencies.map((option) => (
                    <MenuItem           
                      key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                    ))}
                </TextField>
              </div>}       
              {!blood &&<br/>}
              <div className='btn'>        
                <Button variant="contained" className = 'btn-1' onClick={registerUser}>Register</Button>
              </div>
            </form>
        </Container>
      </div>
    </div>
  );
};
export default ResponsiveAppBar;
