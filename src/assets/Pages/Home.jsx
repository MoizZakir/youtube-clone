import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import '../Styles/home.css'
import Post from '../Components/Post'
import Feed from '../Components/Feed'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const cookies = new Cookies();
  console.log('tokenchekc==>  ',cookies.get('token'))
  const [video,setVideo]=useState([])
  useEffect(()=>{
   async function moiz(){
    const api=await axios.get('https://youtube-backend-rho.vercel.app/api/video/all')
    //  const api=await axios.get('https://youtube-backend-rho.vercel.app/api/home',{headers:{Authorization:'Bearers '+cookies.get('token')}})
    //{headers:{Authorization:'Bearers '+cookies.get('token')}}
    console.log(api)
    if(!api?.data?.status){
     return toast.error(api?.data?.message)
    }
    setVideo(api?.data?.data)
   
    
    }
    moiz()
  },[])
  return (
    <div className='Home'>
      <ToastContainer/>

        <Navbar type='homepage'/>
      <Feed data={video}/>
       
    </div>
  )
}

export default Home
