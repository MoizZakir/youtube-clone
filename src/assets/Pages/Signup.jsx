import React, { useEffect, useRef } from 'react'
import '../Styles/signup.css'
import { TextField } from '@mui/material'
import { FaYoutube } from 'react-icons/fa'
import useSignup from '../../APIs calls/signupApi.js'
import { useDispatch } from 'react-redux'


const Signup = () => {
  const dispatch=useDispatch()
  let name=useRef()
  let email=useRef()
  let password=useRef()
  let cPassword=useRef()
  let address=useRef()
  let country=useRef()
  let phone=useRef()
  let dob=useRef()
 const handler=async()=>{
  console.log('==>' ,name.current)
  if(!name.current ||!email.current ||!password.current ||!cPassword.current ||!address.current ||!country.current ||!phone.current ||!dob.current){
    return alert('please complete all fields')
}
const obj={
  name:name.current,
   email:email.current,
    password:password.current,
     address:address.current,
      country:country.current,
       phone:phone.current, dob:dob.current
}
await useSignup(obj,dispatch)
 }     

  return (
    <div className='signup' >
      <div className="signup-body">
        <FaYoutube style={{position:'absolute', color:"red", fontSize:"30px"}}/>
        <h3> Create an Account</h3>
        <form action="">
          <TextField style={{margin:'5px 10px' ,width:"300px"}} type='text'  className='feilds' variant='outlined' label='Name' onChange={(e)=>{name.current=e.target.value}} />
          <TextField style={{margin:'5px 10px' ,width:"300px"}} type='number' className='feilds' variant='outlined' label='PhoneNo' onChange={(e)=>{phone.current=e.target.value}} />
          <TextField style={{margin:'5px 10px' ,width:"300px"}} type='text' className='feilds' variant='outlined' label='Country' onChange={(e)=>{country.current=e.target.value}} />
          <TextField  style={{margin:'5px 10px' ,width:"300px"}}
          id="outlined-multiline-flexible"
          label="Address"
          multiline
          maxRows={4} onChange={(e)=>{address.current=e.target.value}}
        />
       <input onChange={(e)=>{dob.current=e.target.value}}  style={{margin:'5px 10px' ,width:"300px"}} type="date" className='date' />
          
   
          <TextField  style={{margin:'5px 10px' ,width:"300px"}} type='email' className='feilds' variant='outlined' label='Email' onChange={(e)=>{email.current=e.target.value}} />
          <TextField  style={{margin:'5px 10px' ,width:"300px"}} type='password' className='feilds' variant='outlined' label='Password' onChange={(e)=>{password.current=e.target.value}} />
          <TextField  style={{margin:'5px 10px' ,width:"300px"}} type='password' className='feilds' variant='outlined' label='ConfirmPassword' onChange={(e)=>{cPassword.current=e.target.value}} />
        </form>
        <div className="button">
          <button onClick={()=>{handler()}}> REGISTER</button>

        </div>
<p>Already have account? <span> login</span></p>
      </div>
    </div>
  )
}

export default Signup