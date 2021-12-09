import {signInWithEmailAndPassword} from '@firebase/auth';
import {Button, IconButton, InputAdornment, TextField} from '@material-ui/core';
import {AccountCircleRounded, LockRounded, Visibility, VisibilityOff} from '@material-ui/icons';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import auth from '../../Firebase';
import "./LoginPage.css";

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    
    const userSignIn =()=>{
        signInWithEmailAndPassword(auth, email, password).then(
            window.alert("User has been logged in")
        ).catch(
            (err) => {
                window.alert(err);
            }
        )
    }

    return (
        <div className='loginPage'>
            <div className='loginForm-container'>
                <form className='loginForm' onSubmit={(e) => e.preventDefault()}>
                    <AccountCircleRounded style={{ fontSize: 60 }} />
                    <div className='username-container'>
                        <TextField className='username' label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}
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
                                    <IconButton className='iconbtn' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>,
                                startAdornment: <InputAdornment position="start">
                                    <LockRounded />
                                </InputAdornment>
                            }}
                        />
                    </div>
                    <div className='forgot-pwd-container'>
                        <Link className='forgot-pwd' to='#'>Forgot Password?</Link>
                    </div>
                    <div className='login-btn-container'>
                        <Button variant='contained' color="primary" onClick={() => userSignIn(email, password)} className="login-btn" type='submit'>Login</Button>
                    </div>
                    <div className='link-to-register-container'>
                        Don't have account?
                        <Link className='link-to-register' to='/register'>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage