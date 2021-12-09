import {createUserWithEmailAndPassword} from '@firebase/auth';
import {Button, IconButton, InputAdornment, TextField} from '@material-ui/core';
import {AccountCircleRounded, EmailRounded, LockRounded, Visibility, VisibilityOff} from '@material-ui/icons';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import auth from '../../Firebase';
import './RegisterPage.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then(
            window.alert("User has been Created!")
        ).catch(
            (err) => {
                window.alert(err);
            }
        )
    }

    const handleVisibilty = (input) => {
        if (input === 'password') {
            setShowPassword(!showPassword)
        }

        else if (input === 'confirmPassword') {
            setShowConfirmPassword(!showConfirmPassword)
        }
    }

    return (
        <div className='registerPage'>
            <div className='registerForm-container'>
                <form className='registerForm' onSubmit={(e) => e.preventDefault()}>
                    <AccountCircleRounded style={{ fontSize: 60 }} />

                    <div className='email-container'>
                        <TextField className='email' label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <EmailRounded />
                                </InputAdornment>
                            }}
                        />
                    </div>
                    <div className='username-container'>
                        <TextField className='username' label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <AccountCircleRounded />
                                </InputAdornment>
                            }} />
                    </div>
                    <div className='password-container'>
                        <TextField className='password' label="Password" type={showPassword ? 'text' : 'password'} variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton className='iconbtn' onClick={() => handleVisibilty('password')}>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>,
                                startAdornment: <InputAdornment position="start">
                                    <LockRounded />
                                </InputAdornment>
                            }}
                        />
                    </div>
                    <div className='confirmPassword-container'>
                        <TextField className='confirmPassword' label="Confirm Password" type={showConfirmPassword ? 'text' : 'password'} variant="outlined" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton className='iconbtn' onClick={() => handleVisibilty('confirmPassword')}>
                                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>,
                                startAdornment: <InputAdornment position="start">
                                    <LockRounded />
                                </InputAdornment>
                            }}
                        />
                    </div>
                    <div className='register-btn-container'>
                        <Button className='register-btn' color="primary" variant='contained' onClick={() => registerUser(email, password)}>Register</Button>
                    </div>
                    <div className='link-to-login-container'>
                        <p>Already have account?<Link className='link-to-login' to='/login' >Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage