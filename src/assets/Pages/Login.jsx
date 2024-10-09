import React, { useRef } from 'react'
import '../Styles/login.css';
import { FaYoutube } from "react-icons/fa"
import { TextField } from '@mui/material';
import useLogin from '../../APIs calls/loginApi';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch=useDispatch()
  let email=useRef()
  let password=useRef()


  const handler=async()=>{
    if(!email || !password ){
      return alert('please fill all feilds')
    }
    const user={
      email:email.current,
      password:password.current
    }

    await useLogin(user,dispatch)

  }

  return (
    <div className='login'>
      <div className="login-body">
        
        <h3> <FaYoutube size={30} color='red' />Login</h3>
        <div className='login-body-text-feilds'>
        <TextField id="outlined-basic" label="Enter email" variant="outlined" type='email' onChange={(e)=>{email.current=e.target.value}} />
        <TextField id="outlined-basic" label="Enter password" variant="outlined" type='password' onChange={(e)=>{password.current=e.target.value}} />
        </div>
        <button onClick={()=>handler()}>Login</button>
        <p className='account' > Create an Account <span>.click here</span></p>
        <p className='forget' > Forget Passowrd <span>.click here</span></p>
        
        
     
      </div>
    </div>
  )
}

export default Login