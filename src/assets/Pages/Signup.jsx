import React from 'react'
import '../Styles/signup.css'
import { TextField } from '@mui/material'
import { FaYoutube } from 'react-icons/fa'


const Signup = () => {
  return (
    <div className='signup' >
      <div className="signup-body">
        <FaYoutube style={{position:'absolute', color:"red", fontSize:"30px"}}/>
        <h3> Create an Account</h3>
        <form action="">
          <TextField style={{margin:'5px 10px' ,width:"300px"}} type='text'  className='feilds' variant='outlined' label='Name' />
          <TextField style={{margin:'5px 10px' ,width:"300px"}} type='number' className='feilds' variant='outlined' label='PhoneNo' />
          <TextField style={{margin:'5px 10px' ,width:"300px"}} type='text' className='feilds' variant='outlined' label='Country' />
          <TextField  style={{margin:'5px 10px' ,width:"300px"}}
          id="outlined-multiline-flexible"
          label="Address"
          multiline
          maxRows={4}
        />
       <input  style={{margin:'5px 10px' ,width:"300px"}} type="date" className='date' />
          
   
          <TextField  style={{margin:'5px 10px' ,width:"300px"}} type='email' className='feilds' variant='outlined' label='Email' />
          <TextField  style={{margin:'5px 10px' ,width:"300px"}} type='password' className='feilds' variant='outlined' label='Password' />
          <TextField  style={{margin:'5px 10px' ,width:"300px"}} type='password' className='feilds' variant='outlined' label='ConfirmPassword' />
        </form>
        <div className="button">
          <button>REGISTER</button>

        </div>
<p>Already have account? <span> login</span></p>
      </div>
    </div>
  )
}

export default Signup