import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'
import { useParams } from 'react-router-dom'
import { multipleChoiceQuestions } from '../../dumydata'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const VideoPage = () => {
    const {id}=useParams()
    const [video,setVideo]=useState({})

    //GET VIDEO FOR PLAYING FUNCTION
    async function api(){
      try {
        const video=await axios.get(`http://localhost:8000/api/video/${id}`)
        if(video?.data?.status){
          
          setVideo(video?.data?.data)


        }
        console.log('<=======>',video)
        
        
      } catch (error) {
        console.log(error)
        
      }
      
    }

    useEffect(()=>{
      api()
    },[id])


    
    console.log(id)
  return (
    <div>
      <ToastContainer/>
        <Navbar type='videopage'/>
        <Video   data={video}/>
    </div>
  )
}

export default VideoPage