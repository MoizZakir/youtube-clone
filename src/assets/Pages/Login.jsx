import React from 'react'
import '../Styles/login.css';
import { FaYoutube } from "react-icons/fa"
import { TextField } from '@mui/material';

const Login = () => {
  return (
    <div className='login'>
      <div className="login-body">
        
        <h3> <FaYoutube size={30} color='red' />Login</h3>
        <div className='login-body-text-feilds'>
        <TextField id="outlined-basic" label="Enter email" variant="outlined" type='email' />
        <TextField id="outlined-basic" label="Enter password" variant="outlined" type='password' />
        </div>
        <button>Login</button>
        <p className='account' > Create an Account <span>.click here</span></p>
        <p className='forget' > Forget Passowrd <span>.click here</span></p>
        
        
     
      </div>
    </div>
  )
}

export default Login