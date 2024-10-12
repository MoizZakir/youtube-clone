import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'
import { useParams } from 'react-router-dom'
import { multipleChoiceQuestions } from '../../dumydata'
import axios from 'axios'

const VideoPage = () => {
    const {id}=useParams()
    // let data=multipleChoiceQuestions.find(e=> e.id==id)
    const [video,setVideo]=useState({})
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


    // console.log(data)
    console.log(id)
  return (
    <div>
        <Navbar type='videopage'/>
        <Video   data={video}/>
    </div>
  )
}

export default VideoPage