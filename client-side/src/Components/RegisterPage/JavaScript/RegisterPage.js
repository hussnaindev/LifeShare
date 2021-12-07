import {Button, IconButton, InputAdornment, TextField} from '@material-ui/core';
import {AccountCircleRounded, EmailRounded, LockRounded, Visibility, VisibilityOff} from '@material-ui/icons';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/RegisterPage.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleUsername = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)

    }

    const handleEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        console.log(e.target.value)
        setConfirmPassword(e.target.value)
    }

    const handleVisibilty = (input) => {
        if (input === 'password') {
            setShowPassword(!showPassword)
        }

        else if (input === 'confirmPassword') {
            setShowConfirmPassword(!showConfirmPassword)
        }
    }

    const handleRegisterForm = (e) => {
        e.preventDefault()
    }

    return (
        <div className='registerPage'>
            <div className='registerForm-container'>
                <form className='registerForm' onSubmit={handleRegisterForm}>
                    <AccountCircleRounded style={{ fontSize: 60 }} />
                    
                    <div className='email-container'>
                        <TextField className='email' label="Email" variant="outlined" value={email} onChange={handleEmail}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <EmailRounded />
                                </InputAdornment>
                            }}
                        />
                    </div>
                    <div className='username-container'>
                        <TextField className='username' label="Username" variant="outlined" value={username} onChange={handleUsername}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <AccountCircleRounded />
                                </InputAdornment>
                            }} />
                    </div>
                    <div className='password-container'>
                        <TextField className='password' label="Password" type={showPassword ? 'text' : 'password'} variant="outlined" value={password} onChange={handlePassword}
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
                        <TextField className='confirmPassword' label="Confirm Password" type={showConfirmPassword ? 'text' : 'password'} variant="outlined" value={confirmPassword} onChange={handleConfirmPassword}
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
                        <Button className='register-btn' color="primary" variant='contained' type='submit'>Register</Button>
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